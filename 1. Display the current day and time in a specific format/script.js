// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var d = new Date();
var day = d.getDay();
var time = d.getTime();
var min = d.getMinutes();

//weekdays
var weekdays = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
document.write("Today is : " + weekdays[day]);
document.write("<br/>");

// AM PM 
var ahora = d.getHours();
var ampm = ahora >= 12 ? 'PM' : 'AM';
ahora = ahora % 12;
ahora = ahora ? ahora : 12;
min = min < 10 ? '0' + min : min()
var put = ahora + "" + ampm + ":" + min + " : " + d.getMilliseconds();
var fin = document.write("\t Current time is : " + put)


let out = document.getElementById("disp").innerHTML