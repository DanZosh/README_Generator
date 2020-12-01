// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: '0. WHAT IS YOUR NAME',
    },
    {
        type: 'input',
        name: 'email',
        message: '1. WHAT IS YOUR EMAIL ADDRESS',
    },
    {
        type: 'input',
        name: 'projName',
        message: '2. WHAT IS YOUR PROJECT NAME',
    },
    {
        type: 'input',
        name: 'description',
        message: '3. PLEASE WRITE A SHORT DESCRIPTION OF YOUR PROJECT',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: '4. WHAT COMMAND SHOULD BE RUN TO INSTALL DEPENDENCIES (NPM I)',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: '5. WHAT COMMAND SHOULD BE RUN TO RUN TESTS (NPM TEST)',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: '6. WHAT DOES THE USER NEED TO KNOW ABOUT USING THE REPO?',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: '7. WHAT DOES THE USER NEED TO KNOW ABOUT CONTRIBUTING TO THE REPO',
    },
]
    // console.log(questions[0])

//REQUIRED MODULES
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// function to write README file
//Youre missing the writetoFile function provided in the develop folder here. that would basically be my inquirer

inquirer
    .prompt(questions).then((data) => {
            console.log(data)
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





// RESOURCES BELOW

    // ATTEMPT WITH A FOR LOOP
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