export class Place {
    constructor(title, imageUri, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address;
        this.location = { lat: location.lat, lng: location.lng }; //{object of lat:0.141241, long:127.121}
        this.id = new Date().toString() + Math.random.toString();
    }
}