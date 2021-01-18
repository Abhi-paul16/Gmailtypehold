const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes)

let lastcheck;
let inBetween = false;

function handlecheck(e) {
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastcheck) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }

  lastcheck = this;
  console.log(lastcheck)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck))