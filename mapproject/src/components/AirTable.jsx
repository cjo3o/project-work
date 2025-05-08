import React from 'react';
import {Card, Space, Table} from "antd";

function AirTable(props) {
    console.log("props", props);
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
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
                <h1>대기질 정보</h1>
                <Table dataSource={dataSource} columns={columns} />;
            </Card>
        </Space>
    );
}

export default AirTable;