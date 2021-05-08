import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

export class SideBar extends React.Component {

    state = {
        collapsed: false,
        selectedkey: ['1'],
    };

    onCollapse = collapsed => {
        if(collapsed){

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    homeOnClick = () => {
        history.push("/");
        this.setState({
            selectedkey: ["1"],
        })
    };

    enrollOnClick = () => {
        history.push("/enrollment");
        this.setState({
            selectedkey: ["2"],
        })
    };

    profileOnClick = () => {
        history.push("/profile");
        this.setState({
            selectedkey: ["3"],
        })
    };

    render() {
        return (
            <div style={{ width:this.state.collapsed? "80px":"180px", maxWidth:this.state.collapsed? "80px":"180px", minWidth:this.state.collapsed? "80px":"180px" }}>
            <div className="mySider">
            <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff'}}>
                <Menu defaultSelectedKeys={this.state.selectedkey} mode="inline">
                    <Menu.Item key="1" onClick={this.homeOnClick}>
                        <Icon type="read" style={{ fontSize: '18px'}}/>
                        <span style={{ fontSize: '16px'}}>首页</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={this.enrollOnClick}>
                        <Icon type="solution"  style={{ fontSize: '18px'}}/>
                        <span style={{ fontSize: '16px'}}>参赛报名</span>
                    </Menu.Item>
                    <Menu.Item key="3"  onClick={this.profileOnClick}>
                        <Icon type="user" style={{ fontSize: '18px'}}/>
                        <span style={{ fontSize: '16px'}}>个人信息</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            </div>
            </div>
        );
    }

}