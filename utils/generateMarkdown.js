// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title};
  
  ${generateDescription(data.description)}
  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)]

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

`;
}

function generateDescription (description){
  return `## Description 
  ${description}`;
}

console.log(generateMarkdown({
  title: "testing",
  description:"Testing description"
}));


module.exports = generateMarkdown;


