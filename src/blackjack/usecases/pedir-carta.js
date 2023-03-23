/**
 * 
 * @param {Array<string>} deck 
 * @returns {string} retorna un string con la carta del deck
 */

export const pedirCarta = ( deck ) =>{

    if(deck.length === 0) throw new Error('deck es obligatorio');

    return deck.pop(); 
}