let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  let firefoxIconPath = 'images/firefox-icon.png';
  let firefoxIcon2Path = 'images/firefox2.png';
  if (mySrc === firefoxIconPath) {
      myImage.setAttribute('src', firefoxIcon2Path)
  } else {
      myImage.setAttribute('src', firefoxIconPath)
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
};
