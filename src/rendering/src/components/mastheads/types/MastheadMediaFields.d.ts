import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { VideoProviderSetting } from 'src/types/Video/VideoProviderSettings';

export type MastheadMediaFields = {
  mastheadImage: ImageField;
  videoProvider: VideoProviderSetting;
  videoID: string;
};
