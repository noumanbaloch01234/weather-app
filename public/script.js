let weatherIcon = document.querySelector("#weatherIcon");
let Temprature = document.querySelector("#temperature");
let cityName = document.querySelector("#cityName");
let windNow = document.querySelector("#windNow");
let Humidity = document.querySelector("#humidity");
let WindDegree = document.querySelector("#windDegree");

async function valueGetter(){
    let url1=`https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=rawalpindi&aqi=no`;
    let response=await fetch(url1);
    let data=await response.json();
    // console.log(data);
    const{
            current:{condition:{icon},temp_c,wind_kph,humidity,wind_degree},
            location:{name}
    }=data;
    
    transferFront(temp_c,wind_degree,wind_kph,humidity,name,icon);


}
valueGetter();
function transferFront(temp,windD,windk,humd,nam,ic){
    weatherIcon.innerHTML=ic;
    Temprature.innerHTML=temp;
    cityName.innerHTML=nam;
    windNow.innerHTML=windk;
    Humidity.innerHTML=humd;
    WindDegree.innerHTML=windD;
}
// =====================================================================================

let weatherIcon2 = document.querySelector("#weatherIcon2");
let Temprature2 = document.querySelector("#temperature2");
let cityName2 = document.querySelector("#cityName2");
let windNow2 = document.querySelector("#windNow2");
let Humidity2 = document.querySelector("#humidity2");
let WindDegree2 = document.querySelector("#windDegree2");
let searchButton = document.querySelector("#searchBtn");
let search = document.querySelector("#search");


city="lahore";

async function valueGetter2(city){
    let url2=`https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=${city}&aqi=no`;
    let response=await fetch(url2);
    let data=await response.json();
    console.log(data);
      const{
            current:{condition:{icon},temp_c,wind_kph,humidity,wind_degree},
            location:{name}
    }=data;

    transferFront2(temp_c,wind_degree,wind_kph,humidity,name,icon);
}
valueGetter2(city);

       function transferFront2(temp_c2,wind_degree2,wind_kph2,humidity2,name2,icon2) {

            
            weatherIcon2.innerHTML=icon2;
            Temprature2.innerHTML=temp_c2;
            cityName2.innerHTML=name2;
            windNow2.innerHTML=wind_kph2;
            Humidity2.innerHTML=humidity2;
            WindDegree2.innerHTML=wind_degree2;
            
        }

        searchButton.addEventListener("click",()=>{
            city=search.value;
            valueGetter2(city);

        })
        


















