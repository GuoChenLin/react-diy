import React from 'react';
import ReactDom from 'react-dom';
// import { AppContainer } from 'react-hot-loader'
import { hot } from 'react-hot-loader'
import "./scss/index.scss"
import AllRouter from './router'

import {
    Provider
} from 'react-redux'
import store from './store'

/* 16.6之前的使用 */
// class App extends React.Component {
//     render() {
//         return <AppContainer>
//             <AllRouter></AllRouter>
//         </AppContainer>
//     }
// }
 


// if(module.hot) {
//     module.hot.accept("./router", () => {
//         ReactDom.render(
//             <App />,
//             document.getElementById('app')
//         );
//     })
// }


/* 16.6之后的使用 */
class App extends React.Component {
    render () {
        return <Provider store={store}>
            <AllRouter></AllRouter>
        </Provider>
    }
}

hot(module)(App)

ReactDom.render(
    <App />,
    document.getElementById('app')
);