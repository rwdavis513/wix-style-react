import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../src/utils/deprecationLog');

Enzyme.configure({ adapter: new Adapter() });

// Prevent `eyes.it` to initialize itself
process.env.EYES_API_KEY = '';
