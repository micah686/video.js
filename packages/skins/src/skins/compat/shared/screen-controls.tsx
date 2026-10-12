import * as $ from '@videojs/core/vjsc';
import type { FCastSender } from '@videojs/fcast';
import {
  CastEnterIcon,
  CastExitIcon,
  FullscreenEnterIcon,
  FullscreenExitIcon,
  PipEnterIcon,
  PipExitIcon,
} from '@videojs/icons/vjsc';
import { Box, Text } from 'vjsc/components';

import castMenuStyles from '../../../styles/menus/cast-menu.styles';
import popupStyles from '../../../styles/popups/popup.styles';
import { AirPlayButton } from './airplay-button';
import { Button } from './button';
import buttonStyles from './button.styles';
import castButtonStyles from './cast-button.styles';
import { FCastButton } from './fcast-button';
import fullscreenButtonStyles from './fullscreen-button.styles';
import menuStyles from './menu.styles';
import pipButtonStyles from './pip-button.styles';
import { ButtonTooltip } from './tooltip';
import tooltipStyles from './tooltip.styles';

function CastButton() {
  return (
    <$.CastButton $render={Button} className={[castButtonStyles.root, castMenuStyles.button]}>
      <CastEnterIcon className={[buttonStyles.icon, castButtonStyles.enterIcon]} />
      <CastExitIcon className={[buttonStyles.icon, castButtonStyles.exitIcon]} />
    </$.CastButton>
  );
}

function CastMenu({
  fcast,
}: {
  fcast?: { sender?: FCastSender | undefined; src?: string | undefined; contentType?: string | undefined } | undefined;
}) {
  return (
    <$.Menu.Root side="top" align="center">
      <$.Menu.Trigger $render={Button} aria-label="Cast options">
        <CastEnterIcon className={buttonStyles.icon} />
      </$.Menu.Trigger>
      <$.Menu.Popup keepMounted className={[popupStyles.popup, popupStyles.surface, menuStyles.popup]}>
        <$.Menu.Content className={[menuStyles.content, castMenuStyles.content]}>
          <Box className={[menuStyles.item, castMenuStyles.item]}>
            <CastButton />
            <Text>Chromecast</Text>
          </Box>
          <Box className={[menuStyles.item, castMenuStyles.item]}>
            <AirPlayButton className={castMenuStyles.button} showTooltip={false} showUnavailable />
            <Text>AirPlay</Text>
          </Box>
          <Box className={[menuStyles.item, castMenuStyles.item]}>
            <FCastButton {...fcast} className={castMenuStyles.button} showTooltip={false} showUnavailable />
            <Text>FCast</Text>
          </Box>
        </$.Menu.Content>
      </$.Menu.Popup>
    </$.Menu.Root>
  );
}

function PiPButton() {
  return (
    <ButtonTooltip popupClassName={tooltipStyles.screenPopup}>
      <$.PiPButton $render={Button} className={pipButtonStyles.root}>
        <PipEnterIcon className={[buttonStyles.icon, pipButtonStyles.enterIcon]} />
        <PipExitIcon className={[buttonStyles.icon, pipButtonStyles.exitIcon]} />
      </$.PiPButton>
    </ButtonTooltip>
  );
}

function FullscreenButton() {
  return (
    <ButtonTooltip popupClassName={tooltipStyles.screenPopup}>
      <$.FullscreenButton $render={Button} className={fullscreenButtonStyles.root}>
        <FullscreenEnterIcon className={[buttonStyles.icon, fullscreenButtonStyles.enterIcon]} />
        <FullscreenExitIcon className={[buttonStyles.icon, fullscreenButtonStyles.exitIcon]} />
      </$.FullscreenButton>
    </ButtonTooltip>
  );
}

export function ScreenControls({
  fcast,
}: {
  fcast?:
    | {
        sender?: FCastSender | undefined;
        src?: string | undefined;
        contentType?: string | undefined;
      }
    | undefined;
} = {}) {
  return (
    <>
      <CastMenu fcast={fcast} />
      <PiPButton />
      <FullscreenButton />
    </>
  );
}
