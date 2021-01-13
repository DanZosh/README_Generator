// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'promptTitle',
        message: '1. WHAT IS YOUR PROJECT TITLE?',
    },
    {
        type: 'input',
        name: 'promptDescription',
        message: '2. BRIEFLY DESCRIBE YOUR PROJECT',
    },
    {
        type: 'input',
        name: 'promptInstall',
        message: '3. HOW DOES ONE INSTALL THIS APPLICATION',
    },
    {
        type: 'input',
        name: 'promptUsage',
        message: '4. HOW DOES ONE USE THIS APPLICATION',
    },
    {
        type: 'input',
        name: 'promptContribution',
        message: '5. HOW DOES ONE CONTRIBUTE TO THIS APPLICATION',
    },
    {
        type: 'input',
        name: 'promptTest',
        message: '6. HOW DOES ONE TEST THE APPLICATION',
    },
    {
        type: 'list',
        name: 'promptLicense',
        message: '7. WHAT LICENSE WOULD YOU LIKE TO USE',
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
        message: '8. WHAT IS YOUR GITHUB USERNAME',
    },
    {
        type: 'input',
        name: 'promptGithubLink',
        message: '9. WHAT IS YOUR GITHUB LINK',
    },
    {
        type: 'input',
        name: 'promptEmail',
        message: '10. WHAT IS YOUR EMAIL ADDRESS',
    },
    {
        type: 'input',
        name: 'promptLink',
        message: '11. WOULD YOU LIKE TO INCLUDE ANY LINKS',
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
            // const filename = './hidden_resources/trashReadMe/'+`${data.promptTitle.toLowerCase().split(' ').join('')}.md`
            const filename = `./${data.promptTitle.toLowerCase().split(' ').join('')}.md`
            const markdownContent = generateMarkdown(data)

});

// function to initialize program
function init() {
}

// function call to initialize program
init();
