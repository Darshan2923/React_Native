// This does not work, try to use newer syntax referring the documentation

import * as SQLite from 'expo-sqlite';

import { Place } from '../models/place';

const database = SQLite.openDatabase('places.db');

export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}

export function insertPlace(place) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [
                    place.title,
                    place.imageUri,
                    place.address,
                    place.location.lat,
                    place.location.lng,
                ],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}

export function fetchPlaces() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => {
                    const places = [];

                    for (const dp of result.rows._array) {
                        places.push(
                            new Place(
                                dp.title,
                                dp.imageUri,
                                {
                                    address: dp.address,
                                    lat: dp.lat,
                                    lng: dp.lng,
                                },
                                dp.id
                            )
                        );
                    }
                    resolve(places);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}

export function fetchPlaceDetails(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places WHERE id = ?',
                [id],
                (_, result) => {
                    const dbPlace = result.rows._array[0];
                    const place = new Place(
                        dbPlace.title,
                        dbPlace.imageUri,
                        { lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address },
                        dbPlace.id
                    );
                    resolve(place);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}