import React, { useState } from 'react';
import AppTop from './appHeader/AppTop';
import AppMain from './appMain/AppMain';
import styles from './App.module.css';
import AppFooter from './appFooter/AppFooter';
import { useSelector, useDispatch } from 'react-redux';
import { lessPage, morePage } from '../modules/pageEvent';
const App = (props) => {
  const { btnState, btnText } = useSelector(state => ({
    btnState: state.pageReducer.btnState,
    btnText: state.pageReducer.btnText
  }));

  const onHandlePage = () => {
    btnState ? onLessPage() : onMorePage();
  }

  const dispatch = useDispatch();
  const onMorePage = () => dispatch(morePage());
  const onLessPage = () => dispatch(lessPage());

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <AppTop btnState={btnState} />
        <AppMain onHandlePage={onHandlePage} btnState={btnState} btnText={btnText} />
      </div>
      <AppFooter btnState={btnState} />
    </div>

  )

}
export default App;