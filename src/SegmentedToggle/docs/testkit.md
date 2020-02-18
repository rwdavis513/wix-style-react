# SegmentedToggle Testkits

> SegmentedToggle

## SegmentedToggle TestKit API

| method        | arguments | returned value     | description                                             |
| ------------- | --------- | ------------------ | ------------------------------------------------------- |
| exists()      | -         | `Promise<boolean>` | returns true if element in the DOM                      |
| element()     | -         | `Promise<element>` | returns the component element                           |
| selectChild() | number    | `Promise<void>`    | selects child by given number (selection begins with 1) |

## ReactTestUtils Example

```javascript
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import { segmentedToggleTestkitFactory } from 'wix-style-react/dist/testkit';

const div = document.createElement('div');
const dataHook = 'myDataHook';

const component = (
  <div>
    <SegmentedToggle dataHook={dataHook} />
  </div>
);

const wrapper = div.appendChild(
  ReactTestUtils.renderIntoDocument(component, { dataHook })
);

const testkit = segmentedToggleTestkitFactory({ wrapper, dataHook });

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBe(true);
});
```

## Enzyme Example

```javascript
import React from 'react';
import { mount } from 'enzyme';
import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import { segmentedToggleTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

const dataHook = 'myDataHook';
const wrapper = mount(
  <div>
    <SegmentedToggle dataHook={dataHook} />
  </div>
);

const testkit = segmentedToggleTestkitFactory({ wrapper, dataHook });

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBe(true);
});
```

## Puppeteer Example

> Element should be rendered with a data-hook into the DOM `<SegmentedToggle dataHook="myDataHook" />`

```javascript
import puppeteer from 'puppeteer';
import { segmentedToggleTestkitFactory } from 'wix-style-react/dist/testkit/puppeteer';

//puppeteer setup
const browser = await puppeteer.launch();
const page = await browser.newPage();

//Create an element testkit via the data-hook attribute
const testkit = await segmentedToggleTestkitFactory({
  dataHook: 'myDataHook',
  page,
});
await page.goto('/page-where-segmentedtoggle-appears'); //Your application url

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBe(true);
});
```

## Protractor Example

> Element should be rendered with a data-hook into the DOM `<SegmentedToggle dataHook="myDataHook" />`

```javascript
import { segmentedToggleTestkitFactory } from 'wix-style-react/dist/testkit/protractor';

//Create an element testkit via the data-hook attribute
const testkit = segmentedToggleTestkitFactory({ dataHook: 'myDataHook' });

await browser.get('/page-where-segmentedtoggle-appears'); //Your application url

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBe(true);
});
```
