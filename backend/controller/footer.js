const Footer = require('../model/footer');

// Get the footer data
exports.getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne();
    if (!footer) {
      return res.status(404).json({ message: 'Footer not found' });
    }
    res.json(footer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the footer data
exports.updateFooter = async (req, res) => {
  const { instagramLink, facebookLink, twitterLink, workingHours, phoneNo, email } = req.body; // Updated field
  
  try {
    let footer = await Footer.findOne();

    if (!footer) {
      // If no footer document exists, create a new one
      footer = new Footer({
        instagramLink,
        facebookLink,
        twitterLink,
        workingHours, // Updated field
        phoneNo,
        email,
      });

      const newFooter = await footer.save();
      return res.status(201).json(newFooter);
    }

    // Update existing footer document
    footer.instagramLink = instagramLink;
    footer.facebookLink = facebookLink;
    footer.twitterLink = twitterLink;
    footer.workingHours = workingHours; // Updated field
    footer.phoneNo = phoneNo;
    footer.email = email;

    const updatedFooter = await footer.save();
    res.json(updatedFooter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
