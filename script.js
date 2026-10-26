document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("interactive-btn");

    if (button) {
        button.addEventListener("click", () => {
            alert("Your JavaScript file is successfully linked and working!");
        });
    }
});
