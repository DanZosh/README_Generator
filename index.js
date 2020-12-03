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
        type: 'list',
        name: 'promptLicense',
        message: '6. WHAT LICENSE WOULD YOU LIKE TO USE',
        choices:[
            'none',
            'Apache_License_2.0','GNU_General_Public_License_v3.0',
            'MIT_License',
            'BSD_2-Clause_"Simplified"_License',
            'BSD_3-Clause_"New_or_"Revised"_license',
            'Boost_Software_License_1.0',
            'Creative_Commons_Zero_v1.0_Universal',
            'Eclipse_Public_License_2.0',
            'GNU_Affero_General_Public_License_v3.0',
            'GNU_General_Public_License_v2.0',
            'GNU_Lesser_General_Public_License_v2.1'
        ]
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
            // console.log(data)
            const filename = './hidden_resources/trashReadMe'+`${data.promptTitle.toLowerCase().split(' ').join('')}.md`
            const markdownContent = generateMarkdown(data)
        fs.writeFile(filename, markdownContent, (err) => {
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