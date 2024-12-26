const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the banner
const BannerSchema = new Schema({
  section: { type: String},
  title: { type: String},
  photo: [{ type: String }],
  alt: [{ type: String, default: '' }],
  details: { type: String },
  details2: { type: String, default: '' }, // New field for additional details
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  priority: { type: Number },
  status: { type: String, default: 'active' }, // Updated default value for status
});

// Update `updatedAt` field on every save
BannerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create the model
const Banner = mongoose.model("Banner", BannerSchema);

module.exports = Banner;
