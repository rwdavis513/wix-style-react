/* eslint-disable */
import React from 'react';
import Modal from 'wix-style-react/Modal';
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';

class MarketingExample extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <Box width="1254px">
            <CustomModal
              title="Title"
              removeContentPadding
              primaryButtonText="Save"
              primaryButtonOnClick={this.closeModal}
              secondaryButtonText="Cancel"
              secondaryButtonOnClick={this.closeModal}
              onCloseButtonClick={this.closeModal}
            >
              <Page upgrade height="40vh" sidePadding={30}>
                <Page.Content>
                  <Box marginTop={5}>
                    <Container>
                      <Row>
                        <Col>
                          <Card>
                            <Card.Header title="Card 2" />
                            <Card.Content>Lorem ipsum dolor</Card.Content>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card>
                            <Card.Header title="Card 2" />
                            <Card.Content>Lorem ipsum dolor</Card.Content>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Box>
                </Page.Content>
              </Page>
            </CustomModal>
          </Box>
        </Modal>
      </Box>
    );
  }
}

