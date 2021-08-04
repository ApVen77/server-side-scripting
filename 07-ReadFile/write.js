// Core node package for reading and writing files
//require the filesystem

const fs= require("fs"); 

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", "Will and Grace, Sex and the City", function(err) {
   if (err) {
     return console.log(err);
   }

   console.log("movies.txt was updated!")
} );


//3 arguments/parameter
//relative/file
//words we will write
//function 
  // If the code experiences any errors it will log the error to the console.
 

  // Otherwise, it will print: "movies.txt was updated!"
  