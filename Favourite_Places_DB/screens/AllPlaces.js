import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../util/database';

function AllPlaces({ route }) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadedPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);

        }
        if (isFocused) {
            loadedPlaces();
            // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
        }
        // if (isFocused && route.params) {
        //     setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
        // }
        // }, [isFocused, route]);
    }, [isFocused]);

    return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;