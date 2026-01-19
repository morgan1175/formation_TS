
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

const user1 = {
    name: "John",
    group: {
        name: "admin"
    }
}

const getGroupName = (user)=>user?.group.name;
console.log(getGroupName(user1))

module.exports = {getGroupName};