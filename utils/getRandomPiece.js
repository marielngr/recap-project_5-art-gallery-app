/** getRandomArtPiece erwartet als erstes Argument ein Array
 * und gibt ein zufälliges Element des Arrays zurück
 * @param {array} data - Das Array mit den Element.
 */

export function getRandomArtPiece(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}
