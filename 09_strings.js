/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 *
 * exemple: "John", "Doe" => "John Doe"
 *
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

a = "John"
b = "Doe"

const concat = (a, b) => `${a} ${b}`;
console.log(concat(a, b))