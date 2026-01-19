/**
 * Exercice 04: Unions
 *
 * Créer deux fonctions:
 *
 * 1. `formatId(id)` :
 *    - id: number | string - l'identifiant
 *    - Accepte soit un number soit un string
 *    - Retourne toujours un string
 *    - Si c'est un nombre, préfixe avec "ID-"
 *    - Si c'est déjà un string, retourne tel quel
 *
 *    Exemple:
 *      formatId(123) => "ID-123"
 *      formatId("ABC") => "ABC"
 *
 * 2. `getUsername(user)` :
 *    - user: { username: string } | null
 *    - Retourne le nom d'utilisateur en MAJUSCULES si user n'est pas null
 *    - Retourne "INVITÉ" si user est null
 *
 *    Exemple:
 *      getUsername({ username: "alice" }) => "ALICE"
 *      getUsername(null) => "INVITÉ"
 */

// TODO: Définir le type User et implémenter les fonctions

export type User = {
    id: number | string,
    username: string | null
}

const user1: User = {id:1 , username:"morgan"}
const user2: User = {id:"2" , username:"morgan2"}

export function formatId(id: number | string): any {
    return typeof id==="number" ? `ID-${id}` : `${id}`
}

export function getUsername(user: any): any {
    throw new Error("Not implemented");
}

console.log(formatId(user1.id))
console.log(formatId(user2.id))
