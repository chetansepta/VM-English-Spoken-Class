const form = document.getElementById("admissionForm");
const formMessage = document.getElementById("formMessage");
const whatsappBtn = document.querySelector(".whatsapp-btn");

// Apna real WhatsApp number yahan daalo
const whatsappNumber = "9039414377";

if (whatsappBtn) {
  whatsappBtn.href = `https://wa.me/${whatsappNumber}`;
  whatsappBtn.target = "_blank";
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || mobile === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all fields properly.";
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid 10-digit mobile number.";
      return;
    }

    const whatsappMessage =
      `Hello Sir,\n` +
      `I want to know about VM English Spoken Classes.\n\n` +
      `Name: ${name}\n` +
      `Mobile: ${mobile}\n` +
      `Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    formMessage.style.color = "green";
    formMessage.textContent = "Redirecting to WhatsApp...";

    window.open(whatsappURL, "_blank");
    form.reset();
  });
}