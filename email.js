emailjs.init("YOUR_USER_ID");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Email sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send email: " + error.text);
    });
});
