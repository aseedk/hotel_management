import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {useEffect, useState} from "react";
import {getCenter} from "geolib";
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
function Map({searchResults}) {
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = useState({});
    const [zoomOut, setZoomOut] = useState(false);
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
        zoom: 12
    });
    //Transform search result object into lat/long array
    useEffect(()=>{
        console.log(viewport);
        if (viewport.zoom < 9){
            setZoomOut(true);
        }else {
            setZoomOut(false);
        }
    })
    console.log(center);
    return(
        <ReactMapGL
            mapStyle={"mapbox://styles/aseedk/ckywdk15r004c14t8ukgzfy7b"}
            mapboxApiAccessToken={'pk.eyJ1IjoiYXNlZWRrIiwiYSI6ImNremF6MTN4YTA4NTEydW50cmxnYmRodnIifQ.CZl7Mza55vy7J8tYdy4eyg'}
            {...viewport}
            onViewportChange={(nextViewport)=> setViewport(nextViewport)}
        >
            {!zoomOut && searchResults?.map((result,index) => (
                <div key={index}>
                    <Marker longitude={result.long}
                            latitude={result.lat}
                            offsetTop={-20}
                            offsetLeft={-10}
                    >
                        <p role={'img'}
                           className={'cursor-pointer text-2xl animate-bounce bg-white rounded-full px-2 py-1'}
                           onClick={()=> setSelectedLocation(result)}
                           aria-label={'push-pin'}
                        >
                            {result.price.split(' ')[0]}
                        </p>
                    </Marker>

                    {/*    popup to show if we click on a marker*/}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={()=> setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            className={'z-50'}
                        >
                            <div className={'relative h-60 w-60'}
                                 onClick={()=>{
                                     router.push({
                                         pathname: '/detail',
                                         query: {
                                             id:'123'
                                         }
                                     });
                                 }}
                            >
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <div className={''}>
                                    <h3 className={"text-md font-semibold"}>{result.title}</h3>
                                    <p className={'flex items-center'}>Rating: {result.star} <StarIcon className={'h-5 text-red-400'}/></p>
                                </div>
                                <div className={'absolute bottom-1 h-40 w-60'}>
                                    <Image src={result.img}
                                           layout={'fill'}
                                           className={''}
                                    />
                                </div>
                                {/**/}


                            </div>
                        </Popup>
                    ): false}
                </div>
            ))}
            {zoomOut && (
                <div>
                    <Marker longitude={center.longitude}
                            latitude={center.latitude}
                            offsetTop={-20}
                            offsetLeft={-10}
                            onClick={()=> setSelectedLocation(center)}
                    >
                        <div className={'cursor-pointer rounded-b-3xl px-1 py-2 bg-white animate-bounce'}>
                            <p className={'text-xl'}>{searchResults?.length}</p>
                        </div>
                    </Marker>
                </div>
            )}
        </ReactMapGL>
    )
}
export default Map
