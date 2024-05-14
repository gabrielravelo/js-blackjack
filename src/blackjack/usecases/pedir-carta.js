
/** Esta función me permite tomar una carta
 * @param {Array<string>} deck Ejemplo: ['C','D','H','S']
 * @returns {String} retorna la nueva carta del jugador
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 || !deck ) throw new Error('No hay cartas en el deck');
   
    return deck.pop();
}

