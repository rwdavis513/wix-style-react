import React from 'react';
import { FamilyStructure } from '../../sharedComponents';
import PageExamples from './examples/PageExamples';
import CardExamples from './examples/CardExamples';
import TableExamples from './examples/TableExamples';

import { symbolsGroup } from '../../../../symbolsComponentsMapping/symbols';

const LayoutFamily = () => (
  <FamilyStructure title={symbolsGroup.layout}>
    <PageExamples />
    <CardExamples />
    <TableExamples />
  </FamilyStructure>
);

export default LayoutFamily;
