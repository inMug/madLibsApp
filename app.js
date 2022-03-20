"use strict";

let originalStory = `A Wise Old Owl
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

//let userInputs = [];

//Total questions
let numberOfQuestions = 11;

//User prompts
let userPrompt = "Enter a";
let questionArray = [
    `${userPrompt} bird type`,
    `${userPrompt} tree type`,
    `${userPrompt} person`,
    `${userPrompt} person`,
    `${userPrompt} parent`,
    `${userPrompt} n adverb`,
    `${userPrompt} verb`,
    `${userPrompt} n animal`,
    `${userPrompt} noun`,
    `${userPrompt} n adverb`,
    `${userPrompt} n adverb`,
];
let userInputs = [];
for(let i = numberOfQuestions; i > 0; i-- ) {
    console.log(i);
}

console.log(originalStory);














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