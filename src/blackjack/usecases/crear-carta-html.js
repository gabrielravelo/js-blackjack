

/**
 * Funcion que añade la carta en el HTML
 * @param {String} carta Recibe la carta
 * @param {Number} turno Recibe el turno del jugador
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {
    const imgCarta = document.createElement('img');
          imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
          imgCarta.classList.add('carta');
          divCartasJugadores[turno].append( imgCarta );
}