/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = () => new Promise(resolve =>
    setTimeout(resolve, 2000)
);

// (async () => {
//     await sleep()
//     console.log('deux secondes plus tard...')
// })()

module.exports = {sleep};