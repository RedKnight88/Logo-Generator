const shapes = require('./shapes.js');

describe('Shape Renders', () => {
    describe('Triangle', () => {
        test('should return a polygon element triangle with accurate coordinates and the color blue in the fill attribute', () => {
            const shape = new shapes.Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
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