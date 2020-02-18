import React from 'react';
import { storiesOf } from '@storybook/react';

import Standard from '../docs/ExampleStatsWidgetStandard';
import WithPercents from '../docs/ExampleStatsWidgetWithPercents';
import WithInvertPercentColor from '../docs/ExampleStatsWidgetWithInvertPercentColor';
import WithFilters from '../docs/ExampleStatsWidgetWithFilters';
import EmptyState from '../docs/ExampleStatsWidgetEmptyState';
import WithFilterWithNoBorder from '../docs/ExampleStatsWidgetWithFilterWithNoBorder';

const stories = [
  ['Standard', Standard],
  ['WithPercents', WithPercents],
  ['WithInvertPercentColor', WithInvertPercentColor],
  ['WithFilters', WithFilters],
  ['EmptyState', EmptyState],
  ['WithFilterWithNoBorder', WithFilterWithNoBorder],
];

stories.map(([name, Component]) =>
  storiesOf('StatsWidget', module).add(name, () => <Component />),
);
