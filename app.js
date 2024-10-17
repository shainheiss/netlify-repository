document.getElementById("send").addEventListener("click", function() {
    let input = document.getElementById("userInput").value;

    if (input.trim() !== "") {
        let userMessage = `<div class="message user-message">${input}</div>`;
        document.getElementById("messages").innerHTML += userMessage;

        // Send the input to the backend
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: input }),
        })
        .then(response => response.json())
        .then(data => {
            let botMessage = `<div class="message bot-message">${data.answer}</div>`;
            document.getElementById("messages").innerHTML += botMessage;
            document.getElementById("userInput").value = "";
        })
        .catch(error => console.error('Error:', error));
    }
});
