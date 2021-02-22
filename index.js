const obj={
	url:"https://api.openweathermap.org/data/2.5/weather",
	key:"b4639aafe484e6dd03f91728729e50ba"
}
var res="";
const ans=document.getElementById('input');
console.log(ans);
ans.addEventListener('keypress',(event)=>{

	if(event.keyCode==13){
	 fetchdata(ans.value);
	 document.getElementById('input').value="";
}

});
function fetchdata(val){
	console.log(val);
	fetch(`${obj.url}?q=${val}&appid=${obj.key}&units=metric`).then(res=>res.json()).then(data=>{
		if(data.message){
			alert("city name is wrong pls enter valid city");
		}else
		res=data;
		console.log(res.message);
		showdata(res);
	
	})

}
function showdata(res){
	console.log(res);
	const city=document.getElementById('city');
	city.innerText=`${res.name},${res.sys.country}`;
	const temp=document.getElementById('temp');
	temp.innerHTML=`${Math.round(res.main.temp)}&deg;C`;
	const minmax=document.getElementById('min-max');
	minmax.innerHTML=`${Math.floor(res.main.temp_max)}&deg;C(min),${Math.ceil(res.main.temp_min)}&deg;C(max)`;
	const clear=document.getElementById('clear');
	clear.innerText=res.weather[0].main;
	if(res.weather[0].main=="Haze"){
		document.body.style.backgroundImage="url('img/haze.jpg')";
	}else
			if(res.weather[0].main=="Clear"){
		document.body.style.backgroundImage="url('img/clear.jpg')";

	}else
	if(res.weather[0].main=="Clouds"){
		document.body.style.backgroundImage="url('img/cloud.jpg')";
}else
if(res.weather[0].main=="Rain"){
		document.body.style.backgroundImage="url('img/rain.jpg')";
	}else
	if(res.weather[0].main=="Mist"){
		document.body.style.backgroundImage="url('img/haze.jpg')";
	}
	const date=document.getElementById('date');
	date.innerHTML=print(new Date());


}
function print(date){
	console.log(date);
	var weeks=["Sunday","Monday","Tuesday","wednesday","thrusday","Friday","Saturaday"];
	var months=["januarary","February","March","April","May","June","July","August","Sepetember","October","November","December"];
	let year=date.getFullYear();
	let day=weeks[date.getDay()];
	let month=months[date.getMonth()];
	let dates=date.getDate();
	return `${dates}${month}(${day}),${year}`;

}

