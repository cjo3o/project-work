import './App.css'
import {useState} from "react";
import Person from "./components/Person.jsx";
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";

function App() {
    useKakaoLoader({
        appkey: '24a797942a4357bf6f39ccf17f356d6d'
    })
    const [test, setTest] = useState(null);

    const mouseOver = () => {
        console.log("mouseOver");
        setTest({});
    }
    const mouseOut = () => {
        console.log("mouseOut");
        setTest(null);
    }
    return (
        <>
            <Map
                // onMouseOut={() => alert('마우스 나감')}
                center={{lat: 33.5564, lng: 126.7981}}
                style={{width: '100%', height: '360px'}}
                level={5}
            >
                <MapMarker
                    position={{lat: 33.5564, lng: 126.7981}}
                >
                    좌표설정
                </MapMarker>
            </Map>
            {test && (
                <>
                    <Person name="홍길동" age={30} position="right"></Person>
                    <Person name="박길동" age={40} position="bottom"></Person>
                </>
            )}
            <h1>대중교통정보서비스</h1>
            <div
                style={{cursor: 'pointer'}}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
            >
                여기에 마우스 올리면 이벤트 작동
            </div>
        </>
    )
}

export default App
