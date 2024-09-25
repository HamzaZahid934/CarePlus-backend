import FAQ from "../Models/faq-model";

// Get all FAQs
export const getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching FAQs', error: err.message });
    }
};

// Add FAQ (admin only)
export const addFAQ = async (req, res) => {
    const { question, answer } = req.body;

    try {
        const faq = new FAQ({ question, answer });
        await faq.save();
        res.status(201).json(faq);
    } catch (err) {
        res.status(500).json({ message: 'Error adding FAQ', error: err.message });
    }
};
