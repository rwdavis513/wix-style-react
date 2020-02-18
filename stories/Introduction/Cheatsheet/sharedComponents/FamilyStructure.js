import React from 'react';

import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import Heading from 'wix-style-react/Heading';

const FamilyStructure = ({ title, children, showPreview }) => (
  <Card>
    <Card.Header title={title} />
    <Card.Content>
      <Container fluid>
        <Row>
          <Col span={4}>
            <Heading appearance="H5" light>
              INDEX NAME & I.C.
            </Heading>
          </Col>
          <Col span={8}>
            {showPreview && (
              <Heading appearance="H5" light>
                PREVIEW
              </Heading>
            )}
          </Col>
        </Row>
        {children}
      </Container>
    </Card.Content>
  </Card>
);

export default FamilyStructure;
