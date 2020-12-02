// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'promptTitle',
        message: '0. WHAT IS YOUR PROJECT TITLE?',
    },
    {
        type: 'input',
        name: 'promptDescription',
        message: '1. BRIEFLY DESCRIBE YOUR PROJECT',
    },
    {
        type: 'input',
        name: 'promptInstall',
        message: '2. HOW DOES ONE INSTALL THIS APPLICATION',
    },
    {
        type: 'input',
        name: 'promptUsage',
        message: '3. HOW DOES ONE USE THIS APPLICATION',
    },
    {
        type: 'input',
        name: 'promptContribution',
        message: '4. HOW DOES ONE CONTRIBUTE TO THIS APPLICATION',
    },
    {
        type: 'input',
        name: 'promptTest',
        message: '5. HOW DOES ONE TEST THE APPLICATION',
    },
    {
        type: 'input',
        name: 'promptLicense',
        message: '6. WHAT LICENSE WOULD YOU LIKE TO USE',
    },
    {
        type: 'input',
        name: 'promptUsername',
        message: '7. WHAT IS YOUR GITHUB USERNAME',
    },
    {
        type: 'input',
        name: 'promptGithubLink',
        message: '8. WHAT IS YOUR GITHUB LINK',
    },
    {
        type: 'input',
        name: 'promptEmail',
        message: '9. WHAT IS YOUR EMAIL ADDRESS',
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
            generateMarkdown(data)
        fs.writeFile(`${data.promptTitle}`'+.md', JSON.stringify(data), (err) => {
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