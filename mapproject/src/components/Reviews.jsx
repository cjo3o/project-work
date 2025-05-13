import React, {useEffect, useState} from 'react';
import {fetchRevies} from "../../api/supadb.js";
import {Button, Card, Form, Input, Rate, Typography} from "antd";
import {EnvironmentOutlined, UserOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea.js";

function Reviews({city}) {
    const [form] = Form.useForm();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // city가 유효한 경우에만 fetch
        if (city && city.id) {
            fetchRevies(city.id).then((data) => {
                setReviews(data);
                console.log(data);
            });
        }
    }, [city]);

    const handleSubmit = (values) => {
        console.log('handleSubmit');
        console.log(values);
    };

    if (!city || city.length === 0) {
        return <div>Loading...</div>;  // useEffect 이후에 위치
    }

    return (
        <div>
            <h1>Reviews {city.name}</h1>
            <h2>미세먼지 {city.aqi}</h2>
            {
                reviews &&
                reviews.map((review) => (
                    <div key={review.id}>
                        <p>{review.comment}</p>
                        <p>작성자: {review.user_name}</p>
                        <p>작성일: {new Date(review.created_at).toLocaleDateString()}</p>
                    </div>
                ))
            }
            <Card>
                <Typography.Title level={3}>
                    <EnvironmentOutlined/> 리뷰작성
                </Typography.Title>
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Form.Item
                        name="userName"
                        label="이름"
                        rules={[{required: true, message: "이름을 입력하세요"}]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="이름을 입력하세요"
                        />
                    </Form.Item>
                    <Form.Item
                        name="rating"
                        label="평점"
                        rules={[{required: true, message: "평점을 선택해주세요"}]}
                    >
                        <Rate/>
                    </Form.Item>
                    <Form.Item
                        name="comment"
                        label="리뷰 내용"
                        rules={[{required: true, message: "리뷰 내용을 입력해주세요"}]}
                    >
                        <TextArea rows={4} placeholder="리뷰 내용을 입력해주세요"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            리뷰 작성
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}


export default Reviews;