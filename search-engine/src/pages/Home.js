import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar, } from '@material-ui/core';
function Home() {
    return (
        <div className="home">
            <div className="header_top">
                <div className="top_left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="top_right">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppsIcon/>
                <Avatar/>
                </div>
            </div>
            <div className="header_body">
                <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google"/>
            </div>
        </div>
    );
}

export default Home;
