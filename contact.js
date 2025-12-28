const submitform = function () {
  document
    .getElementById("contactjs")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get the email address entered by the user
      const name = document.querySelector(".nameC").value;

      const phoneNumber = document.querySelector(".phoneC").value;
      const email = document.querySelector(".emailC").value;

      const messsage = document.querySelector(".messageC").value;

      // Concatenate static email, name, and phone number to form the subject
      const subject = `Contact: ${name} - ${phoneNumber} (${email})`;

      const mailtoURL = `mailto:miracleezenna@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(messsage)}`;

      // Send email to your own email address
      window.location.href = mailtoURL;
    });
};
submitform();
