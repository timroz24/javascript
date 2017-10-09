///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword







var John = {
    name: 'John',
    yearOfBirth: '1990',
    claculateAge: function()
    {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction()
        {
            console.log(this)
        }
        */
    }
};
John.claculateAge();

var  Mike = {
    name: 'Mike',
    yearOfBirth: '1967'
    
};

Mike.calculateAge = John.claculateAge;

Mike.calculateAge();




