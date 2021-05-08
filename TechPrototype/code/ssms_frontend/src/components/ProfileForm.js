import React from 'react'

class ProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: "thunderboy",
            email: "reins1409@sjtu.edu.cn",
            gender: "male",
        }
    }

    render(){
        return(
            <div>
            <h3>Name: thunderboy</h3>
            <h3>Email: reins1409@sjtu.edu.cn</h3>
            </div>
        )
    }
}

export default ProfileForm;