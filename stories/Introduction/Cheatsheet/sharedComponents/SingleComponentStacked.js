import React from 'react';
import { number, node, string, array, object, oneOfType } from 'prop-types';
import { Row, Col } from 'wix-style-react/Grid';

import ComponentNaming from './ComponentNaming';
import Preview from './Preview';

import singleComponentSizes from './constants';

const SingleComponentStacked = ({
  name,
  componentsNames,
  children,
  size = singleComponentSizes.fullWidth,
}) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <ComponentNaming name={name} componentsNames={componentsNames} />
        </Col>
      </Row>
      <Row>
        <Col span={size}>{children}</Col>
      </Row>
    </Col>
  </Row>
);

SingleComponentStacked.displayName = 'SingleComponentStacked';

SingleComponentStacked.defaultProps = {
  size: 12,
};

SingleComponentStacked.propTypes = {
  /** storybook name */
  name: oneOfType([string, object]),
  /** names of the used components */
  componentsNames: array,
  /** any node to render inside */
  children: node,
  /** size of the children column. Can be one of "singleComponentSizes" constant */
  size: number,
};

SingleComponentStacked.Preview = Preview;

export default SingleComponentStacked;
