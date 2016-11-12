
// Fetch Photo Paths
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export function fetchPhotos(photos) {
  return {
    type: FETCH_PHOTOS,
    payload: photos
  }
}