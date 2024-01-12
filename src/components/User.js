import React, { Component } from "react";
import { USER_API_URL } from "../utils/constant";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount() {
        const data = await fetch(USER_API_URL);
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render() {
        const { userInfo } = this.state;
        return (
            <div className="user-card">
                <img className="avatar" src={userInfo?.avatar_url} />
                <h2>Name: {userInfo?.name}</h2>
                <h3>Location: {userInfo?.location}</h3>
                <h4>Contact: {userInfo?.login}</h4>
            </div>
        )
    }
}

export default User;