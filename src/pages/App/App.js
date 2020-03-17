import React, { Component } from 'react';
import Process from '../../components/Process/Process';

class App extends Component {
    render () {
        return (
            <div>
                <div>test dom</div>
                <Process value={123} />
            </div>
        )
    }
}

export default App;