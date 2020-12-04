// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.promptTitle}

  ![badge](https://img.shields.io/badge/license-${data.promptLicense}-ff69b4)


  ## Table of Contents

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  *[License](#license)

  *[Links](#links)

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


## License:
This application is covered under the following license: ${data.promptLicense}.

## Links:
See below for a list of helpful links:
${data.promptLicense} License.

`;
}


module.exports = generateMarkdown;


