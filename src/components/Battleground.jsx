import React from 'react';
import './container.css';

class Battleground extends React.Component {

    render() {
        return (
            <React.Fragment>
                
                    <div className="row" id="battleground">
                        <div id="boss-div">
                            <img alt="" src={require("../images/test_boss.gif")} />
                        </div>
                        <div id="warrior-div">
                            <img alt="" src={require("../images/Warrior.gif")} />
                        </div>
                    </div>
                
            </React.Fragment>
        )
    }
}

export default Battleground;