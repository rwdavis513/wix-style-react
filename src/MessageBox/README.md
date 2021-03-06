# MessageBox component

> Message box Layouts

## MessageBoxMarketerialLayout Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | node | - | + | Title for Message Box |
| content | node | - | + | Content of the Message Box |
| primaryButtonLabel | string | - | + | Primary Button Label |
| primaryButtonDisabled | bool | false | + | Primary Button disabled state |
| primaryButtonTheme | node | - | - | Theme for primary button (blue or purple) |
| primaryButtonNode | node | - | - | Custom node for primary button |
| secondaryButtonLabel | string | - | - | Secondary Button Label |
| onPrimaryButtonClick | func | - | - | Primary Button Click callback |
| onSecondaryButtonClick | func | - | - | Secondary Button Click handler |
| imageUrl | string | - | - | Header image url |
| imageComponent | node | - | - | Custom image node |
| onClose | func | - | + | Close callback |
| theme | string | blue | - | theme of the message box (blue, purple or white) |
| footerBottomChildren | node | - | - | custom node for footer bottom content |
| removeButtonsPadding | bool | false | - | remove default padding for buttons when no buttons are provided |
| noBodyPadding | bool | false | - | Should the body of the layout will have surrounding padding |
| width | string | 600px | - | set custom message box width |

## MessageBoxFunctionalLayout Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| hideFooter | bool | - | - | Hide or show footer |
| footerBottomChildren | node | - | - | Content to appear at the footer (below the footer's buttons) |
| confirmText | string | - | - | Confirm button Label |
| confirmPrefixIcon | element | - | - | Element based icon (svg, image etc.) |
| confirmSuffixIcon | element | - | - | Element based icon (svg, image etc.) |
| cancelText | string | - | - | Cancel button Label |
| cancelPrefixIcon | element | - | - | Element based icon (svg, image etc.) |
| cancelSuffixIcon | element | - | - | Element based icon (svg, image etc.) |
| theme | string | - | - | theme of the message box (green, blue, red, purple) |
| onOk | func | - | - | Ok callback |
| onCancel | func | - | - | Cancel callback |
| onClose | func | onCancel | - | Close button callback, the default is onCancel callback |
| title | Node | - | - | title of the Message Box |
| children | array | - | - | Message box content |
| maxHeight | string or number | - | - | Message box content max height |
| buttonsHeight | string | small | - | The size of the button, can be small, medium or large |
| closeButton | bool | true | - | Should the x button appear or not |
| disableCancel | bool | false | - | Disable cancel button |
| disableConfirmation | bool| false | - | Disable confirmation button |
| width| string | '600px' | - | Set the message box width |
| noBodyPadding| bool | false | - | Should the body of the layout will have surrounding padding |
| withEmptyState | bool | false | - | Is the body contains an `<EmptyState/>` component |
| sideActions | Node | - | - | Content to appear on the other side of the actions buttons |
| image | Node | - | - | Content to appear along side the children (fixed width/height 126px/126px) |
