import './css/main.css';
import './scss/main.scss';

import * as outils from './js/module';
//var moment = require('moment');
import moment from 'moment';
import 'moment/locale/fr';




//import Meteo from './js/meteoclasseinfosjquery';
import Meteo from './js/meteoclasseinfoshandlebars';




//-----------------------date moment----------------------
//-----------------------VARIABLES
var datedujour = document.querySelector('.date');
var maintenant = moment();


function dateDuJour() {
    console.log("Date du jour : " + maintenant.format('LLLL'));
    datedujour.innerHTML = outils.capLettre(maintenant.format('LLLL'));
}



//--------------------CLASS MÉTÉO-------------

//        -------------QC6325494 Paris2988507 santo domingo3492908 thetford mines6943827

function meteoDuJour() {

    const infosMeteo = {
        "villeID": "6943827",
        "units": "metric",
        "langue": "fr"
    };

    const maMeteo = new Meteo(infosMeteo);
    console.log(maMeteo.getMeteoInformations());
}


//____________________INIT____________

$(document).ready(function () {

    dateDuJour();
    meteoDuJour();

});
