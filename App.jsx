import React from 'react';

class App extends React.Component {
    headerProp;
    contentProp;

    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props",
            content: "Content from props"
        }
    }

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         header: "Header from state...",
    //         content: "Content from state..."
    //
    //         // data:
    //         //     [
    //         //         {
    //         //             "id": 1,
    //         //             "name": "Foo",
    //         //             "age": "20"
    //         //         },
    //         //
    //         //         {
    //         //             "id": 2,
    //         //             "name": "Bar",
    //         //             "age": "30"
    //         //         },
    //         //
    //         //         {
    //         //             "id": 3,
    //         //             "name": "Baz",
    //         //             "age": "40"
    //         //         },
    //         //
    //         //         {
    //         //             "id": 4,
    //         //             "name": "Baz",
    //         //             "age": "50"
    //         //         }
    //         //     ]
    //     }
    // }

   render() {
       return (
           <div>
               <h1> Hello, {this.props.name} </h1>
               <h3>Array: {this.props.propArray}</h3>
               <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
               <h3>Func: {this.props.propFunc(3)}</h3>
               <h3>Number: {this.props.propNumber}</h3>
               <h3>String: {this.props.propString}</h3>

               {/*<Header headerProp = {this.state.header}/>*/}
               {/*<Content contentProp = {this.state.content}/>*/}

               {/*/!*<h1>{this.state.header}</h1>*!/*/}
               {/*/!*<h2>{this.state.content}</h2>*!/*/}

               {/*/!*<h1>{this.props.headerProp}</h1>*!/*/}
               {/*/!*<h2>{this.props.contentProp}</h2>*!/*/}

               {/*/!*<Header />*!/*/}

               {/*/!*<table>*!/*/}
                    {/*/!*<tbody>*!/*/}
                    {/*/!*{*!/*/}
                        {/*/!*this.state.data.map(*!/*/}
                            {/*/!*(person, i) => <TableRow key = {i}*!/*/}
                                                     {/*/!*data = {person} />)*!/*/}
                    {/*/!*}*!/*/}
                    {/*/!*</tbody>*!/*/}
               {/*/!*</table>*!/*/}

               {/*/!*<Content />*!/*/}
           </div>
       );
   }
}

App.propTypes = {
    name: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
};

App.defaultProps = {
    name: 'Tutorialspoint.com',
    // propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function(e) {
        return e
    },
    propNumber: 1,
    propString: "String value..."
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.headerProp}</h1>
//             </div>
//         );
//     }
// }
//
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.contentProp}</h2>
//             </div>
//         );
//     }
// }
//
// // App.defaultProps = {
// //  headerProp: "Header from props...",
// //  contentProp: "Content from props..."
// // }
// //
// // class Header extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1 data-title>Title string</h1>
// //                 <h2>Content</h2>
// //                 <p>This is the content!!!</p>
// //             </div>
// //         );
// //     }
// // }
// //
// // class TableRow extends React.Component {
// //     render() {
// //         return (
// //             <tr>
// //                 <td>{this.props.data.id}</td>
// //                 <td>{this.props.data.name}</td>
// //                 <td>{this.props.data.age}</td>
// //             </tr>
// //         );
// //     }
// // }
// //
// // class Content extends React.Component {
// //     render() {
// //         let i = 1;
// //
// //         let myStyle = {
// //             fontSize: 75,
// //             color: '#530bab'
// //         }
// //         return (
// //             <div>
// //                 Text label in main Div
// //                 a = 1 and b = 3
// //                 a + b = {1 + 3}
// //
// //                 <h1 style = {myStyle} > {i === 1 ? 'True!' : 'False..'}</h1>
// //
// //                 {/*Comment*/}
// //             </div>
// //         );
// //     }
// // }

export default App;