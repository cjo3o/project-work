import React, {useEffect, useState} from 'react';
import {Card, Space, Table} from "antd";

function AirTable(props) {

    const [data, setData] = useState(props);

    useEffect(() => {
        setData(props);
    }, [props]);
    try {
        const {
            aqi,
            city: {geo},
            iaqi: {co, no2, o3, pm10, pm25, so2}
        } = props;
    } catch (err) {

    }

    const dataSource = [
        {
            key: '1',
            name: '0~50',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'AQI',
            dataIndex: 'aqi',
            key: 'aqi',
        },
        {
            title: '등급',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <Space>
            <Card hoverable>
                <h1>대기질 정보 {data.aqi}</h1>
                <div>
                    <h2>일산화탄소 : {data?.iaqi?.co?.v}</h2>
                    <h2>이산화질소 : {data?.iaqi?.no2?.v}</h2>
                    <h2>오존 : {data?.iaqi?.o3?.v}</h2>
                    <h2>미세먼지 : {data?.iaqi?.pm10?.v}</h2>
                    <h2>초미세먼지 : {data?.iaqi?.pm25?.v}</h2>
                    <h2>아황산가스 : {data?.iaqi?.so2?.v}</h2>
                </div>
                <Table dataSource={dataSource} columns={columns} pagination={false} />;
            </Card>
        </Space>
    );
}

export default AirTable;