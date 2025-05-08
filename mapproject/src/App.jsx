import {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [cities, setCities] = useState([])
    const [aqiInfo, setAqiInfo] = useState({})

    useKakaoLoader({
        appkey: '24a797942a4357bf6f39ccf17f356d6d',
    })

    useEffect(() => {
        fetchCities()
            .then(data => {
                setCities(data);
            })
    }, []);

    const clickAqi = (city) => {
        fetchAqi(city.latitude, city.longitude)
            .then(data => {
                console.log(data);
            });
    }

    return (
        <>
            <h1>Hello</h1>
            <Map center={{lat: 35.8714354, lng: 128.601445}} level={8}
                 style={{width: '100%', height: '80vh'}}>
                {
                    cities.map((city) => (
                        <MapMarker key={city.id}
                                   position={{lat: city.latitude, lng: city.longitude}}
                                   onClick={() => clickAqi(city)}>
                        </MapMarker>
                    ))
                }
            </Map>
            <AirTable {...aqiInfo}></AirTable>
        </>
    )
}

export default App
