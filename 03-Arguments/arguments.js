// process.argv will print out any command line arguments.

console.log(process.argv);

//node executable path
//1st index contains path to your current file. 
// the rest contains the argument you're passing. 

// Combines two command line arguments (strings).

console.log(process.argv[2] + process.argv[3] + process.argv[4]); 


// Add two command line arguments (numbers).



// Use parsefloat to return a number/integar 
// process.argv[0] == '/usr/local/bin/node'
// process.argv[1] == '/Users/maerics/src/js/sum-process-argv.js'
// process.argv[2] == '1'
// process.argv[3] == '2'
// process.argv[4] == '3'