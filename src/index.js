import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './counter'
// import {Provider} from 'react-redux'


const store = createStore(reducer)

function render() {
    ReactDOM.render(<div><App store={store} /><hr /><Counter store={store} /> </div>,
        document.getElementById('root'));
}
store.subscribe(render)
render();

/* ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root')); */
serviceWorker.unregister();