import * as $ from '@videojs/core/vjsc';
import { CastEnterIcon } from '@videojs/icons/vjsc';
import { Text } from 'vjsc/components';

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
          <CastButton className={castMenuStyles.item}>
            <Text>Chromecast</Text>
          </CastButton>
          <AirPlayButton className={castMenuStyles.item} showUnavailable>
            <Text>AirPlay</Text>
          </AirPlayButton>
          <FCastButton {...fcast} className={castMenuStyles.item} showUnavailable>
            <Text>FCast</Text>
          </FCastButton>
        </$.Menu.Content>
      </$.Menu.Popup>
    </$.Menu.Root>
  );
}
