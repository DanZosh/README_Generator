// array of questions for user
const questions = [
    "0. WHAT IS YOUR NAME, punk", 
    "1. WHAT IS YOUR EMAIL ADDRESS",
    "2. WHAT IS YOUR PROJECT'S NAME",
    "3. PLEASE WRITE A SHORT DESCRIPTION OF YOUR PROJECT", 
    "4. WHAT COMMAND SHOULD BE RUN TO INSTALL DEPENDENCIES (NPM I)",
    "5. WHAT COMMAND SHOULD BE RUN TO RUN TESTS (NPM TEST)",
    "6. WHAT DOES THE USER NEED TO KNOW ABOUT USING THE REPO?",
    "7. WHAT DOES THE USER NEED TO KNOW ABOUT CONTRIBUTING TO THE REPO",

];
    // console.log(questions[0])

//REQUIRED MODULES
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// function to write README file


inquirer
    .prompt([
    {
        type: 'input',
        name: 'question0',
        message: `${questions[0]}`,
    },
    {
        type: 'input',
        name: 'question1',
        message: `${questions[1]}`,
    },
    ]).then((data) => {
        console.log(data)
    //DELETE THE JUNK BELOW
        // function writeToFile(fileName, data) {
        //     fs.writeFile('test.txt', data, (err))
        // }
    //DELETE THE JUNK ABOVE
        fs.writeFile('test.json', JSON.stringify(data), (err) => {
            err?
            console.log('failed to write file'):
            console.log('wrote file')
        })
});

// function to initialize program
function init() {
}

// function call to initialize program
init();





//RESOURCES BELOW

    //ATTEMPT WITH A FOR LOOP
// for (let i = 0; i < questions.length; i++) {
//     const element = questions[i];
    
    

// inquirer
//     .prompt(
//     {
//         type: 'input',
//         name: 'name',
//         message: `${questions[i]}`,
//     }
//     ).then((data) => {
//         const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
//         fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? 
//         console.log(err) : 
//         console.log('Success!')
//         );
//         });
// }

    //STOCK FROM EXERCISE 20
// inquirer
//     .prompt([
//     {
//         type: 'checkbox',
//         message: 'What languages do you know?',
//         name: 'stack',
//         choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//         type: 'list',
//         message: 'What is your preferred method of communication?',
//         name: 'contact',
//         choices: ['email', 'phone', 'telekinesis'],
//     },
//     ])
    // .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    // err ? 
    // console.log(err) : 
    // console.log('Success!')
    // );
    // });