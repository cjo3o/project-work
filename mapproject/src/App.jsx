import {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";
import {Line, Bar} from "@ant-design/plots";

function App() {
    // supabase 에서 가져온 도시 좌표 데이터
    const [cities, setCities] = useState([])
    // 클릭한 좌표의 미세먼지 초미세먼지 데이터
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
                setAqiInfo(data);
            });
    }

    const config = {
        data: [
            {x: '2023-10-01', y: 10},
            {x: '2023-10-02', y: 20},
            {x: '2023-10-03', y: 30},
            {x: '2023-10-04', y: 40},
            {x: '2023-10-05', y: 50},
        ],
        xField: 'x',
        yField: 'y',
    }

    return (
        <>
            <h1>미세먼지</h1>
            <Map center={{lat: 35.8714354, lng: 128.601445}} level={8}
                 style={{width: '100%', height: '50vh'}}>
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
            <Line data={config.data} xField={config.xField} yField={config.yField} />
            <Bar data={config.data} xField={config.xField} yField={config.yField} />
        </>
    )
}

export default App
