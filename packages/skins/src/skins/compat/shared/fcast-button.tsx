import * as $ from '@videojs/core/vjsc';
import type { FCastSender } from '@videojs/fcast';
import { CastEnterIcon, CastExitIcon } from '@videojs/icons/vjsc';
import { type ClassNameValue, Text } from 'vjsc/components';

import fcastStyles from '../../../styles/buttons/fcast-button.styles';
import { Button } from './button';
import buttonStyles from './button.styles';
import { ButtonTooltip } from './tooltip';
import tooltipStyles from './tooltip.styles';

export function FCastButton({
  className,
  sender,
  src,
  contentType,
  showTooltip = true,
  showUnavailable,
}: {
  className?: ClassNameValue;
  sender?: FCastSender | undefined;
  src?: string | undefined;
  contentType?: string | undefined;
  showTooltip?: boolean;
  showUnavailable?: boolean | undefined;
} = {}) {
  const button = (
    <$.FCastButton
      $render={Button}
      className={[fcastStyles.root, className]}
      sender={sender}
      src={src}
      contentType={contentType}
      showUnavailable={showUnavailable}
    >
      <CastEnterIcon className={[buttonStyles.icon, fcastStyles.enterIcon]} />
      <CastExitIcon className={[buttonStyles.icon, fcastStyles.exitIcon]} />
      <Text aria-hidden="true" className={fcastStyles.badge}>
        F
      </Text>
    </$.FCastButton>
  );

  if (!showTooltip) return button;

  return <ButtonTooltip popupClassName={tooltipStyles.screenPopup}>{button}</ButtonTooltip>;
}
