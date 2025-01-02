export type PostActions = 'hide' | 'share';

export type PostContent = {
  name: string;
  email: string;
  old: string;
};

export type PostData = {
  action: PostActions;
  content: PostContent;
};

export type PostFunc = {
  [key in PostActions]: (content: PostContent) => void;
};
