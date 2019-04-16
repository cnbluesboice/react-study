import React from "react"

import {Link,Route, Redirect} from "react-router-dom"

export default class About extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        return (
            <div>
                <h1>这是侧边栏1</h1>
                <Link to="/About/desc">点击侧边栏1的详情</Link>
            </div>
        )
    }
}