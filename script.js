// Menu interactions
const menuInteractions = () => {
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
  // Add/remove current menu underline (hamburger menu)
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
  // Add/remove current menu underline
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
};

// Email/Phone on click interaction
const contactInteractions = () => {
  const phoneNumber = document.getElementById("phone-number");
  const emailAddress = document.getElementById("email-address");

  phoneNumber.addEventListener("click", () => {
    window.open("tel:08007563986");
  });
  emailAddress.addEventListener("click", () => {
    window.open("mailto:info@myclaimgroup.co.uk");
  });
};

// Signature pad
const signatureLogic = () => {
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
  document
    .getElementById("clear-submit")
    .addEventListener("click", function () {
      setTimeout(() => {
        signaturePad.clear();
      }, 300);
    });
};
// Get submited data
const getSubmitedData = () => {
  const userForm = document.getElementById("user-form-sign-up");

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    console.log(`first name: ${firstName}, last name: ${lastName}`);
    document.getElementById("firstname").value = null;
    document.getElementById("lastname").value = null;
  });
};

// "Thank You" overlay signature
const thankYouOverlaySignature = () => {
  const submitSignature = document.querySelector(".submit-signature");
  const thankYouSignature = document.querySelector(".thank-you-signature");

  submitSignature.addEventListener("click", () => {
    thankYouSignature.classList.add("active");
    setTimeout(() => {
      thankYouSignature.classList.remove("active");
    }, 1900);
  });
};
// "Thank you" overlay sign up
const thankYouOverlaySignUp = () => {
  const submitSignUp = document.querySelector(".submit-sign-up");
  const thankYouSignUp = document.querySelector(".thank-you-sign-up");

  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");

  submitSignUp.addEventListener("click", () => {
    if (firstName.value.length > 0 && lastName.value.length > 0) {
      thankYouSignUp.classList.add("active");
      setTimeout(() => {
        thankYouSignUp.classList.remove("active");
      }, 1900);
    }
  });
};

menuInteractions();
contactInteractions();
signatureLogic();
getSubmitedData();
thankYouOverlaySignature();
thankYouOverlaySignUp();
