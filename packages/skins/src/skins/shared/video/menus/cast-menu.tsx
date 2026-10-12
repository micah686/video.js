import * as $ from '@videojs/core/vjsc';
import { CastEnterIcon } from '@videojs/icons/vjsc';
import { Box, Text } from 'vjsc/components';

import { AirPlayButton } from '../../../../components/buttons/airplay-button';
import { Button } from '../../../../components/buttons/button';
import { CastButton } from '../../../../components/buttons/cast-button';
import { FCastButton, type FCastButtonProps } from '../../../../components/buttons/fcast-button';
import buttonStyles from '../../../../styles/buttons/button.styles';
import castMenuStyles from '../../../../styles/menus/cast-menu.styles';
import menuStyles from '../../../../styles/menus/menu.styles';
import popupStyles from '../../../../styles/popups/popup.styles';

export function CastMenu({ fcast }: { fcast?: FCastButtonProps | undefined } = {}) {
  return (
    <$.Menu.Root side="top" align="center">
      <$.Menu.Trigger $render={Button} aria-label="Cast options">
        <CastEnterIcon className={buttonStyles.icon} />
      </$.Menu.Trigger>
      <$.Menu.Popup keepMounted className={[popupStyles.popup, popupStyles.surface, menuStyles.popup]}>
        <$.Menu.Content className={[menuStyles.content, castMenuStyles.content]}>
          <Box className={[menuStyles.triggerItem, castMenuStyles.item]}>
            <CastButton className={castMenuStyles.button} />
            <Text>Chromecast</Text>
          </Box>
          <Box className={[menuStyles.triggerItem, castMenuStyles.item]}>
            <AirPlayButton className={castMenuStyles.button} showUnavailable />
            <Text>AirPlay</Text>
          </Box>
          <Box className={[menuStyles.triggerItem, castMenuStyles.item]}>
            <FCastButton {...fcast} className={castMenuStyles.button} showUnavailable />
            <Text>FCast</Text>
          </Box>
        </$.Menu.Content>
      </$.Menu.Popup>
    </$.Menu.Root>
  );
}
