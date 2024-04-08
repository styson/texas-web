import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import * as React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Outlet />
      </div>
    );
  }
}
