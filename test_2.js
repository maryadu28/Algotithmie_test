
function nbreOccurence(tab) {
    var compteur = 0;
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab.length; j++) {
            if (tab[i] == tab[j]) {
                compteur = compteur + 1;
            }
        }
        if (compteur % 2 != 0) {
            return tab[i];
        }
    }
}

const array = [0, 1, 0, 1, 0]
console.log(nbreOccurence(array));
