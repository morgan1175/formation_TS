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

const user1: User = {id: 1, username: "morgan"}
const user2: User = {id: "2", username: "morgan2"}
const user3: User = {id: 3, username: null}

export function formatId(id: number | string): number | string {
    return typeof id === "number" ? `ID-${id}` : `${id}`
}

export function getUsername(user: User): string | null {
    return user.username ? user.username.toUpperCase() : "INVITE"
}

console.log(formatId(user1.id))
console.log(formatId(user2.id))
console.log(getUsername(user1))
console.log(getUsername(user3))
