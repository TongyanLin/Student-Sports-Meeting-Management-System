import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


import {getBook} from "../services/bookService";
import {NewsDetail} from "../components/NewsDetail";

const { Header, Content, Footer } = Layout;

class NewsView extends React.Component{

    constructor(props) {
        super(props);

        this.state = {news:null};



    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});

        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getBook(bookId, (data) => {this.setState({bookInfo: data})})
    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <NewsDetail info={this.state.bookInfo} />

                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(NewsView);