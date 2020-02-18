import React from 'react';
import { SidePanelContext } from '../SidePanelAPI';
import PropTypes from 'prop-types';
import styles from './Header.st.css';
import { dataHooks } from '../constants';
import Tooltip from '../../Tooltip';
import Heading from '../../Heading';
import Divider from '../../Divider';
import CloseButton from '../../CloseButton';
import Box from '../../Box';
import InfoIcon from '../../InfoIcon';

class Header extends React.PureComponent {
  static displayName = 'SidePanel.Header';

  static propTypes = {
    /** Define styles through a classname */
    className: PropTypes.string,
    /** Title */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Tooltip text */
    infoTooltipContent: PropTypes.string,
    /** Tooltip props */
    infoTooltipProps: PropTypes.shape(Tooltip.propTypes),
    /** Show divider */
    showDivider: PropTypes.bool,
    /** Any element to be rendered inside under title */
    children: PropTypes.node,
  };

  static defaultProps = {
    showDivider: true,
  };

  renderStringTitle() {
    const { title, infoTooltipContent, infoTooltipProps } = this.props;

    return (
      <Box>
        <Heading appearance="H4" dataHook={dataHooks.sidePanelHeaderTitle}>
          {title}
        </Heading>
        {infoTooltipContent && (
          <Box marginLeft="tiny">
            <InfoIcon
              dataHook={dataHooks.sidePanelHeaderTitleInfoIcon}
              content={infoTooltipContent}
              tooltipProps={infoTooltipProps}
            />
          </Box>
        )}
      </Box>
    );
  }

  renderTitle(onCloseButtonClick) {
    const { title } = this.props;
    const isStringTitle = typeof title === 'string';

    return (
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          {isStringTitle ? this.renderStringTitle() : title}
        </div>
        <CloseButton
          dataHook={dataHooks.sidePanelHeaderCloseButton}
          className={styles.closeButton}
          size="large"
          onClick={onCloseButtonClick}
        />
      </div>
    );
  }

  render() {
    const { children, showDivider } = this.props;
    return (
      <SidePanelContext.Consumer>
        {context => (
          <div
            {...styles('root', {}, this.props)}
            data-hook={dataHooks.sidePanelHeader}
          >
            {this.renderTitle(context.onCloseButtonClick)}
            {children}
            {showDivider && (
              <Divider dataHook={dataHooks.sidePanelHeaderDivider} />
            )}
          </div>
        )}
      </SidePanelContext.Consumer>
    );
  }
}

export default Header;
