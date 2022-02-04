// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yy, mm/dd/yy or dd-mm-yy, dd/mm/yy 
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yy = today.getFullYear();

//Variables to hold the value
if (dd < 10) {

    dd = `0${dd}`;
    console.log("Roger date ok")

}
if (mm < 10) {
    mm = `0${mm}`;
    console.log("Roger month ok")

}
//check is value ok if not add 0

today = mm + '-' + dd + '-' + yy;
console.log(today);
today = mm + '/' + dd + '/' + yy;
console.log(today);
today = dd + '-' + mm + '-' + yy;
console.log(today);
today = dd + '/' + mm + '/' + yy;
console.log(today);