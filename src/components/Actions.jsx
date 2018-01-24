import React from 'react';
import './container.css';

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        }
    }

    handleHover(event) {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        const actionClass = this.state.isHovered ? "action-animate" : " m-2";
        return (
            <div className={actionClass + " m-2"}
                onMouseEnter={(event) => this.handleHover(event)}
                onMouseLeave={(event) => this.handleHover(event)}>
                {this.props.name}</div>
        )
    }

}

export default Actions;