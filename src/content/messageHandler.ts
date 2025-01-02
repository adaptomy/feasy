import { hideIframe, shareForm } from './actions';
import type { PostData } from './types/post.types';

const LOCALHOST_URL = 'http://localhost:3000';

export const handlePostMessage = (event: MessageEvent) => {
  if (event.origin !== LOCALHOST_URL) return;

  const postData: PostData = event.data;
  const { action, content } = postData;

  const iframePostActions = {
    hide: hideIframe,
    share: shareForm,
  };

  iframePostActions[action](content);
};
