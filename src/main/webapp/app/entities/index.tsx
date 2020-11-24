import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Supplier from './supplier';
import Consumer from './consumer';
import Delivery from './delivery';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}supplier`} component={Supplier} />
      <ErrorBoundaryRoute path={`${match.url}consumer`} component={Consumer} />
      <ErrorBoundaryRoute path={`${match.url}delivery`} component={Delivery} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
