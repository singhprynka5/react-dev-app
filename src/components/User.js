import React, { Component } from "react";
import { USER_API_URL } from "../utils/constant";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
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
        return userInfo !== null ? (
            <div className="m-4 p-4 bg-gray-50 rounded-lg">
                <img className="w-[100px]" src={userInfo?.avatar_url} />
                <h2 className="mt-5 font-medium">Name: {userInfo?.name}</h2>
                <h3 className="font-medium">Location: {userInfo?.location}</h3>
                <h4 className="font-medium">Contact: {userInfo?.login}</h4>
            </div>
        ) : null
    }
}

export default User;