//

// Similar code to latest doc but does not work
// import * as SQLite from 'expo-sqlite';


// // Initialize the database and create the table
// export async function init() {
//     const db = await SQLite.openDatabaseAsync('places.db');
//     await db.execAsync(`
//         PRAGMA journal_mode = WAL;
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY NOT NULL,
//             title TEXT NOT NULL,
//             imageUri TEXT NOT NULL,
//             address TEXT NOT NULL,
//             lat REAL NOT NULL,
//             lng REAL NOT NULL
//             );
//             `);
// }

// // Insert a place into the database
// export async function insertPlace(place) {
//     const db = await SQLite.openDatabaseAsync('places.db');
//     const result = await db.runAsync('INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)',
//         place.title, place.imageUri, place.address, place.location.lat, place.location.lng);
//     console.log('Inserted place with ID:', result.lastInsertRowId);
// }