const packages = require('../models/packageSchema'); // Assuming you have a "package" model

exports.getAllPackages = async (req, res) => {
  try {
    const allPackages = await packages.find();
    res.status(200).json(allPackages);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.viewPackage = async (req, res) => {
  const id = req.params.id;
  try {
    const package = await packages.findOne({ id });

    if (package) {
      res.status(200).json(package);
    } else {
      res.status(404).json({ message: 'Package not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
