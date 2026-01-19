/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 *
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 *
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return a > b ?
        ">"
        : a < b ?
            "<" : "="
}

console.log(ternaryChain(12,5))
console.log(ternaryChain(123,45689))
console.log(ternaryChain(10,10))

module.exports = ternaryChain;