//2. Write a JavaScript function that takes a string, then counts how many Consonants in it. 
//You need to consider capital case and small case letters.

// Use to get number of consonants
function Consonant__p(str) {

   // Declare Variables
    var a_count = 0;

    // for function to get string length
    for (var i = 0; i < str.length; i++)
    {
        // Function to get letter's uppercase
        char = str[i].toUpperCase();

        // if function to get consonant total
        if (!(char == "A" || char == "E" || char == "I" || char == "O" || char == "U") && char.match(/[A-Z]/i)) 
        ++a_count;
        
    }
    // return result of the number of consonant
    return a_count;
  }

  // input to get consontant
  var str = "You need to consider capital case and small case letters.";

  //print output from console
  console.log("Number of Consonants in the string :",Consonant__p(str));