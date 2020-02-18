import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface LabelledElementDriver extends BaseUniDriver {
    getLabelText(): Promise<string>;
    getLabelForAttribute(): Promise<string>;
    isLabelAtTop(): Promise<boolean>;
    getChildrenDriver(): BaseUniDriver;
}