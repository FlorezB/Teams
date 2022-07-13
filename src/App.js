import React from 'react'
import Teams from './teams.json'
import TeamInfo from './components/TeamInfo'
import './App.css';


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>TEAMS</h1>
        <article>
          {Teams.map(team => (
          <TeamInfo name={team.shortName} image={team.crestUrl} stadium={team.venue} adress={team.address} email={team.email} tel={team.phone} date={team.founded}/>

          ))}
        </article>
      </div>
    )
  }
}

export default App;
