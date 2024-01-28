import { ImageField } from "@sitecore-jss/sitecore-jss-nextjs";

import { VideoProvider } from 'src/types/Video/VideoProvider';


export type AccordionTabVideoFields = {
    sectionImage: ImageField;
    videoProvider: VideoProvider;
    videoID: string;
}