// In the spirit of DRY, OOP, and logic flow, I created a super class with
// a color property (defaulted to white) and a setColor method that will
// be important for each shape. I did NOT put the render method, as each shape
// renders in a unique way.
class Shapes {
    constructor() {
        this.color = "white";
    }
    
    setColor(color) {
        this.color = color;
    }
}

// Each shape class extends its super class, seen above, and then adds a render method.
// This method returns a string that takes its color property (inherited from Shapes)
// and inserts it as an attribute in the SVG element string. Otherwise, each shape renders
// a unique element that contains specific rendering qualities. The triangle plots different
// verteces, the square needs an anchor point and then side lengths, and the circle requires
// a center point and a radius.
class Triangle extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<rect width="150" height="150" x="75" y="25" fill="${this.color}" />`
    }
}

class Circle extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<circle cx ="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// Reading up on the export documentation, I found this neat way to import multiple Classes inside of one export function
module.exports = {
    Triangle,
    Circle,
    Square
 }