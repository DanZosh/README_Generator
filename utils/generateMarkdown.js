// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.promptTitle};

  ### ${data.promptLicense}
  ## Table of Contents

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  *[License](#license)

## Description:
${data.promptDescription}

## Installation:
${data.promptInstall}

## Usage:
${data.promptUsage}

## Contributing:
${data.promptContribution}

## Tests:
${data.promptTest}

## Questions:
For questions, find the developer on GitHub at
${data.promptUsername}
${data.promptGithubLink}
or at the email below
${data.promptEmail}


## Questions:
This application is covered under a ${data.promptLicense} License.

`;
}

// function generateDescription (description){
//   return `## Description 
//   ${description}`;
// }

// console.log(generateMarkdown({
//   title: "testing",
//   description:"Testing description"
// }));


module.exports = generateMarkdown;


