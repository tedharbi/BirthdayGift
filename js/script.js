let currentIndex = 0;

// Function to show the current slide
const showSlide = () => {
  slides.forEach((slide, index) => {
    const offset = index - currentIndex;
    if (offset === 0) {
      slide.style.transform = "translateX(0)";
    } else {
      // Calculate the distance for looping effect
      let distance = offset * 100;
      if (offset > totalSlides / 2) {
        distance -= totalSlides * 100;
      } else if (offset < -totalSlides / 2) {
        distance += totalSlides * 100;
      }
      slide.style.transform = `translateX(${distance}%)`;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Gallery dropdown functionality
  document.querySelector('.dropbtn').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById("myDropdown").classList.toggle("show");
  });

  // Close gallery dropdown when clicking outside
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
      document.getElementById("myDropdown").classList.remove('show');
    }
  });

  // Acronym letter functionality
  document.querySelectorAll(".acr-letter").forEach(letterEl => {
    letterEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const dd = document.getElementById(letterEl.dataset.target);
      document.querySelectorAll(".acr-dropdown").forEach(d => {
        if (d !== dd) d.style.display = "none";
      });
      dd.style.display = (dd.style.display === "block") ? "none" : "block";
    });
  });

  // Close acronym dropdowns when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".acr-letter")) {
      document.querySelectorAll(".acr-dropdown")
              .forEach(d => d.style.display = "none");
    }
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Initialize navbar on load
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scrolled');
  }
  
  // Magic button functionality
  const magicButton = document.querySelector('.magic-button');
  if (magicButton) {
    magicButton.addEventListener('click', function() {
      this.innerHTML = 'Magic is coming soon! <i class="fa-solid fa-sparkles"></i>';
      this.style.background = 'linear-gradient(45deg, #6c5ce7, #a29bfe)';
      
      // Create floating hearts
      for (let i = 0; i < 15; i++) {
        createHeart();
      }
    });
  }
  
  // Function to create floating hearts
  function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.color = '#ff6b9d';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = `float ${Math.random() * 4 + 3}s ease-in forwards`;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // Performance optimization
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - lastScrollY) > 50) {
      lastScrollY = window.scrollY;
    }
  }, { passive: true });
  
  // Add float animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(-100vh) rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
});
