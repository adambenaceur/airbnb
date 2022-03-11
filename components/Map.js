import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter"

function Map({searchResults}) {

    // Transform the search results object into the {latitude: x , longitude: y  } object 
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    // The latitude and longitude of the center of locations coordinates
    const center  = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });


    return (
    <ReactMapGL
        mapStyle='mapbox://styles/adambenaceur/cl0lzgh2d000914qetlkzk8ky'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport} 
        onMove={evt => setViewport(evt.viewport)}
    >          
      ))
    </ReactMapGL>
  );
}

export default Map