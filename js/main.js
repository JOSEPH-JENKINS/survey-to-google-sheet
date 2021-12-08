const INPUTS = document.querySelectorAll('.emoji input');
let INPUTS_DATA = "";
const updateValue = (e) => {
  INPUTS_DATA = e.target.value;
  console.log(INPUTS_DATA);
}

INPUTS.forEach(el => el.addEventListener('click', e => updateValue(e)));

let choice = null;
let previousLink = null;

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

document.querySelectorAll("#myUL a").forEach(link =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        if(previousLink){
            previousLink.classList.remove("live");
        }
        link.classList.add("live");
        previousLink = link;
        choice = link.innerHTML;
    })
});

document.querySelector("#submit-all").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(INPUTS_DATA);
    const message = document.querySelector("textarea").value;
    const currentLink = previousLink.textContent;
    let submitedFormData = new FormData();
    submitedFormData.append("mood", INPUTS_DATA);
    submitedFormData.append("choice", currentLink);
    submitedFormData.append("message", message);

    fetch("https://sheetdb.io/api/v1/879n84mc20kbq", {
      method: "POST",
      body: submitedFormData,
    }).then(res => res.json())
      .then(el => console.log(el))
});

window.addEventListener('load', ()=>{
    const verticalHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${verticalHeight}px`)
});