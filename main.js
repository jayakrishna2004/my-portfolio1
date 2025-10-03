// Smooth scroll for nav links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission demo
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const name = e.target.querySelector('input[type="text"]').value.trim();
  const email = e.target.querySelector('input[type="email"]').value.trim();
  const message = e.target.querySelector("textarea").value.trim();
  const output = document.getElementById("form-message");

  if (!name || !email || !message) {
    output.textContent = "⚠️ Please fill in all fields.";
    output.style.color = "red";
    return;
  }

  output.textContent = "✅ Thank you! Your message has been sent.";
  output.style.color = "green";
  e.target.reset();

  setTimeout(() => {
    output.textContent = "";
  }, 5000);
});
