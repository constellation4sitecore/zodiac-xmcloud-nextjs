import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type CallToActionRowFields = {
    heading: Field<string>;
    copy: Field<string>;
    link: LinkField;
    backgroundImage: ImageField;
    thumbnailImage: ImageField;
};