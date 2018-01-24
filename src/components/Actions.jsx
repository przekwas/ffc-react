import React from 'react';
import './container.css';

class Actions extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="mt-4 ml-3">Fight</div>
                    <div className="ml-3">Magic</div>
                    <div className="ml-3">Code</div>
                    <div className="ml-3">Items</div>
            </React.Fragment>
        )
    }
}

export default Actions;