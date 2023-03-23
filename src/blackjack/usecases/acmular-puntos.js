import { valorCarta } from "./valor-carta";

/**
 * @param {string} carta 
 * @param {Number} turno 
 * @returns {Number} devuelve el total de puntos acumulados
 */
export const acumularPuntos = ( carta, turno, puntosJugadores ) =>{

    if( !carta ) throw new Error('carta es obligatorio');
   // if( !turno ) throw new Error('turno es obligatorio');

    const puntosHTML = document.querySelectorAll('small');
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];

}
