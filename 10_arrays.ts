/**
 * Exercice 10: Arrays
 *
 * Créer deux fonctions:
 *
 * 1. `sumNumbers(numbers)` :
 *    - Prend un tableau de nombres
 *    - Retourne leur somme (number)
 *
 *    Exemple:
 *      sumNumbers([1, 2, 3]) => 6
 *      sumNumbers([]) => 0
 *      sumNumbers([10, -5, 3]) => 8
 *
 * 2. `filterLongWords(words, minLength)` :
 *    - Prend un tableau de strings
 *    - Prend une longueur minimale (number)
 *    - Retourne les mots dont la longueur est >= minLength
 *
 *    Exemple:
 *      filterLongWords(["hi", "hello", "world"], 4) => ["hello", "world"]
 *      filterLongWords(["a", "ab", "abc"], 2) => ["ab", "abc"]
 */

// TODO: Implémenter les fonctions

const listeNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const listeVide: number[] = []
const listeWord1: string[] = ["hi", "hello", "world"]
const listeWord2: string[] = ["a", "ab", "abc"]

export function sumNumbers(numbers: number[]): number {
    return numbers.length > 0 ? numbers.reduce((acc, x) => acc + x, 0) : 0
}

console.log(sumNumbers(listeNumbers))
console.log(sumNumbers(listeVide))

export function filterLongWords(words: string[], minLength: number): string[] {
    return words.filter(word => word.length >= minLength)
}

console.log(filterLongWords(listeWord1, 4))
console.log(filterLongWords(listeWord2, 2))