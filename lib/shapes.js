class Shapes {
    constructor() {
        this.color = "white";
    }
    
    setColor(color) {
        this.color = color;
    }
}

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

module.exports = {
    Triangle,
    Circle,
    Square
 }