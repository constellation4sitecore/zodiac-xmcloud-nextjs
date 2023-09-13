import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type ContentRowFields = {
    heading: Field<string>;
    subheading: Field<string>;
    copy: Field<string>;
}