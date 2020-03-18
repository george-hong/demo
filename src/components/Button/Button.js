/**
 * @params {Number} value - button text
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.less';

class Button extends Component {
    static propTypes = {
        value: PropTypes.number,
    };

    static defaultProps = {
        value: 0,
    };

    render() {
        const { value } = this.props;

        return (
            <button className="c_button hundred_width_under_small_dev" data-value={value}>{`${value >= 0 ? '+' : ''}${value}`}</button>
        )
    }
}

export default Button;