import ReactTestUtils from 'react-dom/test-utils';
import { dataHooks } from './constants';

const sliderDriverFactory = ({ element }) => {
  const $sliderHandles = () =>
    element.querySelectorAll(`[data-hook="${dataHooks.sliderHandle}"]`);
  const $sliderDots = () => element.querySelectorAll('.rc-slider-dot');
  const $sliderMarks = () =>
    element.querySelectorAll(`[data-hook="${dataHooks.sliderMarkLabel}"]`);

  return {
    /** returns true if element in the DOM */
    exists: () => !!element,
    /** returns true if slider grade is selected */
    isDotSelected: number =>
      $sliderDots()
        .item(number - 1)
        .classList.contains('rc-slider-dot-active'),
    /** returns number of slider grades */
    numOfSliderDots: () => $sliderDots().length,
    /** returns number of slider handles */
    numOfSliderHandles: () => $sliderHandles().length,
    /** returns number of slider marks labels */
    numOfSliderMarksLabels: () => $sliderMarks().length,
    /** returns slider tooltip value */
    getToolTipValue: () => {
      const tooltip = element.querySelector(
        `[data-hook="${dataHooks.sliderTooltip}"]`,
      );
      return tooltip && tooltip.innerHTML;
    },
    /** hovers on slider handle */
    hoverHandle: ({ handleIndex }) => {
      const handle = $sliderHandles()[handleIndex];
      ReactTestUtils.Simulate.mouseEnter(handle);
    },
    /** mouse leaves slider handle */
    unHoverHandle: ({ handleIndex }) => {
      const handle = $sliderHandles()[handleIndex];
      ReactTestUtils.Simulate.mouseLeave(handle);
    },

    /** returns if the slider is disabled */
    isDisabled: () => {
      return !!element.querySelector('.rc-slider-disabled');
    },
  };
};

export default sliderDriverFactory;
