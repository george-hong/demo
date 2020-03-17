import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './process.less';

class Process extends Component {
    static propTypes = {
        percent: PropTypes.number,
    };

    static defaultProps = {
        percent: 0,
    };

    render() {
        return (
            <div className="c_process">
                <span>test component</span>
            </div>
        )
    }
}

export default Process;