const express = require('express');
const router = express.Router();
const { uploadPhoto } = require('../middleware/fileUpload');
const {getAll,insertBanner,getBannersBySection, getBanner, updateBanner, deleteBanner, getBannerById,deletePhotoAndAltText,getCountBySection,countBanner,getHomeActiveBanners} = require('../controller/Banner');
const { requireAuth } = require('../middleware/authmiddleware');


router.post("/insertBanner",requireAuth,uploadPhoto,insertBanner);
router.get('/getBySection', getBannersBySection);
router.get('/getBanner', getBanner);
router.get('/getAll', getAll);
router.get('/getHomeActiveBanners', getHomeActiveBanners);
router.get('/countBanner',requireAuth, countBanner);
router.get('/getCountBySection',requireAuth, getCountBySection);
router.put('/updateBanner',requireAuth,uploadPhoto, updateBanner);
router.delete('/deleteBanner',requireAuth, deleteBanner);
router.get('/getBannerById',requireAuth,getBannerById);
router.delete('/:id/image/:imageFilename/:index',requireAuth,deletePhotoAndAltText);

module.exports = router;