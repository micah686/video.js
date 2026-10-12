import { AirPlayButtonCore, AirPlayButtonDataAttrs, type AirPlayButtonState } from '@videojs/core';
import { selectRemotePlayback } from '@videojs/core/dom';
import type { PropertyDeclarationMap } from '@videojs/element';
import type { MediaRemotePlaybackState } from '@videojs/media';

import { playerContext } from '../../player/context';
import { PlayerController } from '../../player/controller';
import { MediaButtonElement } from '../media-button-element';

export class AirPlayButtonElement extends MediaButtonElement<AirPlayButtonState, MediaRemotePlaybackState> {
  static readonly tagName = 'media-airplay-button';

  static override properties = {
    showUnavailable: { type: Boolean, attribute: 'show-unavailable' },
  } satisfies PropertyDeclarationMap;

  showUnavailable = false;

  protected readonly core = new AirPlayButtonCore();
  protected readonly stateAttrMap = AirPlayButtonDataAttrs;
  protected readonly mediaState = new PlayerController(this, playerContext, selectRemotePlayback);

  protected activate(state: MediaRemotePlaybackState): Promise<void> {
    return this.core.toggle(state);
  }
}
