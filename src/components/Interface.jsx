import React from 'react';
import './container.css';
import ActionsContainer from './ActionsContainer';
import Info from './Info';

class Interface extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="row" id="interface-underlay">
                    <div className="row col-sm-12">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2 mr-5 ml-1 ffui" id="actions-div">
                            <ActionsContainer />
                        </div>
                        <div className="col-sm-7 mr-1 ml-5 ffui" id="info-div">
                            <Info />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Interface;