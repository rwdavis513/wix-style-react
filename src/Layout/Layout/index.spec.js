/* global expect describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Layout from '.';

describe('Layout', () => {
  describe('`gap` prop', () => {
    it('should set `gridGap` style', () => {
      const layout = shallow(<Layout gap="30px 20px" />);
      expect(layout.prop('style').gridGap).toEqual('30px 20px');
    });
  });

  describe('`cols` prop', () => {
    it('should set `gridTemplateColumns` style', () => {
      const layout = shallow(<Layout cols={5} />);
      expect(layout.prop('style').gridTemplateColumns).toEqual(
        'repeat(5, minmax(0, 1fr))',
      );
    });

    it('should not set `gridTemplateColumns` inline style by default', () => {
      const layout = shallow(<Layout />);
      expect(layout.prop('style').gridTemplateColumns).toBeUndefined();
    });
  });

  describe('`justifyItems` prop', () => {
    it('should set `justifyItems` style', () => {
      const layout = shallow(<Layout justifyItems="start" />);
      expect(layout.prop('style').justifyItems).toEqual('start');
    });
  });

  describe('`alignItems` prop', () => {
    it('should set `justifyItems` style', () => {
      const layout = shallow(<Layout alignItems="start" />);
      expect(layout.prop('style').alignItems).toEqual('start');
    });
  });
});
