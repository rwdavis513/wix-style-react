import Image from './Image';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Image);

metadata.exportedFrom({
  path: 'src/Image/Image.js',
});
