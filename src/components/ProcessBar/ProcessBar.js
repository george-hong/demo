import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlBar from '@components/ControlBar/ControlBar';
import ProcessList from '@components/ProcessList/ProcessList';

import './processBar.less';

class ProcessBar extends Component {
    static propTypes = {
        config: PropTypes.object,
        updateProcessValue: PropTypes.func,
    };

    static defaultProps = {
        config: {},
        updateProcessValue: null,
    };

    static getDerivedStateFromProps(props, state) {
        const { config } = props;
        const { bars, limit = 0, } = config;
        let barsConfig = [];
        if (bars && bars.length) {
            barsConfig = bars.map((barValue, index) => ({
                value: barValue,
                key: index,
                maxValue: limit,
                minValue: 0,
                tipValue: 100,
            }));
        }
        return {
            ...state,
            barsConfig,
        }
    }

    state = {
        processIndex: 0,
        barsConfig: [],
    };


    onChangeProcess = (processIndex, value) => {
        const { barsConfig } = this.state;
        const { updateProcessValue } = this.props;
        // update process info
        const newValue = this.getProcessNewValue(barsConfig[processIndex], value - 0);
        this.setState({ processIndex });
        updateProcessValue(processIndex, newValue)
    }

    getProcessNewValue = (barInfo, value) => {
        const { value: oldValue, minValue, maxValue } = barInfo;
        let newValue = oldValue + value;
        newValue = newValue < minValue ? minValue : newValue;
        newValue = newValue > maxValue ? maxValue : newValue;
        return newValue;
    }

    render() {
        const { config } = this.props;
        const { buttons } = config;
        const { processIndex, barsConfig } = this.state;

        return (
            <div className="c_process_bar">
                <ProcessList
                    processIndex={processIndex}
                    barsConfig={barsConfig}
                />
                <ControlBar
                    buttons={buttons}
                    onChangeProcess={this.onChangeProcess}
                    barNumber={barsConfig.length}
                />
            </div>
        )
    }
}

export default ProcessBar;