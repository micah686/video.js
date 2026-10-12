import * as $ from '@videojs/core/vjsc';
import type { FCastSender } from '@videojs/fcast';
import { CastEnterIcon, CastExitIcon } from '@videojs/icons/vjsc';
import { Box, type ClassNameValue, type VjscNode, Text } from 'vjsc/components';

import type { SkinComponentDescription } from '../../meta';
import buttonStyles from '../../styles/buttons/button.styles';
import styles from '../../styles/buttons/fcast-button.styles';
import { Button } from './button';

export interface FCastButtonProps {
  className?: ClassNameValue;
  children?: VjscNode;
  sender?: FCastSender | undefined;
  src?: string | undefined;
  contentType?: string | undefined;
  showUnavailable?: boolean | undefined;
}

export function FCastButton({ className, children, sender, src, contentType, showUnavailable }: FCastButtonProps = {}) {
  return (
    <$.FCastButton
      $render={Button}
      className={[styles.root, className]}
      sender={sender}
      src={src}
      contentType={contentType}
      showUnavailable={showUnavailable}
    >
      <Box className={buttonStyles.iconGroup}>
        <CastEnterIcon className={[buttonStyles.icon, styles.enterIcon]} />
        <CastExitIcon className={[buttonStyles.icon, styles.exitIcon]} />
        <Text aria-hidden="true" className={styles.badge}>
          F
        </Text>
      </Box>
      {children}
    </$.FCastButton>
  );
}

export const meta = {
  title: 'FCast Button',
  description: 'A state-aware button for an application-provided FCast sender.',
} as const satisfies SkinComponentDescription;
