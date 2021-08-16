const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const menuItems = document.querySelectorAll(".menu-item");
const menuItemsHamburger = document.querySelectorAll(".menu-item-hamburger");
const menuUnderline = document.querySelectorAll(".underline");

const userForms = document.querySelectorAll(".user-form");

// Hamburger menu interaction
hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("fa-times");
  hamburgerIcon.classList.toggle("fa-bars");
});

// Add/remove underline on hover
menuItems.forEach((item, index) =>
  item.addEventListener("mouseover", () => {
    menuUnderline[index].classList.add("active");
  })
);
menuItems.forEach((item, index) =>
  item.addEventListener("mouseout", () => {
    menuUnderline[index].classList.remove("active");
  })
);
// Add/remove current menu underline
menuItemsHamburger.forEach((item, index) => {
  item.addEventListener("click", () => {
    setTimeout(() => {
      userForms[index].classList.remove("hidden");
    }, 150);

    userForms.forEach((el, i) => {
      index !== i && el.classList.add("hidden");
    });
    hamburgerMenu.classList.remove("active");
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
    menuUnderline[index].classList.add("current");
    menuUnderline.forEach((el, i) => {
      index !== i && el.classList.remove("current");
    });
  });
});
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    setTimeout(() => {
      userForms[index].classList.remove("hidden");
    }, 150);
    userForms.forEach((el, i) => {
      index !== i && el.classList.add("hidden");
    });
    menuUnderline[index].classList.add("current");
    menuUnderline.forEach((el, i) => {
      index !== i && el.classList.remove("current");
    });
  });
});

// Email/Phone on click interaction
const phoneNumber = document.getElementById("phone-number");
const emailAddress = document.getElementById("email-address");

phoneNumber.addEventListener("click", () => {
  window.open("tel:08007563986");
});
emailAddress.addEventListener("click", () => {
  window.open("mailto:info@myclaimgroup.co.uk");
});
// get submited data
const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  console.log(`first name: ${firstName}, last name: ${lastName}`);
  document.getElementById("firstname").value = null;
  document.getElementById("lastname").value = null;
});

// Signature logic
var canvas = document.getElementById("signature-pad");
function resizeCanvas() {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
resizeCanvas();
var signaturePad = new SignaturePad(canvas, {
  backgroundColor: "rgb(250,250,250)",
});
document.getElementById("clear").addEventListener("click", function () {
  signaturePad.clear();
});
