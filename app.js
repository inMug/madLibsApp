"use strict";

//user inputs (should go first and then story)
let userInput = [
"owl",
"oak",
"boy",
"basket",
"girl",
"less",
"more",
"elephant",
"mistake",
"better",
"wiser",
];

//calculating userInput quantity
//console.log(userInput.length);
let numberOfQuestions = 11;

//User promts for each replacement
let questionArray = [
`Enter a bird.`,
`Enter a tree.`,
`Enter a person.`,
`Enter a place to store things.`,
`Enter a person.`,
`Enter an adverb.`,
`Enter an adverb.`,
`Enter an animal.`,
`Enter an act or judgment that is misguided or wrong.`,
`Enter an adverb.`,
`Enter an adjective.`,
];
//Checking do questions are equal to number of questions
//console.log(userInput.length === questionArray.length);

//Loop for calculating questions
for (let i = numberOfQuestions; i >= 0; i--) {
    console.log(i);
}


//original story with user inputs
let originalStory = `A Wise Old ${userInput[0]}
There was an ${userInput[0]} that lived in an ${userInput[1]}.
Everyday he saw incidents happening around him.
Yesterday he saw a ${userInput[2]} helping an old man to carry a heavy ${userInput[3]}.
Today he saw ${userInput[4]} shouting at her mother. The more he saw the ${userInput[5]} he spoke.
As he spoke less, he heard ${userInput[6]}. 
He heard people talking and telling stories.
He heard a woman saying that an ${userInput[7]} jumped over a fence.
He also heard a man saying that he had never made a ${userInput[8]}.
The old ${userInput[0]} had seen and heard about what happened to people.
Some became ${userInput[9]} and some became worse.
But the old ${userInput[0]} had become ${userInput[10]} each and every day.
Moral of the story:
You should be observant, talk less but listen more.
This will make you a wise person.`;

console.log(originalStory);



































/*
const originalStory = `A Wise Old Owl

There was an old owl that lived in an oak. Everyday he saw incidents happening around him. Yesterday he saw a boy helping an old man to carry a heavy basket. Today he saw a girl shouting at her mother. The more he saw the less he spoke.


As he spoke less, he heard more. He heard people talking and telling stories. He heard a woman saying that an elephant jumped over a fence. He also heard a man saying that he had never made a mistake.


The old owl had seen and heard about what happened to people. Some became better and some became worse. But the old owl had become wiser each and every day.


Moral of the story :


You should be observant, talk less but listen more. This will make you a wise person.`;*/









/*let originalStory = `A Wise Old Owl
There was an old ${userInputs[0]} that lived in an ${userInputs[1]}. 
Everyday he saw incidents happening around him. 
Yesterday he saw a ${userInputs[2]} helping an old man to carry a heavy basket. 
Today he saw a ${userInputs[3]} shouting at her mother. 
The more he saw the less he ${userInputs[4]}.
As he spoke less, he heard ${userInputs[5]}. 
He heard people ${userInputs[6]} and telling stories. 
He heard a woman saying that an ${userInputs[7]} jumped over a fence. 
He also heard a man saying that he had never made a ${userInputs[8]}.
The old owl had seen and heard about what happened to people. 
Some became better and some became ${userInputs[9]}. 
But the old owl had become ${userInputs[10]} each and every day.`;

//Total questions
let numberOfQuestions = 11;

//User prompts
let userPrompt = "Enter";
let questionArray = [
  `${userPrompt} a bird type`,
  `${userPrompt} a tree type`,
  `${userPrompt} a person`,
  `${userPrompt} a person`,
  `${userPrompt} a parent`,
  `${userPrompt} an adverb`,
  `${userPrompt} averb`,
  `${userPrompt} an animal`,
  `${userPrompt} a noun`,
  `${userPrompt} an adverb`,
  `${userPrompt} an adverb`,
];

let userInputs = [];
let questionCounter = 0;
for (let i = numberOfQuestions; i > 0; i--) {
  console.log(i);
  questionCounter++;
  console.log(questionArray[questionCounter]);
}

//console.log(originalStory);

/*let originalStory = `A Wise Old Owl
There was an old ${userInputs[0]} that lived in an ${userInputs[1]}. 
Everyday he saw incidents happening around him. 
Yesterday he saw a ${userInputs[2]} helping an old man to carry a heavy basket. 
Today he saw a ${userInputs[3]} shouting at her mother. 
The more he saw the less he ${userInputs[4]}.
As he spoke less, he heard ${userInputs[5]}. 
He heard people ${userInputs[6]} and telling stories. 
He heard a woman saying that an ${userInputs[7]} jumped over a fence. 
He also heard a man saying that he had never made a ${userInputs[8]}.
The old owl had seen and heard about what happened to people. 
Some became better and some became ${userInputs[9]}. 
But the old owl had become ${userInputs[10]} each and every day.`;*/

/*let originalStory = `A Wise Old Owl
There was an old owl ${userInputs[0]} that lived in an oak ${userInputs[1]}. 
Everyday he saw incidents happening around him. 
Yesterday he saw a boy ${userInputs[2]} helping an old man to carry a heavy basket. 
Today he saw a girl ${userInputs[3]} shouting at her mother ${userInputs[4]}. 
The more he saw the less he spoke.
As he spoke less, he heard more ${userInputs[5]}. 
He heard people talking ${userInputs[6]} and telling stories. 
He heard a woman saying that an elephant ${userInputs[7]} jumped over a fence. 
He also heard a man saying that he had never made a mistake ${userInputs[8]}.
The old owl had seen and heard about what happened to people. 
Some became better and some became worse ${userInputs[9]}. 
But the old owl had become wiser ${userInputs[10]} each and every day.`;*/
