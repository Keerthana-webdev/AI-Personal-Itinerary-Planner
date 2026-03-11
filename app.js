function generatePlan(){

let city=document.getElementById("city").value;
let days=document.getElementById("days").value;
let budget=document.getElementById("budget").value;

let itinerary="";

for(let i=1;i<=days;i++){

itinerary+=`
<h3>Day ${i}</h3>
<p>Morning: Visit famous places in ${city}</p>
<p>Afternoon: Explore local food and markets</p>
<p>Evening: Enjoy sightseeing and relax</p>
`;

}

document.getElementById("plan").innerHTML=itinerary;

/* Budget Calculation */

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

document.getElementById("cost").innerHTML="Estimated Trip Cost: ₹"+cost;

/* Packing List */

let items=[
"Clothes",
"Phone Charger",
"Toiletries",
"Travel Documents",
"Shoes",
"Camera"
];

let list="";

items.forEach(function(item){
list+=`<li>${item}</li>`;
});

document.getElementById("packing").innerHTML=list;

/* Map */

document.getElementById("map").src=
"https://maps.google.com/maps?q="+city+"&output=embed";

/* Travel Tips */

document.getElementById("tips").innerHTML=
"Carry local currency, keep important documents safe, and explore local culture.";

}