// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create a function to initialize app
async function code() {
    // TODO: Create an array of questions for user input
    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Input Title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input Description'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Input Installation'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input Usage'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license',
            choices: ['MIT', 'Eclipse Public License 1.0','Apache 2.0', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Input Contributing'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Input Tests'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Input Questions'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Input Github'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input Email'
        },
    ];

    let answers = await inquirer.prompt(questions);
    let licenses = ''

    if (answers.license === 'MIT') {
        answers.license += 
        ' \n - This application is covered under the MIT License is one of the most permissive and popular open-source licenses. It allows others to use, copy, modify, merge, publish, and distribute your code freely as long as they provide attribution to the original author(s). It does not place many restrictions on usage.';
        licenses += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (answers.license === 'Eclipse Public License 1.0'){
        answers.license += 
        ' \n - This application is covered under the Eclipse Public License (EPL) is an open-source software license used primarily for projects developed by the Eclipse Foundation. It is designed to provide a balance between freedom and control, aiming to encourage collaboration while protecting the interests of contributors.';
        licenses += '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

    } else if (answers.license === 'Apache 2.0') {
        answers.license += 
        ' \n - This application is covered under the Apache License is another permissive license, similar to MIT, but with explicit grants of patent rights from contributors. It’s popular with larger projects and companies.';
        licenses += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else {
        answers.license = '';
    }; 


    
    const readmeContent = `# ${answers.title}

## Description ${licenses}
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}


## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
For more personal questions, contact me at ${answers.github}
or email me @ ${answers.email}, I will try to reply as soon as I can.
    `;

    // TODO: Create a function to write README file
    fs.writeFile('README.md', readmeContent, (err) => {
        err ? console.error('Something Broke',err) : console.log('HTML Works');
    });
}

    // Function call to initialize app
    code();
