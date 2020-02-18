import StatusIndicator from './StatusIndicator';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(StatusIndicator);

metadata.exportedFrom({
  path: 'src/StatusIndicator/StatusIndicator.js',
});
