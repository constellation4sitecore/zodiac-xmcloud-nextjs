import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export type TimelineMilestoneFields = {
    milestoneDate: Field<string>;
    heading: Field<string>;
    copy: Field<string>;
    milestoneImage: ImageField;
}