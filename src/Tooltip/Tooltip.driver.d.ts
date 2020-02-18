import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { TooltipOldPlacement } from './index';

export interface TooltipDriver extends BaseDriver {
  isShown(): boolean;
  focus(): void;
  blur(): void;
  click(): void;
  mouseEnter(): void;
  mouseLeave(): void;
  hasErrorTheme(): boolean;
  hasDarkTheme(): boolean;
  hasLightTheme(): boolean;
  hasAnimationClass(): boolean;
  hasArrow(): boolean;
  getTooltipWrapper(): HTMLElement | null;
  getChildren(): string;
  getPlacement(): TooltipOldPlacement;
  getContent(): string;
  hoverAndGetContent(options?: { timeout?: number, interval?: number }): Promise<string>;
  getMaxWidth(): CSSStyleDeclaration['maxWidth'];
  getMinWidth(): CSSStyleDeclaration['minWidth'];
  getAlignment(): CSSStyleDeclaration['textAlign'];
  getPadding(): CSSStyleDeclaration['padding'];
}
