// import the main script's error checking function
const errorChecker = require('../index.js')

// Testing suite for all the command line inquirer inputs
// Expect from jest contains a ton of methods and not a lot of them were working because of the way the
// errorChecker function was set up. Since the return of the function does not contain anything,
// it returns 'undefined'. Every other implementation of expect I tested would either require the function
// to be a named callback without the ability for the test case to be passed, or would require a nonsense string
// or something of the sort to be returned which felt like a poor coding practice, creating something
// strictly for the test cases. The errorChecker was made to be passed through and either throw and error
// or return to its spot as if nothing happened. The toBeUndefined method was the only consistent way
// that it would simulate allowing the function to simply return voided and clear the test case, even when
// the program would be functioning as intended on the user's end. In the end, this is most likely a situation
// where restructuring the main code would lead to an easier test driven development process. 
describe('Prompts', () => {
    // Set of tests concerning the logo text length and color
    describe('Logo Text', () => {
        test('should only accept 3 or less characters', () => {
            // A test case with two characters for the logo
            let test = { logoText: 'AH', textColor: 'blue', logoShape: 'Square', logoColor: 'fuchsia'}
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should accept color keywords', () => {
            // This is a test case with text color containing a color keyword
            let test = { logoText: 'RVS', textColor: 'blue', logoShape: 'Square', logoColor: 'fuchsia'}
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should accept hexadecimal numbers', () => {
            // This is a test case with text color containing a hexidecimal string
            let test = { logoText: 'RVS', textColor: 'E97259', logoShape: 'Square', logoColor: 'fuchsia'}
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should throw an error when anything else is input for color', () => {
            // This is a test case with text color containing an incompatible string
            let test = { logoText: 'RVS', textColor: 'ARCANE', logoShape: 'Square', logoColor: 'fuchsia'}
            function testError() {errorChecker(test)}
            expect(testError).toThrow(); // toThrow expect tests pass whenever the an error is thrown
        });
    });
    describe('Logo Shape', () => {
        test('should accept color keywords', () => {
            // This is a test case with logo color containing a color keyword
            let test = { logoText: 'RVS', textColor: 'blue', logoShape: 'Square', logoColor: 'fuchsia'}
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should accept hexadecimal numbers', () => {
            // This is a test case with logo color containing a hexidecimal
            let test = { logoText: 'RVS', textColor: 'blue', logoShape: 'Square', logoColor: 'E97259'}
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should throw an error when anything else is input for color', () => {
            // This is a test case with logo color containing an incompatible string
            let test = { logoText: 'RVS', textColor: 'blue', logoShape: 'Square', logoColor: 'FFFFFFF'}
            function testError() {errorChecker(test)}
            expect(testError).toThrow();
        });
        // Because we can create a list for the shapes, there is no need for an error case
    });
});