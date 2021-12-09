const INPUTS = document.querySelectorAll('.emoji input');
let INPUTS_DATA = "";
const updateValue = (e) => {
  INPUTS_DATA = e.target.value;
  console.log(INPUTS_DATA);
}

INPUTS.forEach(el => el.addEventListener('click', e => updateValue(e)));

let choice = null;
let previousLink = null;

function myFunctionOne() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.one');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".out-one");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  function myFunctionTwo() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.two');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".out-two");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
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
        e.target.parentNode.parentNode.previousElementSibling.value = link.innerHTML;
        link.classList.add("live");
        previousLink = link;
        choice = link.innerHTML;
    })
});

let message = `Thank you for taking the time to complete the survey.
Your responses will be read by an administrator and used to make changes to our services.`;

function resultSet(){
  document.querySelector(".survey-emojis").style.display = "none";
  document.querySelector(".survey-bottom").style.display = "none";
  document.querySelector(".survey-head h1").innerHTML = message;
}

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
      .then(el => resultSet())
});

window.addEventListener('load', ()=>{
    const verticalHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${verticalHeight}px`)
});