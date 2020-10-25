import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/setting">Setting</Link>
    </div>
  );
};

export default Home;
