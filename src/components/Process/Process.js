/**
 * @params {Number} value - process value
 * @params {Number} warningValue - change process background-color when value reach warning value
 * @params {Number} isActive - is active bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './process.less';

class Process extends Component {
    static propTypes = {
        value: PropTypes.number,
        warningValue: PropTypes.number,
        isActive: PropTypes.bool,
    };

    static defaultProps = {
        value: 0,
        warningValue: 100,
        isActive: false,
    };

    static getDerivedStateFromProps(props, state) {
        const { value, warningValue } = props;
        const isReachWarningValue = value >= warningValue;
        const backgroundPercent = value > 100 ? 100 : value;
        return {
            ...state,
            isReachWarningValue,
            backgroundPercent,
        };
    }

    state = {
        isReachWarningValue: false,
    };

    render() {
        const { value, isActive } = this.props;
        const { isReachWarningValue, backgroundPercent } = this.state;

        return (
            <div className={`c_process before_width_${backgroundPercent} ${isReachWarningValue ? 'warning' : ''} ${isActive ? 'active' : ''}`}>
                <span>{value}%</span>
            </div>
        )
    }
}

export default Process;