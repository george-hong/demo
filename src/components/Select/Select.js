/**
 * @params {Array} options - options of select, example: [{ key, value }]
 * @params {Function} onChange - callback after change select
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './select.less';

class Select extends Component {
    static propTypes = {
        options: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        options: [],
        onChange: null,
    };

    changeSelect = event => {
        const { onChange } = this.props;
        const { value } = event.target;
        onChange && onChange(value - 0);
    }

    render() {
        const { options } = this.props;

        return (
            <select
                className="c_select hundred_width_under_small_dev"
                onChange={this.changeSelect}
            >
                {
                    !!options && !!options.length && options.map(option => (
                        <option
                            value={option.key}
                            key={option.key}
                        >
                            {option.value}
                        </option>
                    ))
                }
            </select>
        )
    }
}

export default Select;