import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/home.css'
import {withRouter} from "react-router-dom";
import {NewsCarousel} from "../components/NewsCarousel";
import {SearchBar} from "../components/SearchBar";
import {NewsList} from "../components/NewsList";

const { Header, Content, Footer } = Layout;

class HomeView extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '40px' }}>
                        <div className="home-content">
                            {/* <SearchBar /> */}

                            <NewsCarousel />
                            <NewsList />
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(HomeView);