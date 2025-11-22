const buttons = document.querySelectorAll("[data-display]");


const toggleDisplay = (event) => {
  buttons.forEach((element) => {
    console.log(element.id == event.target.id);
    if (element.id == event.target.id) {
      element.style.borderWidth = "0 0 2px 0";
    } else {
      element.style.borderWidth = "0 0 0 0";
    }
  })
}


buttons.forEach((element) => element.addEventListener("click", toggleDisplay));