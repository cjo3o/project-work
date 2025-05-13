import React from 'react';
import {Line} from "@ant-design/plots";
import {Button} from "antd";

function MyChart(props) {
    const [data, setData] = React.useState([
        {
            date: "2016-03-01",
            value: 10,
        },
        {
            date: "2016-03-02",
            value: 20,
        },
        {
            date: "2016-03-03",
            value: 30,
        },
        {
            date: "2016-03-04",
            value: 40,
        },
        {
            date: "2016-03-05",
            value: 60,
        },
    ]);
    const lineConfig = {
        data,
        xField: "date",
        yField: "value",
        height: 300,
    };

    const changeData = () => {
        setData(
            [
                {
                    date: "2016-03-01",
                    value: Math.floor(Math.random() * 100),
                },
                {
                    date: "2016-03-02",
                    value: Math.floor(Math.random() * 100),
                },
                {
                    date: "2016-03-03",
                    value: Math.floor(Math.random() * 100),
                },
                {
                    date: "2016-03-04",
                    value: Math.floor(Math.random() * 100),
                },
                {
                    date: "2016-03-05",
                    value: Math.floor(Math.random() * 100),
                },
            ]
        )
    }

    return (
        <>
            <div>
                MyChart
            </div>
            <div style={{display: "flex"}}>
                <div style={{width: '70%'}}>
                    <Line {...lineConfig}></Line>
                </div>
                <div>
                    <Button onClick={changeData}>
                        버튼
                    </Button>
                </div>
            </div>
        </>
    );
}

export default MyChart;