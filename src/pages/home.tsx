import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import * as React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-700 text-black dark:text-slate-300">
        <Navigation />
        <div className="mx-6 my-4 flex flex-grow">
          <Outlet />
        </div> 
      </div>
    );
  }
}
