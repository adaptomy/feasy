import { useState } from 'react';
import type { PostData } from '../../../content/types/post.types';
import { buttonStyle, containerStyle, inputStyle, spaceYstyle } from './sendDataForm.styles';

export const SendDataForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [old, setOld] = useState('');

  const shareData = () => {
    const postData: PostData = {
      action: 'share',
      content: { name, email, old },
    };
    window.parent.postMessage(postData, '*');
  };

  return (
    <div style={containerStyle} className="iframe-container">
      <div style={spaceYstyle} />
      <input
        title="氏名"
        style={inputStyle}
        placeholder="富士 太郎"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div style={spaceYstyle} />
      <input
        title="メールアドレス"
        style={inputStyle}
        placeholder="mail@co.jp"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={spaceYstyle} />
      <input
        title="年齢"
        style={inputStyle}
        placeholder="20"
        type="number"
        value={old}
        onChange={(e) => setOld(e.target.value)}
      />
      <div style={spaceYstyle} />
      <div style={{ textAlign: 'right' }}>
        <button onClick={shareData} style={buttonStyle}>
          データ共有
        </button>
      </div>
    </div>
  );
};
