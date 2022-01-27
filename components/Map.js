import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {useState} from "react";
import {getCenter} from "geolib";
function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({});
    const coordinates= searchResults?.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));
    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11
    });
    //Transform search result object into lat/long array

    console.log(center);
    return(
        <ReactMapGL
            mapStyle={"mapbox://styles/aseedk/ckywdk15r004c14t8ukgzfy7b"}
            mapboxApiAccessToken={'pk.eyJ1IjoiYXNlZWRrIiwiYSI6ImNreXdkZzZlaTAxZnEydXF2NGJpZWxxbWsifQ.AaZxXeDyG8DX55ajg8Nwog'}
            {...viewport}
            onViewportChange={(nextViewport)=> setViewport(nextViewport)}
        >
            {searchResults?.map((result,index) => (
                <div key={index}>
                    <Marker longitude={result.long}
                            latitude={result.lat}
                            offsetTop={-20}
                            offsetLeft={-10}
                    >
                        <p role={'img'}
                           className={'cursor-pointer text-2xl animate-bounce'}
                           onClick={()=> setSelectedLocation(result)}
                           aria-label={'push-pin'}
                        >
                            📌
                        </p>
                    </Marker>

                    {/*    popup to show if we click on a marker*/}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={()=> setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={51.521916}
                            longitude={-0.135638}
                        >
                            <p>Name: {result.title}</p>
                            <p>Rating: {result.star}</p>
                        </Popup>
                    ): false}
                </div>

            ))}
        </ReactMapGL>
    )
}
export default Map
