import { useState } from 'react';
import { hideIframe } from '../../../content/actions';
import { buttonHoverStyle, buttonStyle } from './iframeHideBtn.styles';
const IframeHideBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    hideIframe();
  };

  return (
    <button
      style={isHovered ? buttonHoverStyle : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      Iframe 非表示
    </button>
  );
};

export default IframeHideBtn;
