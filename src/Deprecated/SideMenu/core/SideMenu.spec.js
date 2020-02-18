import React from 'react';
import sideMenuDriverFactory from './SideMenu.driver';
import { sideMenuUniDriverFactory } from './SideMenu.uni.driver';
import SideMenu from '../index';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../../test/utils/unit';

describe('SideMenu', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(sideMenuDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(sideMenuUniDriverFactory));
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx).driver;
    function createComponent({ header, navigation, promotion, footer }) {
      return createDriver(
        <SideMenu>
          {header && <SideMenu.Header>{header}</SideMenu.Header>}
          {navigation && (
            <SideMenu.Navigation>{navigation}</SideMenu.Navigation>
          )}
          {promotion && <SideMenu.Promotion>{promotion}</SideMenu.Promotion>}
          {footer && <SideMenu.Footer>{footer}</SideMenu.Footer>}
        </SideMenu>,
      );
    }

    it('should render empty menu', async () => {
      const driver = createComponent({});

      expect(await driver.exists()).toBe(true);
      expect(await driver.hasHeader()).toBe(false);
      expect(await driver.hasNavigation()).toBe(false);
      expect(await driver.hasPromotion()).toBe(false);
      expect(await driver.hasFooter()).toBe(false);
    });

    it('should render full menu', async () => {
      const menu = {
        header: 'Hello Header',
        navigation: [
          <SideMenu.NavigationLink key="0" href="//wix.com" />,
          <SideMenu.NavigationSeparator key="1" />,
          <SideMenu.NavigationLink key="2" href="//wix.com" />,
        ],
        promotion: 'Hello Promotion',
        footer: 'Hello Footer',
      };
      const driver = createComponent(menu);

      expect(await driver.exists()).toBe(true);

      expect(await driver.hasHeader()).toBe(true);
      expect(await driver.headerContent()).toBe(menu.header);

      expect(await driver.hasNavigation()).toBe(true);
      expect(await driver.navigationLinks()).toHaveLength(2);
      expect(await driver.navigationSeparators()).toHaveLength(1);

      expect(await driver.hasPromotion()).toBe(true);
      expect(await driver.promotionContent()).toBe(menu.promotion);

      expect(await driver.hasFooter()).toBe(true);
      expect(await driver.footerContent()).toBe(menu.footer);
    });

    it('should render a sub menu', async () => {
      const menu = {
        navigation: [
          <SideMenu.NavigationBackLink key="0">
            Back
          </SideMenu.NavigationBackLink>,
          <SideMenu.NavigationCategory key="1">
            Category 1
          </SideMenu.NavigationCategory>,
          <SideMenu.NavigationLink key="2" href="//wix.com" />,
        ],
      };

      const driver = createComponent(menu);

      expect(await driver.hasBackLink()).toBe(true);
      expect(await driver.navigationCategories()).toHaveLength(1);
      expect(await driver.navigationLinks()).toHaveLength(1);
    });

    it('should allow to click on a back menu', async () => {
      const spy = jest.fn();
      const menu = {
        navigation: [
          <SideMenu.NavigationBackLink key="0" onBackHandler={spy}>
            Back
          </SideMenu.NavigationBackLink>,
        ],
      };

      const driver = createComponent(menu);
      await driver.clickBackLink();

      expect(spy).toHaveBeenCalled();
    });

    it('should allow to select a menu navigation link', async () => {
      const spy = jest.fn();
      const menu = {
        navigation: [
          <SideMenu.NavigationLink key="0" />,
          <SideMenu.NavigationLink key="1" onClick={spy} />,
          <SideMenu.NavigationLink key="2" />,
        ],
      };

      const driver = createComponent(menu);
      await driver.clickLinkByIndex(1);

      expect(spy).toHaveBeenCalled();
    });

    it('should allow to have a badge', async () => {
      const badge = <SideMenu.NavigationBadge />;
      const menu = {
        navigation: [
          <SideMenu.NavigationLink key="0" />,
          <SideMenu.NavigationLink key="1" badge={badge} />,
          <SideMenu.NavigationLink key="2" />,
        ],
      };

      const driver = createComponent(menu);
      expect(await driver.isLinkBadgeVisibleByIndex(0)).toBe(false);
      expect(await driver.isLinkBadgeVisibleByIndex(1)).toBe(true);
      expect(await driver.isLinkBadgeVisibleByIndex(2)).toBe(false);
    });
  }
});
