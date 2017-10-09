/*
var job = "teacher";

var finish = true;

   do {
        job = prompt("What does John do?")
        switch(job)
        {
            case "teacher":
                console.log("John is a teacher!");
                break;
        
            case "cop":
                console.log("John fights crime!");
                break;
            
            case "designer":
                console.log("john is a artist!");
                break;
            
            default:
                console.log("John is a screw driver!");
                finish = false;
                break;
        }
    } while(finish)
    */

// Coding challenge 1

var john, f_1, f_2;

var h,age;

h = prompt("Enter John's height in cms!");

age = prompt("Enter John's age in yrs!");

john = h + 5 * age;

h = prompt("Enter f1 height in cms!");

age = prompt("Enter f1 age in yrs!");

f_1 = h + 5 * age;

h = prompt("Enter f2 height in cms!");

age = prompt("Enter f2 age in yrs!");

f_2 = h + 5 * age;

if (john > f_1 && john > f_2)
    console.log("John wins with a score of " + john + " while friend 1 has score " + f_1 + " friend 2 has score " + f_2)
else if (f_1 > f_2)
    console.log("f 1 wins with a score of " + f_1 + " while john has score " + john + " friend 2 has score " + f_2)
else 
    console.log("f 2 wins with a score of " + f_2 + " while john has score " + f_john + " friend 1 has score " + f_1)



