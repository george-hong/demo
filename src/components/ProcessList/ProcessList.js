/**
 * @params {Array} barsConfig - bar config array, example: [{ key, value, [maxValue], [minValue], [warningValue] }]
 * @params {Number} processIndex - active process index
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Process from '@components/Process/Process';

class ProcessList extends Component {
    static propTypes = {
        processIndex: PropTypes.number,
        barsConfig: PropTypes.array,
    };

    static defaultProps = {
        processIndex: 0,
        barsConfig: [],
    };

    render() {
        const { barsConfig, processIndex } = this.props;

        if (!barsConfig || !barsConfig.length) return <p>empty process</p>
        return (
            <React.Fragment>
                {
                    barsConfig.map((bar, index) => {
                        // format process component params
                        const barInfo = Object.assign({}, bar);
                        barInfo.isActive = processIndex === index;

                        return <Process {...barInfo} />
                    })
                }
            </React.Fragment>
        )
    }
}

export default ProcessList;