import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Main } from './main'
import { Partners } from './partners'

const Screen = styled.div`
    width: 1440;
    height: 900;
`;

class App extends Component {

  constructor() {
    super();

    // this.state = {
    //   image:null,
    //   type: null,
    //   products: [],
    //   selling:[],
    //   abc:[],
    //   count_abc: [],
    //   isOpenTableProduct: true,
    //   isOpenTableCheck: false,
    //   isOpenGraph: false,
    //   isOpenTableABC: false,
    // }
  }

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
      <div>
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
      </div>
    )
  }
}

export default App
