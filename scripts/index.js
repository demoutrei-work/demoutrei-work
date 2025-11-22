const buttons = document.querySelectorAll("[data-display]");
const displays = document.querySelectorAll(".display");


const toggleDisplay = (event) => {
  displays.forEach((element) => {
    console.log(element.id == event.target.dataset.display);
    if (element.id == event.target.dataset.display) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  })
}


buttons.forEach((element) => element.addEventListener("click", toggleDisplay));