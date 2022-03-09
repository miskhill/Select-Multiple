const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // I need to check if the shift key is held down
  // I also need to check if the box is actually ticked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Once I have checked these parameters
    // I need to loop over all of the checkboxes looking for a start point and end point
    //I also want to go backwards through the loop to check boxes
    //inBetween = !inBetween lets me achieve this
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
