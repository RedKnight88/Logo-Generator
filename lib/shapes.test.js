// brings in an object containing each individual shape class as a method
const shapes = require('./shapes.js');

// Test suite for ensuring the shapes render their element in the svg with proper formatting / positioning
describe('Shape Renders', () => {
    describe('Triangle', () => {
        test('should return a polygon element triangle with accurate coordinates and the color blue in the fill attribute', () => {
            const shape = new shapes.Triangle(); // creates the appropriate shape instance
            shape.setColor("blue"); // sets the color for the test case
            // The render function is meant to create a string with the element for the svg in a similar format to HTML
            // with certain attributes that are dependent on the what we are asking for in the shape
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
            // this process repeats for each shape
        });
    });
    describe('Square', () => {
        test('should return a rect element square with accurate coordinates and the color blue in the fill attribute', () => {
            const shape = new shapes.Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect width="150" height="150" x="75" y="25" fill="blue" />');
        });
    });
    describe('Circle', () => {
        test('should return a circle element with accurate coordinates and the color blue in the fill attribute', () => {
            const shape = new shapes.Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx ="150" cy="100" r="80" fill="blue" />');
        });
    });
});