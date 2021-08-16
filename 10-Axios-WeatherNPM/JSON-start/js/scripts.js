fetch("testdata.json")
.then((mydata) => mydata.json())
.then((mydata) => {
    console.log(mydata.gender)
    document.getElementById("puppy").innerHTML= mydata.name; 
}); 
