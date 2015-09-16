var flipMainDiv = document.getElementsByClassName("flip-main-div")[0];
var alexBelt = document.getElementById("alexBelt");
var alexImg = document.getElementsByClassName("alex")[0];
var alexDiv = document.getElementsByClassName("col-a")[0];
var alexCard = document.getElementsByClassName("fliptest")[0];

// this is alex first img u see
var alexfirstImg = document.getElementsByClassName("alexGit")[0];


// selects the testing div to add morph button to..
var morphDiv = document.getElementsByClassName("testing")[0];



// this will add vamoose to alexcard and hide it.
alexCard.classList.add("vamoose")

// hides colA div
// document.getElementsByClassName('col-a')[0].style.visibility="hidden";

// append to flip-main-div the morphButton
// flipMainDiv.appendChild(morphDiv);


// wut if we removed cola and aleximg classes so that none of the hover's worked. and only if u click the button does it all morph..

// select colA and all the child elements of col-a div
// selects colA div
var colA = document.getElementsByClassName("col-a")[0];

// var testingDiv = document.getElementsByClassName("col-a")[0].children[0];
// var alexHeader = document.getElementsByClassName("col-a")[0].children[1];
// var alexMask = document.getElementsByClassName("col-a")[0].children[2];
// var alexBelt = document.getElementsByClassName("col-a")[0].children[3];

// now remove the col-a
// colA.classList.remove("col-a");
// alexMask.classList.remove('alex');








// click on the alexBelt and it will make the alexImg dissappear.
alexBelt.onclick = function() {

  // this will set the alexImage's visibility to hidden:
  // alexImg.style.visibility="hidden";

  // this will add the vamoose class to the alexImg and make its display none.
  alexImg.classList.toggle("vamoose");

  // this will toggle the vamoose class so that it disappears from alexcard and alexcard shows.
  // alexCard.classList.toggle("vamoose");

  // console.log(alexDiv)
}

// adding text its morphin time!
var morphinText = document.createElement("h1");
morphinText.classList.add("morphinTime");
morphinText.innerHTML = "It's Morphin Time!";

// add morphin Time Button so that when clicked calls It's Morphin Time to Divs..
var morphinButton = document.createElement("button");
morphinButton.innerHTML = "Morphin Time"

// inserts the button
// flipMainDiv.insertBefore(morphinButton, flipMainDiv.childNodes[0]);

// that worked when append to col-a Div.
  // colA.childNodes[0].appendChild(morphinButton);
  morphDiv.appendChild(morphinButton);




// alexCard.style.visibility="hidden";



// when click button it shows the h1 that says its morphin time!
morphinButton.onclick = function() {
  colA.classList.add("col-x");
  morphDiv.replaceChild(morphinText, morphDiv.childNodes[0]);
}



