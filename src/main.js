/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
// Array of strings
var strings = ["Naufal Elliando F","UI/UX Designer", "UX Researcher", "Frontend Developer"];

// Index of the current string
var index = 0;

// Reference to the HTML element for typed text
var typedTextElement = document.getElementById("typedText");

// Function to simulate typing effect
function typeEffect() {
    // Get the current string
    var currentString = strings[index];

    // Index for the characters of the current string
    var charIndex = 0;

    // Interval function to simulate typing
    var typeInterval = setInterval(function() {
        // Append the next character to the typed text
        typedTextElement.textContent += currentString[charIndex];

        // Move to the next character
        charIndex++;

        // Check if reached end of string
        if (charIndex === currentString.length) {
            // Clear the interval after typing complete
            clearInterval(typeInterval);

            // Wait for a while and then start deleting
            setTimeout(function() {
                deleteEffect();
            }, 1000); // Adjust the delay before deletion if needed
        }
    }, 100); // Adjust typing speed if needed
}

// Function to simulate deletion effect
function deleteEffect() {
    // Interval function to simulate deletion
    var deleteInterval = setInterval(function() {
        // Remove the last character from the typed text
        typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);

        // Check if reached beginning of string
        if (typedTextElement.textContent === '') {
            // Clear the interval after deletion complete
            clearInterval(deleteInterval);

            // Move to the next string
            index = (index + 1) % strings.length;

            // Wait for a while and then start typing the next string
            setTimeout(function() {
                typeEffect();
            }, 500); // Adjust the delay before typing the next string if needed
        }
    }, 50); // Adjust deletion speed if needed
}

// Start the typing effect
typeEffect();


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
