import React from 'react';
import AppTop from './appHeader/AppTop';
import AppMain from './appMain/AppMain';
import { getCurrentTime } from '../util/timeUtil';

class App extends React.Component {
  state = {
    timeInfo: getCurrentTime()
  }
  componentDidMount() {
    setInterval(() => this.setState({ timeInfo: getCurrentTime() }), 1000);
  }
  render() {
    return (
      <>
        <AppTop />
        <AppMain timeInfo={this.state.timeInfo} />
      </>

    )
  }
}
export default App;