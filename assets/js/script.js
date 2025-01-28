// AOS Animation Initialize

AOS.init();


// Contact Form JavaScript

document
  .getElementById("contactForm") // Replace with the actual form ID
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const formSubject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent(`Contact Form Submission: ${formSubject}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nSubject: ${formSubject}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  });

