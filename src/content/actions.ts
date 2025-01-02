import { setStyle } from './domUtils';
import { iframeHiddenStyle } from './styles';

export const hideIframe = () => {
  const iframeContainer = document.querySelector('.iframe-container') as HTMLElement | null;

  if (iframeContainer) {
    setStyle(iframeContainer, iframeHiddenStyle);
  } else {
    console.error('iframe-container not found');
  }
};
