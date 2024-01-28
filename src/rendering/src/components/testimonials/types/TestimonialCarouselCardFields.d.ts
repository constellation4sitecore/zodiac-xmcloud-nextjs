import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export type TestimonialCarouselCardFields = {
    fullName: Field<string>;
    title: Field<string>;
    quote: Field<string>;
    thumbnail: ImageField;
}