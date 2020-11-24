import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './consumer.reducer';
import { IConsumer } from 'app/shared/model/consumer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IConsumerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ConsumerDetail = (props: IConsumerDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { consumerEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Consumer [<b>{consumerEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{consumerEntity.name}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{consumerEntity.status ? 'true' : 'false'}</dd>
          <dt>
            <span id="rating">Rating</span>
          </dt>
          <dd>{consumerEntity.rating}</dd>
          <dt>
            <span id="details">Details</span>
          </dt>
          <dd>{consumerEntity.details}</dd>
        </dl>
        <Button tag={Link} to="/consumer" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/consumer/${consumerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ consumer }: IRootState) => ({
  consumerEntity: consumer.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerDetail);
