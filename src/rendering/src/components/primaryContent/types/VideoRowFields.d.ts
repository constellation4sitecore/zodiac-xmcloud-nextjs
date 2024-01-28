import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

import { VideoProviderSetting } from 'src/types/Video/VideoProviderSettings';

export type VideoRowFields = {
    heading: Field<string>;
    sectionImage: ImageField;
    caption: Field<string>;
    videoID: string;
    videoProvider: VideoProviderSetting;
};