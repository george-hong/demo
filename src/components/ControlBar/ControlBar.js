/**
 * @params {Array} buttons - button list config, example: [{ key, value }]
 * @params {Function} onChangeProcess - callback after change process
 * @params {Number} barNumber - number of bars
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button/Button';
import Select from '@components/Select/Select';

class ControlBar extends Component {
    static propTypes = {
        buttons: PropTypes.array,
        onChangeProcess: PropTypes.func,
        barNumber: PropTypes.number,
    };

    static defaultProps = {
        buttons: [],
        onChangeProcess: null,
        barNumber: 0,
    };

    static getDerivedStateFromProps(props, state) {
        // format child component config
        const { buttons, barNumber } = props;
        let buttonsInfo = [];
        let options = [];
        if (buttons && buttons.length) {
            buttons.forEach((value, key) => {
                buttonsInfo.push({ value, key });
            });
        }
        if (barNumber > 0)  {
            for (let index = 0; index < barNumber; index += 1) {
                options.push({ value: `process #${index + 1}`, key: index });
            }
        }
        return {
            ...state,
            buttonsInfo,
            options,
        }
    }

    state = {
        selectedIndex: 0,
    };

    changeControlBarIndex = selectedIndex => {
        const { onChangeProcess } = this.props;
        this.setState({ selectedIndex });
        onChangeProcess && onChangeProcess(selectedIndex, 0);
    }

    onClickControlBar = event => {
        const { target, target: { tagName } } = event || { target: {} };
        if (tagName && tagName.toLowerCase() === 'button') {
            const buttonValue = target.getAttribute('data-value');
            const { selectedIndex } = this.state;
            const { onChangeProcess } = this.props;
            onChangeProcess && onChangeProcess(selectedIndex, buttonValue);
        }
    }

    render() {
        const { buttonsInfo, options } = this.state;
        if (!buttonsInfo || !buttonsInfo) return <p>empty buttons</p>
        return (
            <div className="c_control_bar" onClick={this.onClickControlBar}>
                <Select
                    options={options}
                    onChange={this.changeControlBarIndex}
                />
                {
                    buttonsInfo.map(buttonInfo => (
                        <Button
                            value={buttonInfo.value}
                            key={buttonInfo.key}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ControlBar;