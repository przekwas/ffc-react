import React from 'react';
import './container.css';

class Info extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="ml-3 mt-4">Luke: 1987 / 3000</div>
                    <div className="ml-3 mt-4">Covalence: 9999 / 9999</div>
            </React.Fragment>
        )
    }
}

export default Info;