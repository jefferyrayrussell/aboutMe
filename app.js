
// print to the developer console to makesure javascript is working!
console.log('javascript is working');

/* ask the user their name */
var userName = prompt('Thank you for wanting to learn more about me! What is your name?');
console.log(userName);
/* greet the user by name */
alert('Hi ' + userName + ', I have a fun five question yes or no guessing game for you so that you can learn even more about me!');
/* ask the first yes or no question using a prompt*/
var firstQuestion = prompt('Was I born in Renton, Washington? Please answer yes or no.');
/* put user response in correct format, y to YES, yes to YES, and evaluate if the first question has been answered correctly,*/

if(firstQuestion.toUpperCase() === 'Y' || firstQuestion.toUpperCase() === 'YES'){
  console.log(firstQuestion);
  alert('Yay, you are correct!');
} else {
  alert('Sorry, you are incorrect.');
}

var secondQuestion = prompt('Do I have three college educated daughters? Please answer yes or no.');
if(secondQuestion.toUpperCase() === 'Y' || secondQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
} else {
  alert('Sorry, you are incorrect.');
};

console.log(secondQuestion);

var thirdQuestion = prompt('Do I enjoy wakeskating and karaoke? Please answer yes or no.');
if(thirdQuestion.toUpperCase() === 'Y' || thirdQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
} else {
  alert('Sorry, you are incorrect.');
};

console.log(thirdQuestion);

var fourthQuestion = prompt('Is my favorite book "Wise Man" by Flannery OConnor? Please answer yes or no.');
if(fourthQuestion.toUpperCase() === 'Y' || fourthQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
} else {
  alert('Sorry, you are incorrect.');
};

console.log(fourthQuestion);

var fifthQuestion = prompt('Did I once own a Suzuki GSXR 1000? Please answer yes or no.');
if(fifthQuestion.toUpperCase() === 'Y' || fifthQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
  console.log(fifthQuestion);
  var sixthQuestion = prompt('Because you got that right you get to answer one more question. Is my favorite pie, apple?');
  if(sixthQuestion.toUpperCase() === 'Y' || sixthQuestion.toUpperCase() === 'YES'){
    alert('Yay, you are correct! Thank you for taking the time to learn about me.');
  } else {
    alert('Sorry, you are incorrect. But, thank you for taking the time to learn about me.');
  };
} else {
  alert('Sorry, you are incorrect. Thank you for taking the time learn about me.');
};
console.log(sixthQuestion);
