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