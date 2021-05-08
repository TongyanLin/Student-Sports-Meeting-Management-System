import React from 'react';
import {AutoComplete, List} from 'antd'
import {News} from './News'
import {getBooks} from "../services/bookService";


export class NewsList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {news:[]};
    }

    componentDidMount() {

        const callback =  (data) => {
           this.setState({news:data});
        };

        getBooks({"search":null}, callback);

    }

    render() {
        return (
            <List
                itemLayout={'vertical'}
                size={'large'}
                dataSource={this.state.news}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}

                renderItem={item => (
                    <List.Item>
                        <News info={item} />
                    </List.Item>
                )}
            />
        );
    }

}