const GOOGLE_API_KEY = 'AIzaSyA8EGxOavSvQa0_7Qn5uPqQW0cPG6gJRpY';

export function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`);

    if (!response.ok) {
        throw new Error("Failed to fetch address!");
    }

    const data = await response.json();
    const address = data.results[0].formatted_address;

    return address;

}
