import Animale from "./animale.js";

export default class Fattoria {
    constructor()
    {
        if (document.getElementById('btGallo') != null) {
            document.getElementById('btGallo').addEventListener('click', this.cGallo);
        }

        if (document.getElementById('btMaiale') != null) {
            document.getElementById('btMaiale').addEventListener('click', this.cMaiale);
        }
        
        if (document.getElementById('btMucca') != null) {
            document.getElementById('btMucca').addEventListener('click', this.cMucca);
        }
    };

    cGallo() {
        var gallo = new Animale("Gallo", "Andalusa", "2", "/img/Gallo.jpg");
        document.getElementById("tG").innerHTML = gallo.tipo;
        document.getElementById("rG").innerHTML = gallo.razza;
        document.getElementById("nzG").innerHTML = gallo.nzampe;
        document.getElementById("iG").src = gallo.img_url;
    };

    cMaiale() {
        var maiale = new Animale("Maiale", "Iberico", "4", "/img/Maiale.jpg");
        document.getElementById("tM").innerHTML = maiale.tipo;
        document.getElementById("rM").innerHTML = maiale.razza;
        document.getElementById("nzM").innerHTML = maiale.nzampe;
        document.getElementById("iM").src = maiale.img_url;
    };

    cMucca() {
        var mucca = new Animale("Mucca", "Normanna", "4", "/img/Mucca.jpg");
        document.getElementById("tMu").innerHTML = mucca.tipo;
        document.getElementById("rMu").innerHTML = mucca.razza;
        document.getElementById("nzMu").innerHTML = mucca.nzampe;
        document.getElementById("iMu").src = mucca.img_url;
    };
}