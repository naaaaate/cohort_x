var flipMainDiv = document.getElementsByClassName("flip-main-div")[0];
var colletteBelt = document.getElementById("coletteBelt");
var colletteImg = document.getElementsByClassName("coletteMask")[0];
var colletteDiv = document.getElementsByClassName("col-b")[0];
// var alexCard = document.getElementsByClassName("fliptest")[0];

// this is alex first img u see
var alexfirstImg = document.getElementsByClassName("alexGit")[0];


// selects the testing div to add morph button to..
var morphDiv2 = document.getElementsByClassName("coletteMorphBut")[0];



// this will add vamoose to alexcard and hide it.
// alexCard.classList.add("vamoose")

// hides colA div
// document.getElementsByClassName('col-a')[0].style.visibility="hidden";

// append to flip-main-div the morphButton
// flipMainDiv.appendChild(morphDiv);


// wut if we removed cola and aleximg classes so that none of the hover's worked. and only if u click the button does it all morph..

// select colA and all the child elements of col-a div
// selects colA div
var colB = document.getElementsByClassName("col-b")[0];


// click on the alexBelt and it will make the alexImg dissappear.
colletteBelt.onclick = function() {

  // this will add the vamoose class to the alexImg and make its display none.
  alexImg.classList.toggle("vamoose");

}

// adding text its morphin time!
var morphinText2 = document.createElement("h1");
morphinText2.classList.add("morphinTime");
morphinText2.innerHTML = "It's Morphin Time!";

// add morphin Time Button so that when clicked calls It's Morphin Time to Divs..
var morphinButton2 = document.createElement("button");
morphinButton2.innerHTML = "Morphin Time"

// inserts the button
// flipMainDiv.insertBefore(morphinButton, flipMainDiv.childNodes[0]);

// that worked when append to col-a Div.
  // colA.childNodes[0].appendChild(morphinButton);
morphDiv2.appendChild(morphinButton2);




// alexCard.style.visibility="hidden";



// when click button it shows the h1 that says its morphin time!
morphinButton2.onclick = function() {
  // colB.classList.add("col-x");
  colB.classList.add("col-speer");
  morphDiv2.replaceChild(morphinText2, morphDiv2.childNodes[0]);
}



