import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import {CustomOverlayMap, Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import Reviews from "../components/Reviews.jsx";
import AirTable from "../components/AirTable.jsx";
import {fetchCities} from "../../api/supadb.js";
import {fetchAqi} from "../../api/airapi.js";

function RootPage(props) {
    // supabase 에서 가져온 도시 좌표 데이터
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState([]);
    // 클릭한 좌표의 미세먼지 초미세먼지 데이터
    const [aqiInfo, setAqiInfo] = useState({});

    const showDrawer = () => {
        setOpen(true);
    };

    const clickAqi = (city) => {
        fetchAqi(city.latitude, city.longitude)
            .then(data => {
                setAqiInfo(data);
                console.log(data)
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

    useKakaoLoader({
        appkey: '24a797942a4357bf6f39ccf17f356d6d',
    });

    useEffect(() => {
        fetchCities()
            .then(data => {
                setCities(data);
            })
    }, []);

    return (
        <div>
            <Map center={{lat: 35.8714354, lng: 128.601445}} level={8}
                 style={{width: '100%', height: '50vh'}}>
                {
                    cities.map((item) => (
                        <MapMarker key={item.id}
                                   position={{lat: item.latitude, lng: item.longitude}}
                                   onClick={() => {
                                       clickAqi(item);
                                       setCity(item);
                                   }}
                        onMouseOver={ () => {
                            console.log('onMouseOver');
                            console.log(item);
                        }}
                        onMouseOut={() => {
                            console.log('onMouseOut');
                            console.log(item);
                        }}>
                        </MapMarker>
                    ))
                }
                (
                <CustomOverlayMap 
                    position={
                        {lat: '35.67820000', lng: '128.73390000'}
                    }>
                    <div>커스텀</div>
                </CustomOverlayMap>
                )
            </Map>
            <Reviews city={city} aqi={aqiInfo.aqi}></Reviews>
            <AirTable {...aqiInfo}></AirTable>
        </div>
    );
}

export default RootPage;