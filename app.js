const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
console.log({ sections, secBtn, secBtns, allSections });

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  // Adding active class to sections when related navigation button is clicked
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // Remove active class from all
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });

      e.target.classList.add("active");

      //Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();
