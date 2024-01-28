import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export type ImageRowFields = {
    heading: Field<string>;
    sectionImage: ImageField;
    caption: Field<string>;
};