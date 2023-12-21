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
        return `<rect width="100" height="100" x="100" y="50" fill="${this.color}" />`
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