const color = 'teal-ish';

//objects review
const obj = {};
obj.color = '#0F9A62';
obj[color] =  '#0F9A62';
obj[1 + 4 - 2 * 8] = '#0F9A62';

for (let [key, value] of Object.entries(obj)){
    console.log(key, value); //iterates over destructured instance of object, and calls big O object property to get each entry in little o object
}

//access a property that doesnt exist? undefined
//any time u access a key, it turns into a string (all keys are stringified)

//can add funcs as properties on object => called a method (use objects to group methods together)
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

const mathStuffs = { add, mult, square, power };
myMath.add(6,7);  //13

//can also do this inline
const mathStuffsAgain = {
    add: (x,y) => {return x + y},
    subtract: (x,y) => {return x - y}, //can use arrows
    multiply (x,y) {return x * y}, //or write like this - does the same shit
    divide (x,y) {return x / y}
};
mathStuffsAgain.divide(21,3); //7

//KEYWORD THIS AND METHODS
getHypotenuse = (a,b) => {
    return Math.sqrt( a ** 2 + b ** 2);
}
getArea = (a,b) => {
    return a * b / 2;
}
let triangle = {
    a: 3,
    b: 4,
    getArea () {
        return (this.a + this.b) / 2; //keyword this refers to *this* object, the object that the func is contained in
    } //the issue is... this isn't reusable => let's figure out how we can repeat this so we can make as many triangles as we want
};

//CONSTRUCTOR FUNCS AND NEW
//first we gotta set it up - notice the NAMING
const Triangle = (a,b) => {
    this.a = a;
    this.b = b;
    this.getArea = () => {
        return this.a * this.b / 2;
    };
    this.getHypotenuse = () => {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}
//to call it would look like this
const t1 = new Triangle(3,4);
t1.getHypotenuse(); //5
const t2 = new Triangle(9,12);
t2.getHypotenuse(); //15
//NOTES: When u call a func with new => creates blank object and passes that new blank object as the "this" context and returns this if func doesn't return it's own object
//now we have a repeatable, reusable template :)

//there's a better way of writing this.. ofc... why not just show us that bro PLS
//CLASSES >> used to define a pattern... like what we did above this ; looks like this => class Something
class Example{
    constructor(){
        console.log('a new example'); //now when we call new Example() constructor is automatically applied/run - wow
    }
    greet(){
        console.log('hello');
    }
    display(){
        console.log(`triangle with sides ${this.a} and ${this.b}`);
    }
};
const example2 = new Example();
//triangle with sides of undefined and undefined before defining a and b for "this" to reference => this will refer to the this on INSTANCE not to the class
const example3 = new Example();
example3.a = 3;
example3.b = 4;
//added to instance of example, not added to class
example3.display(); //"triangle with sides of 3 and 4"
//everytime we call an example, we get a diff object that holds a greet method
//and now of course we're going to see an even better way to do something, bro u wanna talk about stupid THIS is stupid
//CONSTRUCTORS
class AnotherTriangle {
    constructor(a,b,c){ //also a method
        //number validation; YOU NEVER WANT TO RETURN A VALUE FROM A CONSTRUCTOR - instead let's throw an error
        for (let side of [a,b,c]){
            if(Number.isFinite(side) || sode <= 0){
                throw new Error("Sides must be positive numbers!");
            };
        };

        this.a = a;
        this.b = b;
        this.c = c; //now anothertriangle has specific properties on it
    }
    display(){ //this is a method lol
        console.log(`triangle with sides ${this.a}, ${this.b}, & ${this.c}`);
    };
    getArea(){
        const {a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
};
new AnotherTriangle(); //data is revealed, yay; params are accessible in constructor
const t3 = new AnotherTriangle(9,12,12);
t3.display(); //"triangle with sides 9 and 12"
//constructor typically used to add property to the instance using "this" but can also be used to validate data
//lets check to make sure our numbers are actually numbers
const t4 = new AnotherTriangle(8,7,S); //will throw error and now we know we gotta fix it - wooo
//METHODS (in our classes)
//we call something a method when we call it on an object; when we call methods to classes we refer to the as "instance methods"
//INHERITANCE AND SUPER
//WE DONT HAVE DUPLICATE SHIT WATCH THIS:
class RightTriangle extends AnotherTriangle {
    //basically says every right triangle we create should also have access to all methods of AnotherTriangle class
    //can even eliminate the need to rewrite the constructor function *regardless of whether or not we're updating it* so long as we call "super()"
    //super() => calls instructor of SUPERclass or the class we are extending to our new class; remember to pass in your params when calling super() or you'll get the errors from your superclass
    constructor(a,b,c){
        if (a * a + b * b !== c * c){
            throw new Error ('This is not a right triangle');
        }
        super(a,b,c);
        this.hypot = c;
    }
    //can overwite methods
    display(){ //this runs instead of the one found in superclass
        console.log(`right triangle with sides ${this.a}, ${this.b}, & ${this.c}`);
        //we could also do this to add on to og:
        return `Right ${super.display()};` //or return "Right " + super.display();
    };
    //also note, we MUST call super() before you can reference "this"
}