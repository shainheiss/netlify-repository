const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());
app.use(express.static('public'));

// Dummy chatbot response
app.post('/chat', (req, res) => {
    const userQuestion = req.body.question;
    
    // Example: AI could be integrated here to process userQuestion
    let botResponse = "I'm here to assist you! You asked: " + userQuestion;

    res.json({ answer: botResponse });
});

// Server listens on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
