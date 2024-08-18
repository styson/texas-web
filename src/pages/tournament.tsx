import React from 'react';
import { TournamentCountdown } from '../components/TournamentCountdown';

export class Tournament extends React.Component {
  render() {
    return (
      <div className="w-full">
        <div className="grid grid-flow-col justify-between">
          <div>
            <h2>31st Annual Texas Team Tournament</h2>
            <h3 className="text-lime-500">Full Steam Ahead!!</h3>
            <h4>June 19-22, 2025, Austin, Texas</h4>
          </div>
          <div>
            <TournamentCountdown />
          </div>
        </div>
      </div>
    );
  }
}
