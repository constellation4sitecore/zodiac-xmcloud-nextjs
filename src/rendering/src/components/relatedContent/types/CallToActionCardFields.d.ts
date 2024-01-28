import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';


export type CallToActionCardFields = {
    thumbnailImage: ImageField;
    heading: Field<string>;
    copy: Field<string>;
    link: LinkField;
}