// imports packages for methods used later, as well as imports the shape classes
const shapes = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');

// a couple other variables that are used during the error checks
// declaring the variables up here makes the code easier to change and 
// cleaner within the function, even if these are only used in one function
const colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];
const hexPattern = new RegExp('(^[A-F0-9]+$)'); // this ensures strings contain only characters included in hexidecimal

// initiates the prompt functionality for the command line
// this intakes user inputs for the variable components of the SVG (text, text color, logo shape, logo color)
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
        // Once the inputs are received, the response object should contain the data we need to generate the file
        // So, a function checks for errors in the inputs, and throws an error if anything was input in an improper formatting
        // Then, we call a function to make a string containing the SVG formatting
        // Finally, we write that string into a file with the .svg extension, and log the completion of the program's task
        .then((response) => {
            errorChecker(response);
            const newSVG = generateSVG(response);

            fs.writeFile('logo.svg', newSVG, (err) =>
                err ? console.error(err) : console.log("Generated logo.svg"))
        });
}

// My reasoning for keeping the error messages within this function are two-fold.
// First, it allows an easier way for the testing structure to interface with the error throws.
// Second, it means the response data does not require getting passed between scripts,
// which I prefer in order to maintain a good logic flow while working.
function errorChecker(inputs) {
    // To start, I check the logo text string, ensuring it stays within the limit
    if(inputs.logoText.length > 3) {
        throw new Error('ERROR: Please only input three or less characters')
    }

    // This is a bit funky, but it ensures that the input color matches one of the presets built into HTML by filtering through the color array to find a match
    // and returning a boolean (just the filter function would only pass the keyword, so I put an equality operator comparing the keyword to itself)
    let isTextKeyword = inputs.textColor == colors.filter((color) => {return color == inputs.textColor;})
    let isLogoKeyword = inputs.logoColor == colors.filter((color) => {return color == inputs.logoColor;})

    // This tests the input color to ensure it contains only hexidecimal compatible characters and is 6 characters long, which is what is necessary for reading colors through hexidecimal
    let isTextHex = hexPattern.test(inputs.textColor) && inputs.textColor.length == 6;
    let isLogoHex = hexPattern.test(inputs.logoColor) && inputs.logoColor.length == 6;

    // Then, only if both the hexidecimal and keyword tests fail, an error is thrown (checked for both the text color and logo color)
    if(!isTextHex && !isTextKeyword) {
        throw new Error('ERROR: Please input the text color as either a hexadecimal value (no #) or a common color (in lowercase).')
    }
    if(!isLogoHex && !isLogoKeyword) {
        throw new Error('ERROR: Please input the logo color as either a hexadecimal value (no #) or a common color (in lowercase).')
    }
    // if all is well, it returns and function exits with no information passed back
    return;
}


/** This function selects the shape through a switch function (since the shape input is a list, it's guaranteed
 * to be one of these three choices). Once the shape is selected and the color from the input data is set,
 * all of the necessary components are slotted into the svg framework string literal. This string is returned.
 */
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

// Can't start the prompts without calling the function
initiatePrompts();

// Exports the error checker function so the tests can engage with it
module.exports = errorChecker;