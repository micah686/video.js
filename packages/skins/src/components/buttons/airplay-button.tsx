import type { AirPlayButtonProps as CoreProps } from '@videojs/core';
import * as $ from '@videojs/core/vjsc';
import { AirPlayEnterIcon, AirPlayExitIcon } from '@videojs/icons/vjsc';
import { Box, type PropsWithChildren } from 'vjsc/components';

import type { SkinComponentDescription } from '../../meta';
import styles from '../../styles/buttons/airplay-button.styles';
import buttonStyles from '../../styles/buttons/button.styles';
import { Button } from './button';

export function AirPlayButton({ children, className, ...props }: PropsWithChildren<CoreProps> = {}) {
  return (
    <$.AirPlayButton $render={Button} className={[styles.root, className]} {...props}>
      <Box className={buttonStyles.iconGroup}>
        <AirPlayEnterIcon className={[buttonStyles.icon, styles.enterIcon]} />
        <AirPlayExitIcon className={[buttonStyles.icon, styles.exitIcon]} />
      </Box>
      {children}
    </$.AirPlayButton>
  );
}

export const meta = {
  title: 'AirPlay Button',
  description: 'A state-aware button that starts and stops AirPlay playback.',
} as const satisfies SkinComponentDescription;
