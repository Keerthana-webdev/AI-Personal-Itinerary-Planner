function generatePlan(){

let city=document.getElementById("city").value.trim();
let days=parseInt(document.getElementById("days").value);
let budget=document.getElementById("budget").value;

if(city=="" || !days){
alert("Please enter destination and number of days");
return;
}

let itinerary="";

for(let i=1;i<=days;i++){

itinerary+=`
<div class="dayCard">

<h3>📅 Day ${i}</h3>

<p>🌅 Morning: Visit famous attractions in <b>${city}</b></p>

<p>🍜 Afternoon: Explore local food streets and markets</p>

<p>🌆 Evening: Enjoy sightseeing, cultural shows, and relax</p>

</div>
`;

}

document.getElementById("plan").innerHTML=itinerary;

let cost=0;
    if(budget=="Low Budget"){
    cost=days*2000;
}
    else if(budget=="Medium Budget"){
    cost=days*5000;
}
    else{
    cost=days*10000;
}

document.getElementById("cost").innerHTML=
"Estimated Trip Cost: ₹ "+cost;

/* Packing List */

let items=[
"👕 Clothes",
"📱 Phone Charger",
"🪥 Toiletries",
"🪪 Travel Documents",
"👟 Comfortable Shoes",
"📷 Camera",
"💊 Basic Medicines"
];

let list="";

items.forEach(function(item){
list+=`<li>${item}</li>`;
});

document.getElementById("packing").innerHTML=list;

document.getElementById("map").src="https://maps.google.com/maps?q="+city+"&output=embed";

document.getElementById("tips").innerHTML=
"✔ Carry local currency<br>\
✔ Keep travel documents safe<br>\
✔ Try local food and culture<br>\
✔ Keep emergency contacts saved";

}