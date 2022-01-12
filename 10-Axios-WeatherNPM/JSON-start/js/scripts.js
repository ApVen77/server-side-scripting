const apiURL= "//api.openweathermap.org/data/2.5/weather?id=5419384&appid=b347cf40f5ceaeb40d7a64655b671d34&units=imperial"
fetch ("testdata.json")
.then((mydata) => mydata.json())
.then((mydata) => {
    console.log(mydata); 
    console.log(mydata.gender); 
    console.log(mydata.name); 

    document.getElementById("puppy").innerHTML= mydata.name;
    
    let sample= document.createElement("h2"); 
    sample.textContent= mydata.url; 
    document.getElementById("puppy").appendChild(sample)

    let sample2= document.createElement("h3"); 
    sample2.textContent= mydata.phone; 
    document.getElementById("puppy").appendChild(sample2)
    
});




fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo); 

    document.getElementById("place").innerHTML=weatherInfo.name; 
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("feels").innerHTML=weatherInfo.main.feels_like; 
    document.getElementById("windSped").innerHTML=weatherInfo.wind.speed; 
    // document.getElementById("humid").innerHTML=weatherInfo.main.humidity;  


    const iconcode= weatherInfo.weather[0].icon; 
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png"; 
    console.log(icon_path);

    document.getElementById("weatherIcon").src= icon_path;
    // document.getElementById("sun").innerHTML=weatherInfo.sys.sunrise; 
}); 