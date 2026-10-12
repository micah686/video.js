import type { AirPlayButtonProps } from '@videojs/core';
import * as $ from '@videojs/core/vjsc';
import { AirPlayEnterIcon, AirPlayExitIcon } from '@videojs/icons/vjsc';
import type { ClassNameValue } from 'vjsc/components';

import airplayButtonStyles from './airplay-button.styles';
import { Button } from './button';
import buttonStyles from './button.styles';
import { ButtonTooltip } from './tooltip';

export function AirPlayButton({
  className,
  popupClassName,
  showTooltip = true,
  showUnavailable,
}: {
  className?: ClassNameValue;
  popupClassName?: ClassNameValue;
  showTooltip?: boolean;
} & Pick<AirPlayButtonProps, 'showUnavailable'> = {}) {
  const button = (
    <$.AirPlayButton
      $render={Button}
      className={[airplayButtonStyles.root, className]}
      showUnavailable={showUnavailable}
    >
      <AirPlayEnterIcon className={[buttonStyles.icon, airplayButtonStyles.enterIcon]} />
      <AirPlayExitIcon className={[buttonStyles.icon, airplayButtonStyles.exitIcon]} />
    </$.AirPlayButton>
  );

  if (!showTooltip) return button;

  return <ButtonTooltip popupClassName={popupClassName}>{button}</ButtonTooltip>;
}
