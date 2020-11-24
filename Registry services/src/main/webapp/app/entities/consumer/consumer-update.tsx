import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './consumer.reducer';
import { IConsumer } from 'app/shared/model/consumer.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IConsumerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ConsumerUpdate = (props: IConsumerUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { consumerEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/consumer');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...consumerEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="cuserviceApp.consumer.home.createOrEditLabel">Create or edit a Consumer</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : consumerEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="consumer-id">ID</Label>
                  <AvInput id="consumer-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="consumer-name">
                  Name
                </Label>
                <AvField id="consumer-name" type="text" name="name" />
              </AvGroup>
              <AvGroup check>
                <Label id="statusLabel">
                  <AvInput id="consumer-status" type="checkbox" className="form-check-input" name="status" />
                  Status
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="ratingLabel" for="consumer-rating">
                  Rating
                </Label>
                <AvField id="consumer-rating" type="string" className="form-control" name="rating" />
              </AvGroup>
              <AvGroup>
                <Label id="detailsLabel" for="consumer-details">
                  Details
                </Label>
                <AvField id="consumer-details" type="text" name="details" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/consumer" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  consumerEntity: storeState.consumer.entity,
  loading: storeState.consumer.loading,
  updating: storeState.consumer.updating,
  updateSuccess: storeState.consumer.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerUpdate);
