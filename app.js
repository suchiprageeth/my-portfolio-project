const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSection = document.querySelector(".main-content");
console.log({ sections, secBtn, secBtns, allSection });

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      console.log("Current Btn: ", currentBtn);
      currentBtn[0].classList = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
}

PageTransitions();