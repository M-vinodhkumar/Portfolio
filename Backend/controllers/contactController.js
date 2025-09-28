// controllers/contactController.js
const Contact = require('../models/Contact');

// @desc    Submit a contact form entry
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please fill in all fields.' });
        }

        const newSubmission = new Contact({
            name,
            email,
            message,
        });

        await newSubmission.save();

        res.status(201).json({ message: 'Thank you! Your message has been saved.' });

    } catch (error) {
        console.error('Error saving contact form submission:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = {
    submitContactForm,
};