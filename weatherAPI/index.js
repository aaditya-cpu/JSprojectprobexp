window.addEventListener('load', () => {
    let long;
    let lat;
    const key = "e29761bd6ad049a68f975205220602";
    const ur = "http://api.weatherapi.com/v1"; //Base URL: http://api.weatherapi.com/v1
    const current = "current.json";
    // const timezone = "timezone.json";
    const astro = "astronomy.json";
    let date; //needs date http://api.weatherapi.com/v1/astronomy.json?key=e29761bd6ad049a68f975205220602&q=22.7195687,75.8577258&dt=2022-02-06
    //  ++++++++++++++++++++++++++
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    //  console.log(cDay);
    //  console.log(cMonth);
    //  console.log(cYear);
    date = cYear + "-" + cMonth + "-" + cDay;
    // let qi = yes;
    //  request format  http://api.weatherapi.com/v1/current.json?key=e29761bd6ad049a68f975205220602&q=22.7195687,75.8577258&aqi=no

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //  console.log(position); //checking the  data format
            const requrl = (ur + "/" + current + "?key=" + key + "&q=" + lat + "," + long + "&dt=" + date);
            const requrlAstro = (ur + "/" + astro + "?key=" + key + "&q=" + lat + "," + long + "&dt=" + date);
            fetch(requrl)
                .then(data => {

                    return data.json();
                    //  console.log("Lat: " + lat + " Long: " + long + " Date: " + date);
                })
                .then(response => {

                    console.log(response);
                    console.log(date);
                    console.log(requrl);

                })
            fetch(requrlAstro)
                .then(atrodata => {
                    return atrodata.json();
                })
                .then(responseAstro => {
                    console.log(responseAstro);
                    console.log(requrlAstro);
                })
        })

    } else {
        h1.textContent = " Let me have the location so I can show you weather, I am not tracking you Boomer!";
        alert("Let me have the location so I can show you weather, I am not tracking you Boomer!");

    }
}); //loading function on plage loading

//  function FetchData(params) {
//      console.log(ur + );
//  }