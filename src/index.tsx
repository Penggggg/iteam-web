import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hashHistory, Router } from 'react-router';

import { rootRoute } from './route';

import './index.d';
import './index.less';


class App extends React.PureComponent<{ }, { }> {
    render( ) {
        return <Router history={ hashHistory } routes={ rootRoute } />
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#app')
)