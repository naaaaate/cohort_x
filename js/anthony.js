var flipMainDiv = document.getElementsByClassName("flip-main-div")[0];
// var colletteBelt = document.getElementById("coletteBelt");
// var colletteImg = document.getElementsByClassName("coletteMask")[0];
// var colletteDiv = document.getElementsByClassName("col-b")[0];
// var alexCard = document.getElementsByClassName("fliptest")[0];

// this is alex first img u see
// var alexfirstImg = document.getElementsByClassName("alexGit")[0];


// selects the testing div to add morph button to..
var morphDiv5 = document.getElementsByClassName("anthonyMorphBut")[0];


// select colA and all the child elements of col-a div
// selects colA div
var colE = document.getElementsByClassName("col-e")[0];


// click on the alexBelt and it will make the alexImg dissappear.
// colletteBelt.onclick = function() {

//   // this will add the vamoose class to the alexImg and make its display none.
//   alexImg.classList.toggle("vamoose");

// }

// adding text its morphin time!
var morphinText5 = document.createElement("h1");
morphinText5.classList.add("morphinTime");
morphinText5.innerHTML = "It's Morphin Time!";

// add morphin Time Button so that when clicked calls It's Morphin Time to Divs..
var morphinButton5 = document.createElement("button");
morphinButton5.innerHTML = "Morphin Time"

// inserts the button
// flipMainDiv.insertBefore(morphinButton, flipMainDiv.childNodes[0]);

// that worked when append to col-a Div.
  // colA.childNodes[0].appendChild(morphinButton);
morphDiv5.appendChild(morphinButton5);




// alexCard.style.visibility="hidden";



// when click button it shows the h1 that says its morphin time!
morphinButton5.onclick = function() {
  colE.classList.add("col-hernandez");
  morphDiv5.replaceChild(morphinText5, morphDiv5.childNodes[0]);
}



