import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Select} from 'antd';
import 'antd/dist/antd.css';
// import '../css/login.css'
import * as userService from '../services/userService'
import { Link } from 'react-router-dom';

const { Option } = Select;

class EnrollForm extends React.Component {

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //             userService.login(values);
    //         }
    //     });
    // };

    // checkPsd(rule, value, callback) {
    //     let password = this.props.form.getFieldValue('password');
    //     if (password && password !== value) {
    //         if(value!==""){
    //             callback(new Error('The two passwords that you entered do not match!'));
    //         }
    //         else{
    //             callback();
    //         }
    //     } else {
    //       callback();
    //     }
    //   }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form /*onSubmit={this.handleSubmit}*/>
                <Form.Item
                    name="email"
                    label="邮箱"
                    hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: '请输入你的邮箱!' }],
                    })(
                        <Input />,
                    )}
                </Form.Item>

                <Form.Item
                    name="tel"
                    label="电话"
                    hasFeedback>
                    {getFieldDecorator('tel', {
                        rules: [{
                            required: true,
                            message: '请输入你的联系方式!',
                        }],
                    })(
                        <Input />,
                    )}
                </Form.Item>

                <Form.Item
                    name="name"
                    label="姓名"
                    hasFeedback>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入你的姓名!' }],
                    })(
                        <Input />,
                    )}
                </Form.Item>

                <Form.Item
                    name="select"
                    label="性别"
                    hasFeedback>
                    {getFieldDecorator('select', {
                        rules: [{ required: true, message: '请选择你的性别!' }],
                    })(
                    <Select>
                    <Option value="male">男</Option>
                    <Option value="female">女</Option>
                    </Select>)}
                </Form.Item>

                <Form.Item
                    name="select-multiple"
                    label="报名项目">
                    {getFieldDecorator('select-multiple', {
                        rules: [{ required: true, message: '请选择你报名的项目!' }],
                    })(
                    <Select mode="multiple">
                        <Option value="1">男子100m</Option>
                        <Option value="2">女子100m</Option>
                        <Option value="3">男子200m</Option>
                        <Option value="4">女子200m</Option>
                        <Option value="5">男子1000m</Option>
                        <Option value="6">女子1000m</Option>
                        <Option value="7">男子跳远</Option>
                        <Option value="8">女子跳远</Option>
                        <Option value="9">男子铅球</Option>
                        <Option value="10">女子铅球</Option>
                    </Select>)}
                </Form.Item>

                <Form.Item>
                    {/* {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>I agree with the terms.</Checkbox>)} */}
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedEnrollForm = Form.create({ name: 'enrollment' })(EnrollForm);

export default WrappedEnrollForm
