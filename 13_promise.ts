/**
 * Exercice 13: Promise
 *
 * Créer une fonction `fetchUsername(userId)` qui :
 * - Prend un `userId` de type number
 * - Retourne une `Promise<string>` contenant le nom d'utilisateur
 * - Utilise l'API JSONPlaceholder : https://jsonplaceholder.typicode.com/users/{userId}
 *
 * L'API retourne un objet utilisateur avec une propriété `username`.
 *
 * Exemple:
 *   await fetchUsername(1) => "Bret"
 *   await fetchUsername(2) => "Antonette"
 *
 * Note: Utilisez fetch() ou axios pour effectuer la requête HTTP.
 */

// TODO: Implémenter fetchUsername
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function fetchUsername(userId: number): Promise<string> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('utilisateur introuvable')
            }
            return response.json()
        })
        .then(user => user.username as string)
}

fetchUsername(1).then(username => console.log(username))
fetchUsername(2).then(username => console.log(username))