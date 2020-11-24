import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './consumer.reducer';
import { IConsumer } from 'app/shared/model/consumer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IConsumerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Consumer = (props: IConsumerProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { consumerList, match, loading } = props;
  return (
    <div>
      <h2 id="consumer-heading">
        Consumers
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Consumer
        </Link>
      </h2>
      <div className="table-responsive">
        {consumerList && consumerList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Rating</th>
                <th>Details</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {consumerList.map((consumer, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${consumer.id}`} color="link" size="sm">
                      {consumer.id}
                    </Button>
                  </td>
                  <td>{consumer.name}</td>
                  <td>{consumer.status ? 'true' : 'false'}</td>
                  <td>{consumer.rating}</td>
                  <td>{consumer.details}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${consumer.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${consumer.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${consumer.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Consumers found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ consumer }: IRootState) => ({
  consumerList: consumer.entities,
  loading: consumer.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Consumer);
