import Handlebars from 'handlebars';
import {
    capLettre
} from './module';
// MÉTHODE MODULE CLASS

class Meteo {

    constructor(infos) {
        this.infos = infos;
        console.log("ID de la ville : " + this.infos.villeID);
        console.log("Le système est : " + this.infos.units);
    }

    getMeteoInformations(infos) {

        //        VARIABLE PRIVÉ

        const _infos = this.infos;


        //console.log("OK this.infos.langue : " + this.infos.langue);
        var maClef = "0c98af945c8169d1e0fb538cd4ff153f";
        var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id=' + this.infos.villeID + '&units=' + this.infos.units + '&lang=' + this.infos.langue + '&APPID=' + maClef;
        // ----------------------- OPENWEATHERMAP -----------------------
        //        -------------QC6325494 Paris2988507 santo domingo3492908
        $.ajax({
                'url': maRequete,
                'type': 'GET',
                'format': 'json',
                'cache': 'false',
                'dataType': 'json'

            }).done(function (data, textStatus, jqXHR) {

                // DONNÉES DE LA JOURNÉE.
                console.dir(data);

                //
                const tendance = data.weather[0].main;
                const tendanceFrancais = data.weather[0].description;
                const unite = _infos.units == "metric" ? "ºC" : "°F";

                // CONSOLE
                console.log("Ville : " + data.name);
                console.log("Température : " + data.main.temp);
                console.log("Humidité : " + data.main.humidity + "%");
                console.log("tendanceFrancais : " + capLettre(tendanceFrancais));
                console.log("Vent :" + data.wind.speed + "m/sec");





                //        --------------SVG------------------------
                //        https://css-tricks.com/using-svg/

                let imgsource = "";
                const chemin = "img/";

                switch (tendance) {
                    case "Rain":
                        imgsource = chemin + "rain.svg";
                        break;
                    case "Clear":
                        imgsource = chemin + "sunny.svg";
                        break;
                    case "Clouds":
                        imgsource = chemin + "cloudy.svg";
                        break;
                    case "Snow":
                        imgsource = chemin + "snow.svg";
                        break;
                    default:
                        imgsource = chemin + "variable.svg";
                }
                const source = $('#handlebars-meteo').html();

                const template = Handlebars.compile(source);

                const context = {
                    "ville": data.name,
                    "temperature": data.main.temp + unite,
                    "humidite": data.main.humidity + "%",
                    "tendance": capLettre(tendanceFrancais),
                    "imagemeteo": imgsource,
                    "vent": data.wind.speed + "m/sec"
                };

                const result = template(context);

                $(".jumbotron").html(result);



            })

            .fail(function (jqXHR, textStatus, errorThrown) {
                window.console.log('errorThrown : ' + textStatus);
            })
            .always(function (jqXHR, textStatus) {
                console.log('Fin de l\'exécution.');
            });


        return "****** getMeteoInformations() OK. Affichage avec handlebars.";
    }
}

export default Meteo
