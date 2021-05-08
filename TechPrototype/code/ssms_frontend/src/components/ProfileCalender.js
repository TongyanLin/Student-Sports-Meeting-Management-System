import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/calender.css'
import { Calendar, Badge } from 'antd';

class ProfileCalender extends React.Component {
    render(){
        
        function getListData(value) {
            let listData;
            switch (value.date()) {
            case 8:
                listData = [
                { type: 'warning', content: '男子100m初赛' },
                { type: 'warning', content: '男子200m初赛' },
                { type: 'warning', content: '男子铅球' },
                ];
                break;
            case 9:
                listData = [
                { type: 'warning', content: '男子100m决赛' },
                { type: 'warning', content: '男子200m决赛' },
                { type: 'warning', content: '男子跳远' },
                ];
                break;
            default:
            }
            return listData || [];
        }
        
        function dateCellRender(value) {
            const listData = getListData(value);
            return (
            <ul className="events">
                {listData.map(item => (
                <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                </li>
                ))}
            </ul>
            );
        }
        
        function getMonthData(value) {
            if (value.month() === 8) {
            return 1394;
            }
        }
        
        function monthCellRender(value) {
            const num = getMonthData(value);
            return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
            ) : null;
        }
        
        return(
            <>
            <h2>比赛安排</h2>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
            </>
        )
    }
}

export default ProfileCalender;