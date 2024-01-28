import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type ContentRowWithMediaFields = {
    heading: Field<string>;
    subheading: Field<string>;
    copy: Field<string>;
};