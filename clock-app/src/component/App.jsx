import React from 'react';
import AppTop from './appHeader/AppTop';
import AppMain from './appMain/AppMain';
import { getCurrentTime } from '../util/timeUtil';
import styles from './App.module.css';
import AppFooter from './appFooter/AppFooter';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.a = 'jeonghoo';
  }
  state = {
    timeInfo: getCurrentTime(),
    text: 'jeonghoo'
  }
  /*최초 한번 실행*/
  componentDidMount() {
    this.startTime();
  }
  /*그다음은 무조건 이친구*/
  componentDidUpdate() {
    console.log('test');
  }
  componentWillUnmount() {
    clearInterval(this.startTime());
  }
  startTime() {
    setInterval(() => this.setState({ timeInfo: getCurrentTime() }), 1000);
  }
  handleClick(event) {
    if (this.state.text === 'jeonghoo') {
      this.setState({ text: 'bean' });
    }
    else {
      this.setState({ text: 'jeonghoo' });
    }
  }
  render() {
    return (
      <>
        <div className={styles.background}>
          <AppTop />
          <AppMain timeInfo={this.state.timeInfo} />
          <button type="button" onClick={this.handleClick}>test button</button>
          <span>{this.state.text}</span>
        </div>
        <AppFooter />
      </>

    )
  }
}
export default App;