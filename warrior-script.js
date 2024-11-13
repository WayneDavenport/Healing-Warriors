// Select the button with the class "menu"
const menuButton = document.querySelector('.menu');

// Add a click event listener to the button
menuButton.addEventListener('click', () => {
  // Create a new div element
  const mobileDiv = document.createElement('div');

  // Set the class attribute of the new div element
  mobileDiv.classList.add('mobile', 'mobile-clip');

  // Set the innerHTML of the new div element
  mobileDiv.innerHTML = `
    <div class="cross-button">&times;</div>
    <br><br>
    <a href="programs.html" class="button">Programs</a>
    <a href="calendar.html" class="button">Schedule</a>
    <a href="contact.html" class="button">Get Involved</a>
    <a href="about.html" class="button">About Us</a>
    <a href="donate.html" class="button">Donate</a>
  `;

  // Insert the new div element at the beginning of the body
  document.body.insertBefore(mobileDiv, document.body.firstChild);

// Select the cross-button element
const crossButton = mobileDiv.querySelector('.cross-button');

// Add a click event listener to the cross-button element
crossButton.addEventListener('click', () => {
  // Remove the mobile div from the DOM
  event.stopPropagation(); // prevent event from bubbling up to parent
  mobileDiv.classList.add('mobile-removed');
  setTimeout(function() { 
    document.body.removeChild(mobileDiv);
  }, 740);

  // Add the spinning animation to the cross-button element
  crossButton.classList.add('spinning');
  setTimeout(() => {
    crossButton.classList.remove('spinning');
  }, 1000); // remove spinning class after 1 second
});
});

document.getElementById("openForum").addEventListener("click", function() {
  // Specify the URL or content you want to display in the popup window
  var popupURL = "signup.html";

  // Options for the popup window (size, position, etc.)
  var popupOptions = "width=400,height=300,left=100,top=100";

  // Open the popup window
  window.open(popupURL, "_blank", popupOptions);
});

//get involved page animations
window.onload = function () {
  if (window.innerWidth <= 600) { // checks if the width of the window is less than or equal to 600px
    // mobile view: elements slide in when scrolled to
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray('.card');

    cards.forEach((card) => {
      gsap.from(card, {
        duration: 1,
        x: '-100%',
        autoAlpha: 0,
        scrollTrigger: {
          trigger: card,
          start: "top center", // triggers the animation when the card is in the center of the viewport
        },
      });
    });
  } else {
    // non-mobile view: elements slide in one after the other on page load
    gsap.from(".card", {
      duration: 1,
      x: '-100%',
      autoAlpha: 0,
      stagger: 0.5
    });
  }
};

gsap.registerPlugin(ScrollTrigger);

// Create a new timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#middleOne",
    start: "top center", // when top of #middleOne reaches the center of the viewport
  }
});

tl.from("#middleOne .commText", {
  duration: 1,
  autoAlpha: 0, // autoAlpha will manage both CSS visibility and opacity
});

/*window.onload = function() {
    var emblem = document.querySelector('.emblem');
    var path = window.location.pathname;
  
    if (path === '/donate') {
        emblem.id = 'emblemDonate';
    }
}*/

const menuToggle = document.getElementsByClassName('menu');
const menu = document.getElementsByClassName('mobile'); // Your menu element

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.style.display = expanded ? 'none' : 'block';
});
