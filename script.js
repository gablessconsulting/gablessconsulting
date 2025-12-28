"use strict";
// when services element is clicked it moves to the services section
const smoothScroll = function () {
  const serviceSection = document.querySelector(".services");
  const headerElement = document.querySelector(".scroll_effect");

  headerElement.addEventListener("click", function (e) {
    e.preventDefault();

    serviceSection.scrollIntoView({ behavior: "smooth" });
  });
};
smoothScroll();

// carries email input and send to the admin
const actionSubscribe = function () {
  document
    .querySelector(".subscribe-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get the email address entered by the user
      const email = document.querySelector(".common-input").value;

      // Send email to your own email address
      window.location.href =
        "mailto:miraclezenna@gmail.com?subject=New Subscription&body=" + email;

      // Optionally, provide feedback to the user
      alert("Thank you for subscribing!");
    });
};
actionSubscribe();

// submit form
const submitform = function () {
  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the email address entered by the user
    const Fname = document.querySelector(".text1").value;
    const Lname = document.querySelector(".text2").value;
    const phoneNumber = document.querySelector(".text3").value;
    const email = document.querySelector(".text4").value;

    const messsage = document.querySelector(".textmessage").value;

    // Concatenate static email, name, and phone number to form the subject
    const subject = `Contact: ${Fname} ${Lname} - ${phoneNumber} (${email})`;

    const mailtoURL = `mailto:miracleezenna@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(messsage)}`;

    // Send email to your own email address
    window.location.href = mailtoURL;
  });
};
submitform();
