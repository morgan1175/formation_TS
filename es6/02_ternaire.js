/**
 * retourne la valeur la plus grande des deux paramètres
 *
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a, b) {
    return a > b ? a : b;
}

console.log(ternaire(12,4))
console.log(ternaire(745,32587))
console.log(ternaire(10,10))

module.exports = ternaire;