/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding :left of the dot at call time
* 3. New Binding
* 4. Explicit Binding:call apply,bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var sayColor = function () {
    console.log(this.color)
}
var me ={
    color:'red'
}
sayColor()
window.color='blue'
sayColor()

// Principle 2

// code example for Implicit Binding
let Person = function (name,age) {
    return{
        name:name,
        age:age,
        sayName: function () {
           console.log(this.name) 
        }
    }
}

let jim =Person('Jim',42);
jim.sayName();

// Principle 3

// code example for New Binding


let Animal = function (color,name,type) {
    this.color=color;
    this.name=name;
    this.type=type;
}

let zebra = new Animal('BLACK AND WHITE','ZORRO','ZEBRA')






// Principle 4

// code example for Explicit Binding
let sayName = function(){
    console.log(`my name is ${this.name} i am ${this.age}years old and i know ${lang}`)
};

let jay ={
    name:'jason',
    age:28
};

let brad ={
    name:'bardly',
    age:30
}

let lang =['JS', 'RUBY','REACT'];
//==============****=========================
//.call passes one at a time
sayName.call(jay,lang[0],lang[1],lang[2]);


//==============****=========================
//.apply dumps in the whole array
sayName.apply(brad,lang)

//==============****=========================
//. bind same as call but doesnt invoke right away creates a new function

let nwFn = sayName.bind(jay,lang[0],lang[1],lang[2]);
nwFn()


