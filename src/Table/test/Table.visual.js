import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '..';
import Card from '../../Card';
import Checkbox from '../../Checkbox';
import ToggleSwitch from '../../ToggleSwitch';
import {
  ToolbarExample,
  ToolbarWithBulSelectionCheckboxExample,
  EmptyStateExample,
} from './testExamples';

const data = [
  {
    name: 'Apple Towels',
    SKU: '111222',
    price: '$2.00',
    inventory: 'In stock',
  },
  { name: 'Cyan Towels', SKU: '222333', price: '$2.00', inventory: 'In stock' },
  {
    name: 'Marble Slippers',
    SKU: '333444',
    price: '$14.00',
    inventory: 'In stock',
  },
  {
    name: 'Red Slippers',
    SKU: '444555',
    price: '$14.00',
    inventory: 'Out of stock',
  },
];

const columns = [
  {
    title: 'Name',
    render: row => <span>{row.name}</span>,
    width: '30%',
    minWidth: '150px',
    infoTooltipProps: { content: 'This is the name column' },
  },
  {
    title: 'SKU',
    render: row => <span>{row.SKU}</span>,
    width: '20%',
    minWidth: '100px',
  },
  {
    title: 'Price',
    render: row => <span>{row.price}</span>,
    width: '20%',
    minWidth: '100px',
  },
  {
    title: 'Inventory',
    render: row => <span>{row.inventory}</span>,
    width: '20%',
    minWidth: '100px',
  },
];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display the table with data',
        props: {
          data,
          columns,
        },
      },
      {
        it: 'Should display the table with "standard" skin',
        props: {
          data,
          columns,
        },
      },
      {
        it: 'Should display the table with "neutral" skin',
        props: {
          data,
          columns,
          skin: 'neutral',
        },
      },
      {
        it: 'Should display the table with aligned columns',
        props: {
          data: [
            {
              name: 'Apple Towels',
              visible: true,
              onSale: false,
              price: '$22.99',
            },
            {
              name: 'Cyan Towls',
              visible: false,
              onSale: false,
              price: '$145.99',
            },
            {
              name: 'Marble Slippers',
              visible: false,
              onSale: false,
              price: '$125,265.00',
            },
            {
              name: 'Red Slippers',
              visible: false,
              onSale: false,
              price: '$1,265.69',
            },
          ],
          columns: [
            {
              title: 'Name',
              render: row => <span>{row.name}</span>,
              width: '30%',
              minWidth: '150px',
            },
            {
              title: 'Visibility',
              render: row => (
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <ToggleSwitch checked={row.visible} />
                  <span style={{ marginLeft: 12 }}>
                    {row.visible ? 'Visible' : 'Hidden'}
                  </span>
                </span>
              ),
              width: '20%',
              minWidth: '100px',
              align: 'start',
            },
            {
              title: 'On Sale',
              render: () => <Checkbox />,
              width: '20%',
              minWidth: '100px',
              align: 'center',
              infoTooltipProps: {
                content: 'I am a Tooltip!',
              },
            },
            {
              title: 'Price',
              render: row => <span>{row.price}</span>,
              width: '20%',
              minWidth: '100px',
              align: 'end',
            },
          ],
        },
      },
      {
        it: 'Should display the table with selection',
        props: {
          data,
          columns,
          showSelection: true,
        },
      },
      {
        it: 'Should display the table with selection with unselectable row',
        props: {
          data: [
            ...data,
            {
              name: 'Unselectable Product',
              SKU: '123123',
              price: '$6.00',
              inventory: 'In stock',
              unselectable: true,
            },
          ],
          columns,
          showSelection: true,
        },
      },
      {
        it:
          'Should display the table with selection but without Select All column title',
        props: {
          data,
          columns,
          showSelection: true,
          hideBulkSelectionCheckbox: true,
        },
      },
      {
        it: 'Should display the table with disabled selection',
        props: {
          data,
          columns,
          showSelection: true,
          selectionDisabled: true,
        },
      },
      {
        it:
          'Should display the table with disabled selection but without Select All column title',
        props: {
          data,
          columns,
          showSelection: true,
          hideBulkSelectionCheckbox: true,
          selectionDisabled: true,
        },
      },
      {
        it: 'Should display the table without column titles',
        props: {
          data,
          columns,
          children: <Table.Content titleBarVisible={false} />,
        },
      },
    ],
  },
  {
    describe: 'Toolbar',
    its: [
      {
        it: 'Should display the table with toolbar',
        props: {
          data,
          columns,
          showSelection: true,
          children: [
            <Table.ToolbarContainer>
              {() => <ToolbarExample />}
            </Table.ToolbarContainer>,
            <Table.Content />,
          ],
        },
      },
      {
        it:
          'Should display the table with toolbar with bulk selection checkbox',
        props: {
          data,
          columns,
          showSelection: true,
          hideBulkSelectionCheckbox: true,
          children: [
            <Table.ToolbarContainer>
              {() => <ToolbarWithBulSelectionCheckboxExample />}
            </Table.ToolbarContainer>,
            <Table.Content />,
          ],
        },
      },
      {
        it: 'Should display the table with toolbar and without column titles',
        props: {
          data,
          columns,
          children: [
            <ToolbarExample key="toolbar" />,
            <Table.Content key="content" titleBarVisible={false} />,
          ],
        },
      },
    ],
  },
  {
    describe: 'EmptyState',
    its: [
      {
        it: 'Should display the table with EmptyState',
        props: {
          data,
          columns,
          showSelection: true,
          children: <EmptyStateExample />,
        },
      },
      {
        it: 'Should display the table with toolbar and EmptyState',
        props: {
          data,
          columns,
          showSelection: true,
          children: [
            <ToolbarExample key="toolbar" />,
            <EmptyStateExample key="emptystate" />,
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Table${describe ? '/' + describe : ''}`, module).add(it, () => (
      <div style={{ backgroundColor: '#DFE5EB', padding: '20px' }}>
        <Card>
          <Table {...props} />
        </Card>
      </div>
    ));
  });
});
