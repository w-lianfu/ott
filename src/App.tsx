import React from 'react';
import {
  RouteComponentProps,
} from 'react-router-dom';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const App = (props: IProps, state: IState) => {
  return (
    <div>
      <h2>Chromium</h2>
    </div>
  );
};

export default App;
