import type { AirPlayButtonProps } from '@videojs/core';
import * as $ from '@videojs/core/vjsc';
import { AirPlayEnterIcon, AirPlayExitIcon } from '@videojs/icons/vjsc';
import { Box, type ClassNameValue, type VjscNode } from 'vjsc/components';

import airplayButtonStyles from './airplay-button.styles';
import { Button } from './button';
import buttonStyles from './button.styles';
import { ButtonTooltip } from './tooltip';

export function AirPlayButton({
  className,
  popupClassName,
  showTooltip = true,
  showUnavailable,
  children,
}: {
  className?: ClassNameValue;
  popupClassName?: ClassNameValue;
  showTooltip?: boolean;
  children?: VjscNode;
} & Pick<AirPlayButtonProps, 'showUnavailable'> = {}) {
  const button = (
    <$.AirPlayButton
      $render={Button}
      className={[airplayButtonStyles.root, className]}
      showUnavailable={showUnavailable}
    >
      <Box className={buttonStyles.iconGroup}>
        <AirPlayEnterIcon className={[buttonStyles.icon, airplayButtonStyles.enterIcon]} />
        <AirPlayExitIcon className={[buttonStyles.icon, airplayButtonStyles.exitIcon]} />
      </Box>
      {children}
    </$.AirPlayButton>
  );

  if (!showTooltip) return button;

  return <ButtonTooltip popupClassName={popupClassName}>{button}</ButtonTooltip>;
}
