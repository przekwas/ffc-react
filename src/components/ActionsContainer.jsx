import React from 'react';
import './container.css';
import Actions from './Actions';

class ActionsContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Actions name="Fight" />
                <Actions name="Magic" />
                <Actions name="Code" />
                <Actions name="Items" />
            </React.Fragment>
        )
    }
}

export default ActionsContainer;