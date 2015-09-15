var flipMainDiv = document.getElementsByClassName("flip-main-div")[0];
// var colletteBelt = document.getElementById("coletteBelt");
// var colletteImg = document.getElementsByClassName("coletteMask")[0];
// var colletteDiv = document.getElementsByClassName("col-b")[0];
// var alexCard = document.getElementsByClassName("fliptest")[0];

// this is alex first img u see
// var alexfirstImg = document.getElementsByClassName("alexGit")[0];


// selects the testing div to add morph button to..
var morphDiv4 = document.getElementsByClassName("fernandaMorphBut")[0];


// select colA and all the child elements of col-a div
// selects colA div
var colD = document.getElementsByClassName("col-d")[0];


// click on the alexBelt and it will make the alexImg dissappear.
// colletteBelt.onclick = function() {

//   // this will add the vamoose class to the alexImg and make its display none.
//   alexImg.classList.toggle("vamoose");

// }

// adding text its morphin time!
var morphinText4 = document.createElement("h1");
morphinText4.classList.add("morphinTime");
morphinText4.innerHTML = "It's Morphin Time!";

// add morphin Time Button so that when clicked calls It's Morphin Time to Divs..
var morphinButton4 = document.createElement("button");
morphinButton4.innerHTML = "Morphin Time"

// inserts the button
// flipMainDiv.insertBefore(morphinButton, flipMainDiv.childNodes[0]);

// that worked when append to col-a Div.
  // colA.childNodes[0].appendChild(morphinButton);
morphDiv4.appendChild(morphinButton4);




// alexCard.style.visibility="hidden";



// when click button it shows the h1 that says its morphin time!
morphinButton4.onclick = function() {
  colD.classList.add("col-getschko");
  morphDiv4.replaceChild(morphinText4, morphDiv4.childNodes[0]);
}



