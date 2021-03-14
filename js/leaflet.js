var mymap = L.map('mapid').setView([48.5833, 7.75], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=XXXXXXXXX', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
/*var elanLogo = L.icon({
    iconUrl: 'img/logo.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 0] // point of the icon which will correspond to marker's location
});

var marker = L.marker([48.557687, 7.747467], {icon: elanLogo}).addTo(mymap);



var marker2 = L.marker([48.506687, 7.747467]).addTo(mymap);
marker.bindPopup("Elan Formation");*/

var elanCentres = {
    "STRASBOURG" : [
        {
            "lieu" : "Elan Formation",
            "adresse" : "202 avenue de Colmar",
            "gps" : [48.557687,7.747467]
        },
        {
            "lieu" : "Elan Formation",
            "adresse" : "230 avenue de Colmar",
            "gps" : [48.556299,7.745757]
        },
        {
            "lieu" : "Elan Formation",
            "adresse" : "12 rue du Rhone",
            "gps" : [48.549948,7.738368]
        }
    ],
    "test" : [
        {
            "lieu" : "Zone Test",
            "adresse" : "XXX avenue de XXX",
            "gps" : [48.507687,7.747467]
        }
    ]
}

var arrayGPS = []
for (const key in elanCentres) {
    if (elanCentres.hasOwnProperty(key)) {
        for (const key2 in elanCentres[key]) {
            if (elanCentres[key].hasOwnProperty(key2)) {
                console.log(elanCentres[key][key2]);
                var marker = L.marker(elanCentres[key][key2].gps).bindPopup("<strong>"+ elanCentres[key][key2].lieu +"</strong><br/>"+ elanCentres[key][key2].adresse ).addTo(mymap);
                arrayGPS.push(elanCentres[key][key2].gps)
            }
        }
        
    }
}



mymap.fitBounds(arrayGPS);