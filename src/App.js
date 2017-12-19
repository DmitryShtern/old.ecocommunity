import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Main } from './main'
import { Login } from './login'

class App extends Component {

  constructor() {
    super()

    this.state = {
      image:null,
      type: null,
      products: [],
      selling:[],
      abc:[],
      count_abc: [],
      isOpenTableProduct: true,
      isOpenTableCheck: false,
      isOpenGraph: false,
      isOpenTableABC: false,
    }
  }

  componentWillMount() {
    let type = "dima"
    let base_url = "http://172.20.10.3:8000"

    if (type === "dima")
      this.setImage("https://lh4.googleusercontent.com/z3N0gwMXTYCtX5iEYH7TTijbylSDNCmUfmn70FhwUwOTugrOIM4PpUjVHpNSTJAlZSr7RCuMLJBdhEenOacR=w1440-h782")
    else
      this.setImage("https://lh3.googleusercontent.com/mr1TV8e6Wb1wKVxYJoGicALHv0Z5dbrPjp23WMh6JFuCqt87gJai5CbBlWT9LyhXk4wf95f3qidG7GrnMOmD=w1440-h782")

    fetch(base_url + '/abc/' + type)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(abc => this.setState({ abc: abc }))

    fetch(base_url + '/items/' + type)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(products => this.setState({ products: products }))

    fetch(base_url + '/selling/' + type)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(selling => this.setState({ selling: selling }))

    fetch(base_url + '/count_abc/' + type)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(count_abc => this.setState({ count_abc: count_abc }))
  }

  openTableProduct = () => this.setState({isOpenTableProduct: true})
  closeTableProduct = () => this.setState({isOpenTableProduct: false})

  openTableCheck = () => this.setState({isOpenTableCheck: true})
  closeTableCheck = () => this.setState({isOpenTableCheck: false})

  openGraph = () => this.setState({isOpenGraph: true})
  closeGraph = () => this.setState({isOpenGraph: false})

  openTableABC = () => this.setState({isOpenTableABC: true})
  closeTableABC = () => this.setState({isOpenTableABC: false})

  setType = type => this.setState({setType: type})

  setImage = url => this.setState({image: url})

  render() {
    return (
      <div>
        <Route
          path="/main"
          component={() => (
            <Main
              image={this.state.image}
              abc={this.state.abc}
              count_abc={this.state.count_abc}
              products={this.state.products}
              selling={this.state.selling}
              isOpenTableProduct={this.state.isOpenTableProduct}
              isOpenTableCheck={this.state.isOpenTableCheck}
              isOpenTableABC={this.state.isOpenTableABC}
              isOpenGraph={this.state.isOpenGraph}
              openTableProduct={this.openTableProduct}
              openTableCheck={this.openTableCheck}
              openGraph={this.openGraph}
              openTableABC={this.openTableABC}
              closeTableProduct={this.closeTableProduct}
              closeTableCheck={this.closeTableCheck}
              closeGraph={this.closeGraph}
              closeTableABC={this.closeTableABC}
            />
          )}
        />
        <Route
          path="/login"
          component={() => (
            <Login
              type={this.state.type}
              setType={this.setType}
            />
          )}
        />
      </div>
    )
  }
}

export default App
