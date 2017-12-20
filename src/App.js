import React, {Component} from 'react'
import styled from 'styled-components'
import {Route} from 'react-router-dom'
import {Main} from './main'
import {Gallery} from './gallery'
import {Partners} from './partners'
import {About} from "./about";

const Screen = styled.div`
    width: 1440px;
    height: 900px;
`;

class App extends Component {

    constructor() {
        super();

        this.state = {
            selected_category: 1,

            posts: [],
            albums: [],
            partners: [],

            map_image: "http://localhost:8000/img/map.jpg"
        }
    }

    componentWillMount() {
        fetch("/getFeed")
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(posts => this.setState({posts: posts}));

        fetch("/getPartners")
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(partners => this.setState({partners: partners}));

        fetch("/getGallery")
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(albums => this.setState({albums: albums}))
    }

    selectCategory = (category_id) => this.setState({selected_category: category_id});

    render() {
        return (
            <Screen>
                <Route
                    path="/feed"
                    component={() => (
                        <Main
                            selected_category={this.state.selected_category}
                            selectCategory={this.selectCategory}
                            posts={this.state.posts}
                        />
                    )}
                />

                <Route
                    path="/gallery"
                    component={() => (
                        <Gallery
                            albums={this.state.albums}
                        />
                    )}
                />

                <Route
                    path="/partners"
                    component={() => (
                        <Partners
                            partners={this.state.partners}
                        />
                    )}
                />

                <Route
                    path="/about"
                    component={() => (
                        <About map={this.state.map_image}/>
                    )}
                />
            </Screen>
        )
    }
}

export default App