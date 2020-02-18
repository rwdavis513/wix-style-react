import * as React from 'react';
import Tooltip, { TooltipOldProps, TooltipNewProps } from '../../src/Tooltip';
import { tooltipTestkitFactory, TooltipTestkit } from '../../testkit';
import {
  tooltipTestkitFactory as tooltipEnzymeTestkitFactory,
  TooltipTestkit as EnzymeTooltipTestkit,
} from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = tooltipTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  const alignment: string = vanilla.getAlignment();

  const enzyme = tooltipEnzymeTestkitFactory({
    dataHook: 'hi',
    wrapper: mount(<div />),
  });

  const maxWidth: string = enzyme.getMaxWidth();

  const vanillaUni = TooltipTestkit({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanillaUni.getTooltipText().then(text => text.toLocaleUpperCase());

  const enzymeUni = EnzymeTooltipTestkit({
    dataHook: 'bala',
    wrapper: mount(<div />),
  });

  enzymeUni.tooltipExists().then(exists => exists.valueOf());
}

function TooltipOldInstanceMethods() {
  const wrapper = mount<Tooltip<TooltipOldProps>>(<Tooltip upgrade content="Content"/>);
  const tooltip = wrapper.instance();
  tooltip.hide();
  tooltip.show();
}

function TooltipNewInstanceMethods() {
  const wrapper = mount<Tooltip<TooltipNewProps>>(<Tooltip upgrade content="Content"/>);
  const tooltip = wrapper.instance();
  tooltip.open();
  tooltip.close();
}

function TooltipNewContentWithMandatoryProps() {
  return <Tooltip upgrade content="Some contenttttttt" />;
}

function TooltipOldContentWithMandatoryProps() {
  return <Tooltip content="Some contenttttttt" />;
}

function TooltipNewContentWithAllProps() {
  return (
    <Tooltip
      upgrade
      disabled={false}
      dataHook="some-data-hook"
      size="small"
      appendTo="scrollParent"
      content="hiiiiiiiii"
      maxWidth={900}
      moveBy={{ x: 999, y: 1234 }}
      onHide={() => {}}
      onShow={() => {}}
      placement="bottom-start"
      textAlign="start"
      zIndex={1999}
    />
  );
}

function TooltipOldContentWithAllProps() {
  return (
    <Tooltip
      content={<div />}
      textAlign="center"
      placement="left"
      alignment="left"
      theme="dark"
      showDelay={123}
      hideDelay={321}
      showTrigger="click"
      hideTrigger="click"
      active
      bounce
      disabled
      popover
      maxWidth={333}
      minWidth={444}
      onClickOutside={(e: TouchEvent | MouseEvent) => undefined}
      color="#acacac"
      lineHeight={123}
      onShow={() => {}}
      onHide={() => {}}
      zIndex={999}
      appendToParent
      appendByPredicate={(el: HTMLElement) => false}
      appendTo={document.createElement('div')}
      moveBy={{ x: 3 }}
      moveArrowTo={3}
      size="normal"
      shouldCloseOnClickOutside
      relative
      padding="0 0 0 0"
      shouldUpdatePosition
      showImmediately
      showArrow
    />
  );
}
