$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('nav a').smoothScroll();

    // Form submission handling
    $('form').submit(function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        let name = $('input[type="text"]').val().trim();
        let email = $('input[type="email"]').val().trim();
        let feedback = $('textarea').val().trim();

        if (name === "" || email === "" || feedback === "") {
            alert("Please fill out all fields before submitting.");
        } else {
            alert("Thank you for your feedback, " + name + "!");
            $('form')[0].reset(); // Clear the form after submission
        }
    });
});

