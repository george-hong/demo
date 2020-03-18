import React, { Component } from 'react';
import ProcessBar from '@components/ProcessBar/ProcessBar';
import { requestBarApi } from '@request';

// import '../../common/style/reset.css';
import '../../common/style/common.less';

class App extends Component {
    state = {
      config: {}
    };

    constructor(props) {
        super(props);
        this.requestAndSetBarData();
    }

    requestAndSetBarData = () => {
        requestBarApi()
            .then(result => {
                console.log(result)
                this.setState({ config: result });
            })
            .catch(err => {
                console.log(err)
            });
    }

    updateProcessValue = (processIndex, value) => {
        const { config } = this.state;
        const { bars } = config;
        bars[processIndex] = value;
        this.setState({ bars });
    }

    render () {
        const { config } = this.state;
        return (
            <div>
                <ProcessBar
                    config={config}
                    updateProcessValue={this.updateProcessValue}
                />
            </div>
        )
    }
}

export default App;