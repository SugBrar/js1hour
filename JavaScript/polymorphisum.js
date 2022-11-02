class shape{
    draw(){
        return "I am genric shape";
    }
}

class Square extends shape{
    draw(){
        return "I am a square";
    }
}

class Circle extends shape{
    draw(){
        return "I am a circle";
    }
}

let s = new shape();
console.log(s.draw());

s = new Square();
console.log(s.draw());

s = new Circle();
console.log(s.draw());