// On récupère l'élément (ajoute des guillemets autour de l'ID)
const somerandomediv = document.getElementById("playclick");

function clickplay() {
    // On vérifie si l'élément a déjà une transformation appliquée
    if (somerandomediv.style.transform === "translateX(-305px)") {
        // On le remet à sa position initiale (caché)
        somerandomediv.style.transform = "translateX(0px)";
    } else {
        // On le fait glisser vers la gauche pour qu'il apparaisse
        somerandomediv.style.transform = "translateX(-305px)";
    }
}

function clickcredits(){
 window.location.href = "credits.html"    
}
function clickoptions(){
    window.location.href = "options.html"
}
function clickarcad(){
    window.location.href = "game.html"
}
const dict = {
    1:"why love?",
    2:"correct the word ,math",
    3:"em ees uoy nac"
}
