// Select the button and the element to animate
const button1 = document.getElementById("myButton");
const button2 = document.getElementById("myButtonTwo");
const button3 = document.getElementById("myButtonThree");
const slide = document.getElementsByClassName("slide");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");
const heading3 = document.getElementById("heading3");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
text1.classList.add("active");
heading1.classList.add("active");
image1.classList.add("active");
// Add an event listener to the button
button1.addEventListener("click", () => {
  animateBackground("linear-gradient(230deg, #02C0FC 13.53%, rgba(254, 152, 0, 0.35) 64.06%)", text1, heading1, image1);
});


button2.addEventListener("click", () => {
  animateBackground("linear-gradient(230deg, #02EDFC 13.53%, rgba(0, 25, 254, 0.35) 64.06%)", text2, heading2, image2);
});

button3.addEventListener("click", () => {
  animateBackground("linear-gradient(230deg, #02DEFC 10.80%, rgba(254, 0, 0, 0.35) 76.88%)", text3, heading3, image3);
});



function animateBackground(background, newText, newHeading, newImage) {
  // Fade out the current text
  const currentText = document.querySelector("#textContainer p.active");
  const currentHeading = document.querySelector("#textContainer h2.active");
  const currentImage = document.querySelector("#textContainer img.active");
  currentText.classList.remove("active");
  currentText.classList.add("next");
  currentHeading.classList.remove("active");
  currentHeading.classList.add("next");
  currentImage.classList.remove("active");
  currentImage.classList.add("next");

  // Set the new background
  gsap.to(slide, {
    duration: 2,
    backgroundImage: background,
  });

  // Fade in the new text
  newText.classList.remove("next");
  newText.classList.add("active");
  newHeading.classList.remove("next");
  newHeading.classList.add("active");
  newImage.classList.remove("next");
  newImage.classList.add("active");
}

   window.onload = function() {
     var urlParams = new URLSearchParams(window.location.search);
     var buttonNumber = urlParams.get('button');

     if (buttonNumber === '1') {
       document.getElementById('myButton').click();
     } else if (buttonNumber === '2') {
       document.getElementById('myButtonTwo').click();
     } else if (buttonNumber === '3') {
       document.getElementById('myButtonThree').click();
     }
   };





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

const menuToggle = document.getElementsByClassName('menu');
const menu = document.getElementsByClassName('mobile'); // Your menu element

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.style.display = expanded ? 'none' : 'block';
});
