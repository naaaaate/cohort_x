var flipMainDiv = document.getElementsByClassName("flip-main-div")[0];
// var colletteBelt = document.getElementById("coletteBelt");
// var colletteImg = document.getElementsByClassName("coletteMask")[0];
// var colletteDiv = document.getElementsByClassName("col-b")[0];
// var alexCard = document.getElementsByClassName("fliptest")[0];

// this is alex first img u see
// var alexfirstImg = document.getElementsByClassName("alexGit")[0];


// selects the testing div to add morph button to..
var morphDiv3 = document.getElementsByClassName("nateMorphBut")[0];


// select colA and all the child elements of col-a div
// selects colA div
var colC = document.getElementsByClassName("col-c")[0];


// click on the alexBelt and it will make the alexImg dissappear.
// colletteBelt.onclick = function() {

//   // this will add the vamoose class to the alexImg and make its display none.
//   alexImg.classList.toggle("vamoose");

// }

// adding text its morphin time!
var morphinText3 = document.createElement("h1");
morphinText3.classList.add("morphinTime");
morphinText3.innerHTML = "It's Morphin Time!";

// add morphin Time Button so that when clicked calls It's Morphin Time to Divs..
var morphinButton3 = document.createElement("button");
morphinButton3.innerHTML = "Morphin Time"

// inserts the button
// flipMainDiv.insertBefore(morphinButton, flipMainDiv.childNodes[0]);

// that worked when append to col-a Div.
  // colA.childNodes[0].appendChild(morphinButton);
morphDiv3.appendChild(morphinButton3);




// alexCard.style.visibility="hidden";



// when click button it shows the h1 that says its morphin time!
morphinButton3.onclick = function() {
  colC.classList.add("col-lee");
  morphDiv3.replaceChild(morphinText3, morphDiv3.childNodes[0]);
}



