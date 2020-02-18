import StatisticsWidget from './StatisticsWidget';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(StatisticsWidget);

metadata.exportedFrom({
  path: 'src/StatisticsWidget/StatisticsWidget.js',
});
