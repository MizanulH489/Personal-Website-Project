//Write a JavaScript function that takes a number as an input from the user, then prints out 
//if the number a multiple of 11 or not.

// numMult function to get input and print
function numMult(number){
    // if else function to see if input is a multiple
    // if function that divides number by 11 to see if its a multiple
    if(number % 11 === 0)
    {
        // print output if multiple
        console.log(number + " is a multiple of 11")

    }

    // else function to print if result is not a multiple
    else
    {
        // print output
        console.log(number + " is not a multiple of 11")
    }
}

// Input for users to try out 
console.log("Inputs:")
numMult(44);
numMult(21);
numMult(66);
numMult(87);