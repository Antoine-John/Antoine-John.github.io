function FindOut() {
if (!document.getElementById) return;
var Year = document.form1.Year.value;
var Month = document.form1.Month.value;
var Date1 = document.form1.Date1.value;
var head2 = document.getElementById("head2"); 
var head1 = document.getElementById("head1");
var head12 = document.getElementById("head3")
var Day = document.form1.Day.value;
var Remain = Year % 12;
var star = 0;
var Animals = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat"];

var Stars = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricon", "Aquarius", "Pisces"];

if(Day.toLowerCase() == "yes"){
Remain = Remain - 1;
}
if(Remain < 0){
Remain = 11;
}
switch (Month.toLowerCase()){

case "january" :
if(Date1 > 20){
star = 10;
} else {
star = 9;
}
break;

case "february" :
if(Date1 > 19){
star = 11;
} else {
star = 10;
}
break;

case "march":
if(Date1 > 20){
star = 0;
} else {
star = 11;
}
break;

case "april":
if(Date1 > 20){
star = 1;
} else {
star = 0;
}
break;

case "may":
if(Date1 > 21){
star = 2;
} else {
star = 1;
}
break;

case "june":
if(Date1 > 21){
star = 3;
} else {
star = 2;
}
break;

case "july":
if(Date1 > 22){
star = 4;
} else {
star = 3;
}
break;

case "august":
if(Date1 > 22){
star = 5;
} else {
star = 4;
}
break;

case "september":
if(Date1 > 22){
star = 6;
} else {
star = 5;
}
break;

case "october":
if(Date1 > 23){
star = 7;
} else {
star = 6;
}
break;

case "november":
if(Date1 > 21){
star = 8;
} else {
star = 7;
}
break;

case "december":
if(Date1 > 20){
star = 9;
} else {
star = 8;
}
break;

default :
break;
}
head1.firstChild.nodeValue="Your Information Has Been Calculated! You were born in the year of the " + Animals[Remain] + "!";
head2.firstChild.nodeValue="You are a " + Stars[star] + "!";
}