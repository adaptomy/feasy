import { createIframe, setStyle } from './domUtils';
import { handlePostMessage } from './messageHandler';
import { btnStyle, containerStyle, iframeStyle } from './styles';

const LOCALHOST_URL = 'http://localhost:3000';

const btn = document.createElement('button');
const container = document.createElement('div');

btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', () => {
  setStyle(container, containerStyle);

  if (!container.querySelector('iframe')) {
    const iframe = createIframe(LOCALHOST_URL, iframeStyle);
    container.appendChild(iframe);
  }
});

window.addEventListener('message', handlePostMessage);

document.body.appendChild(btn);
document.body.appendChild(container);
