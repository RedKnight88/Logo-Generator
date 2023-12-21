const errorChecker = require('../index.js')

describe('Prompts', () => {
    describe('Logo Text', () => {
        test('should only accept 3 or less characters', () => {
            let test = {
                logoText: 'AH',
                textColor: 'blue',
                logoShape: 'Square',
                logoColor: 'fuchsia'
            }
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should accept color keywords', () => {
            let test = {
                logoText: 'RVS',
                textColor: 'blue',
                logoShape: 'Square',
                logoColor: 'fuchsia'
            }
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should accept hexadecimal numbers', () => {
            let test = {
                logoText: 'RVS',
                textColor: 'E97259',
                logoShape: 'Square',
                logoColor: 'fuchsia'
            }
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should throw an error when anything else is input for color', () => {
            let test = {
                logoText: 'RVS',
                textColor: 'ARCANE',
                logoShape: 'Square',
                logoColor: 'fuchsia'
            }
            function testError() {errorChecker(test)}
            expect(testError).toThrow();
        });
    });
    describe('Logo Shape', () => {
        test('should accept color keywords', () => {
            let test = {
                logoText: 'RVS',
                textColor: 'blue',
                logoShape: 'Square',
                logoColor: 'fuchsia'
            }
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should accept hexadecimal numbers', () => {
            let test = {
                logoText: 'RVS',
                textColor: 'blue',
                logoShape: 'Square',
                logoColor: 'E97259'
            }
            expect(errorChecker(test)).toBeUndefined();
        });
        test('should throw an error when anything else is input for color', () => {
            let test = {
                logoText: 'RVS',
                textColor: 'blue',
                logoShape: 'Square',
                logoColor: 'FFFFFFF'
            }
            function testError() {errorChecker(test)}
            expect(testError).toThrow();
        });
        // Because we can create a list for the shapes, there is no need for an error case
    });
});