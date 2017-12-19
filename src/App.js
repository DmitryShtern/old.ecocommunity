import React, { Component } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { Main } from './main'

import { Partners } from './partners'

const Screen = styled.div`
    width: 1440px;
    height: 900px;

    background-image: url("https://pp.userapi.com/c841323/v841323711/48cc7/N46MlAIBQEs.jpg");
    `;

class App extends Component {

  constructor() {
    super();

  componentWillMount() {
    // fetch(base_url + '/abc/' + type)
    //   .then(res => {
    //     console.log(res)
    //     if (res.status === 200) {
    //       return res.json()
    //     }
    //   })
    //   .then(abc => this.setState({ abc: abc }))
  }

  render() {
    return (
      <Screen>
        <Route
          path="/main"
          component={() => (
            <Main/>
          )}
        />
        <Route
          path="/partners"
          component={() => (
            <Partners/>
          )}
        />
      </Screen>
    )
  }
}

export default App