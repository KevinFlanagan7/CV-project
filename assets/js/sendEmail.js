function sendMail(contactForm) {


    emailjs.send("Gmail","Kevin", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value,
    })

    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message was sent successfully!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    );
    return false;  // To block from loading a new page
}
