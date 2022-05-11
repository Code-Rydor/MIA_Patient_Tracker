import React from 'react';
import { Row, Col, Form, Input, Button, Space } from 'antd';
import 'antd/dist/antd.css';
import '../../sendgrid.env';

const { TextArea } = Input;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const EmailPage = () => {
    const [form] = Form.useForm();
    return ( 
        <Row gutter={24} style={{ padding: '30px' }}>
            <Col xl={12}>
                <Form layout='vertical' form={form}>
                    <Form.Item
                        name='name'
                        label='Name'
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='email'
                        label='Email'
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Input />
                        <Form.Item
                        name='subject'
                        label='Subject'
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                            <Input />
                            <Form.Item
                        name='message'
                        label='Message'
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <TextArea />
                    </Form.Item>
                    </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type='primary'>Submit</Button>
                            <Button type='secondary' onClick={(e) => form.resetFields}>
                                Clear
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
     );
}
 
export default EmailPage;