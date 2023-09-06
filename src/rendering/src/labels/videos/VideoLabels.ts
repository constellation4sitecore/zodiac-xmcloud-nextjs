import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type VideoLabels = {
  playVideo: Field<string>;
  play: Field<string>;
  stop: Field<string>;
  pause: Field<string>;
  reverse: Field<string>;
  forward: Field<string>;
  transcript: Field<string>;
};

export const videoLabelsId = '{9F29053E-1E66-40E1-9E87-8612D4A336DF}';
