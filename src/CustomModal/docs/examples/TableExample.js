/* eslint-disable */
import React from 'react';
import Checkbox from "../../../Checkbox";
import Box from "../../../Box";
import Table from "../../../Table";
import CustomModal from "../../../CustomModal";

class TableExample extends React.Component {
  render() {
    const data = [
      { firstName: 'Meghan', lastName: 'Bishop', status: 'Single' },
      { firstName: 'Sara', lastName: 'Porter', status: 'Married' },
      { firstName: 'Deborah', lastName: 'Rhodes', status: "It's complicated" },
      { firstName: 'Walter', lastName: 'Jenning', status: 'Married' },
      { firstName: 'Meghan', lastName: 'Bishop', status: 'Single' },
      { firstName: 'Sara', lastName: 'Porter', status: 'Married' },
      { firstName: 'Deborah', lastName: 'Rhodes', status: "It's complicated" },
      { firstName: 'Walter', lastName: 'Jenning', status: 'Married' },
    ];
    const columns=[
      { title: 'First', render: row => row.firstName },
      { title: 'Last', render: row => row.lastName },
      { title: 'Status', render: row => row.status },
    ];
    return (
      <Box maxHeight="400px">
        <CustomModal
          removeContentPadding
          primaryButtonText="Save"
          primaryButtonOnClick={this.closeModal}
          secondaryButtonText="Cancel"
          secondaryButtonOnClick={this.closeModal}
          onCloseButtonClick={this.closeModal}
          title="Create New Coupon"
          subtitle="Make customers come back to your store with coupons"
          sideActions={(<Checkbox>I agree to Wix terms of use</Checkbox>)}
        >
          <Table
            data={data}
            columns={columns}
            showSelection
          >

            <Table.Content />
            {!data.length && (
              <Table.EmptyState
                subtitle={
                  <Text>
                    {'There are no search results matching '}
                    <Text weight="normal">{`"${this.state.activeSearch}"`}</Text>
                  </Text>
                }
              />
            )}
          </Table>
        </CustomModal>
      </Box>
    )
  }
}

export default () => <TableExample />;

