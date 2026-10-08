const backendActive = false

const form = document.getElementById("question-form");
const textarea = document.getElementById("question");
const answerDiv = document.getElementById("answer");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = textarea.value.trim();

    if (!text) {
        answerDiv.textContent = "Please enter a request.";
        return;
    }
    answerDiv.textContent = "Processing your request...";
    form.querySelector("button").disabled = true;


    try {
        const payload = {
            question: text
        }


        if (!backendActive) {
            answerDiv.textContent =
                `Question: ${payload.message}`;
            return;
        }
    } catch (error) {
        textarea.value = "Something went wrong!"
    } finally {
        form.querySelector("button").disabled = false;
        textarea.value = "";
    }
});
