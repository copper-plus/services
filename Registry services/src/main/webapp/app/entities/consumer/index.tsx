import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Consumer from './consumer';
import ConsumerDetail from './consumer-detail';
import ConsumerUpdate from './consumer-update';
import ConsumerDeleteDialog from './consumer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ConsumerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ConsumerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ConsumerDetail} />
      <ErrorBoundaryRoute path={match.url} component={Consumer} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ConsumerDeleteDialog} />
  </>
);

export default Routes;
