import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import HomePage from 'components/Pages/Home';
import EscapableModalPage from 'components/Pages/EscapableModal';
import ArtistsPage from 'components/Pages/Artists';
import WorksPage from 'components/Pages/Works';

render(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/modals" component={EscapableModalPage} />
        <Route path="/artists/:artistId*" component={ArtistsPage} />
        <Route path="/works" component={WorksPage} />
      </Switch>
    </HashRouter>,
    document.getElementById('app'),
);
