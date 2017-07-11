import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import AppStore from './store/';

import EscapableModalPage from 'components/Pages/EscapableModal';

import HomePage from 'components/Pages/Home';
import StudentsPage from 'components/Pages/Students';
import ClassroomsPage from 'components/Pages/Classrooms';

render(
    <Provider store={AppStore}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/modals" component={EscapableModalPage} />
            <Route path="/students/:studentId*" component={StudentsPage} />
            <Route path="/classrooms" component={ClassroomsPage} />
          </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app'),
);
