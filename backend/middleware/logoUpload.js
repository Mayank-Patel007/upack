const fs = require('fs');
const path = require('path');
const multer = require('multer');
const sharp = require('sharp');

// Specify the directory path
const uploadDir = path.join(__dirname, '../logos');

// Check if the directory exists, create it if it doesn't
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Define storage for uploaded photos
const storage = multer.memoryStorage();  // Store files in memory temporarily

// Initialize multer with defined storage options
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: function (req, file, cb) {
        const allowedMimeTypes = ['image/webp', 'image/png'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            req.fileValidationError = 'Only .webp and .png formats are allowed!';
            return cb(null, false);  // Reject the file
        }
        cb(null, true);
    }
});

// Middleware function to handle file uploads for both 'photo' and 'navphoto'
const uploadLogo = upload.fields([
    { name: 'photo', maxCount: 1 },    // Single 'photo' file
    { name: 'navphoto', maxCount: 1 }  // Single 'navphoto' file
]);

// Middleware to process the uploaded images
const processImage = async (req, res, next) => {
    try {
        if (req.files.photo) {
            const photoBuffer = req.files.photo[0].buffer;
            const photoFilename = `photo_${Date.now()}.webp`;
            await sharp(photoBuffer)
                .resize(320, 320) // Resize image to 320x320
                .toFormat('webp') // Convert to .webp format
                .toFile(path.join(uploadDir, photoFilename)); // Save image
            
            // Assign the filename to req.body for later use
            req.body.photo = photoFilename;
        }

        if (req.files.navphoto) {
            const navPhotoBuffer = req.files.navphoto[0].buffer;
            const navPhotoFilename = `navphoto_${Date.now()}.webp`;
            await sharp(navPhotoBuffer)
                .toFormat('webp') // Convert to .webp format
                .toFile(path.join(uploadDir, navPhotoFilename)); // Save image
            
            // Assign the filename to req.body for later use
            req.body.navphoto = navPhotoFilename;
        }

        next(); // Proceed to the next middleware
    } catch (err) {
        console.error(err);
        res.status(500).send('Error processing image.');
    }
};


module.exports = { uploadLogo, processImage };
