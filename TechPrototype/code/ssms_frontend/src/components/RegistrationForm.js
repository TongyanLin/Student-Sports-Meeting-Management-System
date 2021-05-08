import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'
import * as userService from '../services/userService'
import { Link } from 'react-router-dom';


class RegistrationFrom extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userService.login(values);
            }
        });
    };

    checkPsd(rule, value, callback) {
        let password = this.props.form.getFieldValue('password');
        if (password && password !== value) {
            if(value!==""){
                callback(new Error('The two passwords that you entered do not match!'));
            }
            else{
                callback();
            }
        } else {
          callback();
        }
      }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                    name="email"
                    hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your E-mail!' }],
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item
                    name="username"
                    hasFeedback>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>

                <Form.Item
                    name="password"
                    hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: 'Please input your password!',
                        }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies="password"
                    hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        { validator: (rule, value, callback) => { this.checkPsd(rule, value, callback) }},
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Confirm Password"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>I agree with the terms.</Checkbox>)}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign Up
                    </Button>
                    Or <Link to="/login"><a href="">back to login</a></Link>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegForm = Form.create({ name: 'normal_login' })(RegistrationFrom);

export default WrappedRegForm
