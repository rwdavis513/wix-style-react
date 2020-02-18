import CounterBadge from './CounterBadge';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(CounterBadge);

metadata.exportedFrom({
  path: 'src/CounterBadge/CounterBadge.js',
});
