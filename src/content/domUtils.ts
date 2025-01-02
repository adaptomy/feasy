import type { Styles } from './styles';

export const setStyle = (htmlElm: HTMLElement, styles: Styles) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};

export const createIframe = (src: string, styles: Styles): HTMLIFrameElement => {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.sandbox.value = 'allow-scripts allow-same-origin';
  setStyle(iframe, styles);
  return iframe;
};
