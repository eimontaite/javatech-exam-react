import React, { Component } from "react";
import './Homepage.css'

class Homepage extends Component {

    render() {
          let homePage = (
                <div className="homepage">
                    <h2>Sveiki atvykę!</h2>
                </div>
            );


        return (
            <div>
                {homePage}
            </div>
        );
    }
}

export default Homepage