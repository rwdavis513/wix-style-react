import {
  tab,
  api,
  title,
  code as baseCode,
  importExample,
  playground,
  testkit,
  description,
  columns,
} from 'wix-storybook-utils/Sections';

import RichTextInputArea from '..';
import { storySettings } from './storySettings';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import testkitReadme from './README.TESTKIT.md';

import SetValueExample from '!raw-loader!./examples/SetValue';
import RichTextElements from '!raw-loader!./examples/RichTextElements';
import InitialValueExamle from '!raw-loader!./examples/InitialValue';
import ErrorExample from '!raw-loader!./examples/Error';
import DisabledExample from '!raw-loader!./examples/Disabled';
import PlaceholderExample from '!raw-loader!./examples/Placeholder';

const liveCode = config =>
  baseCode({
    components: baseScope,
    compact: true,
    ...config,
  });

const example = ({ source, autoRender = true, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source, autoRender })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: RichTextInputArea,
  componentPath: '..',

  componentProps: () => ({
    dataHook: storySettings.dataHook,
    initialValue: '',
    placeholder: 'Default text goes here',
    onChange: value => value,
  }),

  exampleProps: {
    onChange: value => value,
  },

  sections: [
    tab({
      title: 'Usage',
      sections: [
        importExample({
          source:
            "import RichTextInputArea from 'wix-style-react/RichTextInputArea';",
        }),

        title('Examples'),

        ...[
          {
            title: 'Basic',
            description: 'Using rich text elements',
            source: RichTextElements,
          },
          {
            title: 'Initial value',
            description: 'Can be initialized with a given value',
            source: InitialValueExamle,
          },
          {
            title: 'Set value / Rest value',
            description:
              'Value can be externally set at any time, mostly will be used for reset purposes',
            source: SetValueExample,
            autoRender: false,
          },
          { title: 'Error', source: ErrorExample },
          { title: 'Disabled', source: DisabledExample },
          { title: 'Placeholder', source: PlaceholderExample },
        ].map(example),
      ],
    }),

    ...[
      {
        title: 'API',
        sections: [api()],
      },

      {
        title: 'TestKit',
        sections: [testkit(), description(testkitReadme)],
      },

      {
        title: 'Playground',
        sections: [playground()],
      },
    ].map(tab),
  ],
};
