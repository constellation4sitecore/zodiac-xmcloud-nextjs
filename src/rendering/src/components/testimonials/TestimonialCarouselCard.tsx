import {
  Field,
  Image,
  ImageField,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type TestimonialCarouselCardProps = ComponentProps & {
  fields: {
    fullName: Field<string>;
    title: Field<string>;
    quote: Field<string>;
    thumbnail: ImageField;
  };
};

const TestimonialCarouselCard = ({ fields }: TestimonialCarouselCardProps): JSX.Element => (
  <div className="swiper-slide">
    <article className="testimonials-card testimonials-card--with-image">
      <Image field={fields.thumbnail} className="testimonials-card__photo" />
      <header>
        <Text field={fields.fullName} tag="h3" className="testimonials-card__name" />
        {fields.title.value.length > 0 && (
          <Text field={fields.title} tag="h4" className="testimonials-card__position" />
        )}
      </header>
      <RichText tag="div" className="testimonials-card__quote rtf" field={fields.quote} />
    </article>
  </div>
);

export default withDatasourceCheck()<TestimonialCarouselCardProps>(TestimonialCarouselCard);
