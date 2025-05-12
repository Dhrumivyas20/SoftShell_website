function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      document.querySelector('.darkmode-toggle').classList.toggle('dark');
}

function toggleMenu() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
}

const testimonials = [
      {
            text: "SoftSell made it incredibly easy to offload our unused licenses. We had money in our account within days—no hassle, no hidden fees.",
            name: "Jackson",
            role: "IT Director, Horizon Enterprises",
            photo: "img/1.jpg"
      },
      {
            text: "I wasn’t sure what to expect, but the process was smooth from start to finish. The support team was super responsive, too!",
            name: "Madison",
            role: "Small Business Owner",
            photo: "img/2.jpg"
      },
      {
            text: "As a growing company, every dollar counts. SoftSell helped us recover value from software we no longer needed—something we didn’t even know was possible.",
            name: "Ethan",
            role: "Operations Manager, NexaTech",
            photo: "img/3.jpg"
      },
      {
            text: "Highly recommended. Fast quotes, fair pricing, and zero pressure. I’ll definitely use SoftSell again and I'll recommend it to all",
            name: "Avery",
            role: "Systems Administrator",
            photo: "img/4.jpeg"
      }
];

let currentIndex = 0;

function updateTestimonial() {
      const { text, name, role, photo } = testimonials[currentIndex];
      document.getElementById("testimonial-text").textContent = `"${text}"`;
      document.getElementById("client-name").textContent = name;
      document.getElementById("client-role").textContent = role;
      document.getElementById("client-photo").src = photo;

      const lines = document.querySelectorAll(".indicator-line");
      lines.forEach((line, idx) => {
            line.style.background = idx === currentIndex ? "#fff" : "#000000";
      });
}

function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial();
}

function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial();
}

updateTestimonial();

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      // Show the success popup
      document.getElementById('popup').style.display = 'flex';

      // Reset the form
      contactForm.reset();
});

// Function to close the popup
function closePopup() {
      document.getElementById('popup').style.display = 'none';
}
