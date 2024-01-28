import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type AccordionTabFields = {
    heading: Field<string>;
    copy: Field<string>;
    expanded: Field<boolean>;
}