import React, { Component } from 'react';
import { fFetchUser, fFetchRepos } from './fetchs/fetchFunctions';

export default class App extends Component {

  fDoFetchUser = async (userToSearch) => {
    const data = await fFetchUser(userToSearch);
  };

  fDoFetchRepos = async (userToSearch) => {
    const data = await fFetchRepos(userToSearch);
  };

  render() {
  return (
    <div className="App">
      <h1>inicial project</h1>
    </div>
  );
  }
}
