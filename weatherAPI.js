function WeatherDataGetting(file,callback){
	var request=new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open("GET",file, true);
	request.onreadystatechange=function(){
		if(request.readyState===4 && request.status=="200"){
				callback(request.responseText);
		}
	};
	request.send();
}

WeatherDataGetting("http://api.openweathermap.org/data/2.5/forecast?id=1253184&APPID=76b4344dff23a40100b7b4c3efda09fa", function(text){
	let data=JSON.parse(text);
	console.log(data);
	city(data.city);
	weather(data.list);

})
var main_div=document.querySelector(".weather");

function city(name){
	console.log(name.name);
	var date1=new Date();
	var city_name=document.createElement("h2");
	city_name.textContent=name.name+", "+"Andhra Pradesh";

	var info=name.name+","+ name.country+"  , "+date1;
	main_div.appendChild(city_name);
	console.log(name.country);
	var country_name=document.createElement("h3");
	// var country="";
	if(name.country=="IN"){
		country=info;
		country_name.textContent=country;
		main_div.appendChild(country_name);
	}
}

function weather(list){
	var data=document.querySelector(".data");

var city_h1=document.createElement("h1");
console.log(list.length);
for(var i=0; i<list.length; i++){
	var sub=list[i].dt_txt;
	var sub_space=sub.indexOf(" ");
	var main=sub.substr(0,sub_space);
	var time=sub.substr(sub_space+1);
// console.log(main);
var today=new Date();
console.log(today);
var dd="";
if(today.getDate()<=9){
	dd+="0"+today.getDate();
} else {
	dd+=today.getDate();
}
var year=today.getFullYear();
// console.log(year);
var mm="";
if(today.getMonth()<=9){
mm+="0"+(today.getMonth()+1);
} else {
	mm+=(today.getMonth()+1);
}
var final_date=year+"-"+mm+"-"+dd;
// console.log(final_date);

if(main==final_date){
	var weatherdetails=document.createElement("div");
	weatherdetails.classList.add("data1")
	var Time=document.createElement("h4");
	Time.textContent=time;
	weatherdetails.appendChild(Time);

	var weather=document.createElement("div");
	weather.classList.add("weather");
	weatherdetails.appendChild(weather);
	var temp=document.createElement("div");
	temp.classList.add("temp");
	temp.textContent="Temp :"+list[i].main.temp;
	weatherdetails.appendChild(temp);
	var cloud=document.createElement("div");
	cloud.textContent="Cloudy :" +list[i].clouds.all;
	weatherdetails.appendChild(cloud);
	var humidity=document.createElement("div");
	humidity.textContent="Humidity : "+list[i].main.humidity;
	weatherdetails.appendChild(humidity);
	var rainfall=document.createElement("div");
	rainfall.textContent="Rain :"+list[i].rain.text;
	weatherdetails.appendChild(rainfall);

	var windflow=document.createElement("div");
	windflow.textContent="Wind :"
	var li=document.createElement("li");
	var windenergy=document.createElement("div");
	windenergy.textContent="Speed :"+list[i].wind.speed+","+"deg :"+list[i].wind.deg;
	windflow.appendChild(windenergy);
	weatherdetails.appendChild(windflow);
	data.appendChild(weatherdetails);
	data.appendChild(document.createElement("HR"))
	main_div.appendChild(data);
}
 }
// var wind_data=document.createElement("h3");
// wind_data.textContent="Wind Energy :";
// for (i in list) {
// 	var speed=document.createElement("h3")
// 	speed.textContent=list[i].wind.speed;
// 	var deg=document.createElement("h3")
// 	deg.textContent=list[i].wind.deg;
// 	wind_data.appendChild(speed);
// 	wind_data.appendChild(deg);
// }
// main_div.appendChild(wind_data);


console.log(main_div);
// var today=new Date();
// console.log(today);
// if(today.getDate()<=9){
// 	console.log("0"+today.getDate());
// } else {
// 	console.log(today.getDate());
// }
// console.log(today.getMonth()+1);
// console.log(today.getFullYear());
// // console.log(city.name);
// // city_h1.textContent=city.name;
// // main_div.appendChild(city_h1);
}

// weather.js
// Displaying weather.js.
