const shapes = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');

const colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];
const hexPattern = new RegExp('([A-F0-9]+$)');

function initiatePrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter up to three (3) characters for your logo's text.",
                name: "logoText",
            },
            {
                type: 'input',
                message: "Please enter a color or a hexidecimal number for your logo's text color.",
                name: "textColor",
            },
            {
                type: 'list',
                message: "What shape would you like for your logo?",
                choices: ["Circle","Square","Triangle"],
                name: 'logoShape',
            },
            {
                type: 'input',
                message: "Please enter a color or a hexidecimal number for your logo's shape color.",
                name: "logoColor",
            },
        ])
        .then((response) => {
            errorChecker(response);
            const newSVG = generateSVG(response);

            fs.writeFile('logo.svg', newSVG, (err) =>
                err ? console.error(err) : console.log("Generated logo.svg"))
        });
}

function errorChecker(inputs) {
    if(inputs.logoText.length > 3) {
        throw new Error('Please only input three or less characters')
    }

    let isTextKeyword = colors.filter((color) => {
        return color == inputs.textColor;
    })
    let isLogoKeyword = colors.filter((color) => {
        return color == inputs.logoColor;
    })

    if(hexPattern.test(inputs.textColor) || !isTextKeyword) {
        throw new Error('Please input the text color as either a hexadecimal value (no #) or a common color (in lowercase).')
    }
    if(hexPattern.test(inputs.logoColor) || !isLogoKeyword) {
        throw new Error('Please input the logo color as either a hexadecimal value (no #) or a common color (in lowercase).')
    }
}

function generateSVG(data) {
    let shape;
    switch(data.logoShape) {
        case "Circle":
            shape = new shapes.Circle();
            break;
        case "Square":
            shape = new shapes.Square()
            break;
        case "Triangle":
            shape = new shapes.Triangle()
            break;
    }

    shape.setColor(data.logoColor);
    const shapeEl = shape.render();
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    ${shapeEl}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>

</svg>`
}

initiatePrompts();