import {
  Field,
  Placeholder,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type TestimonialCarouselProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    intro: Field<string>;
  };
};

const TestimonialCarousel = ({ fields, rendering }: TestimonialCarouselProps): JSX.Element => (
  <>
    <section className="testimonials container" data-module="testimonials">
      <header>
        <Text tag="h2" className="testimonials__heading" field={fields.heading} />
        {fields.intro.value.length > 0 && (
          <RichText tag="div" className="testimonials__copy rtf" field={fields.intro} />
        )}
      </header>
      <div className="testimonials__slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Placeholder name="TestimonialCarouselCards" rendering={rendering} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default withDatasourceCheck()<TestimonialCarouselProps>(TestimonialCarousel);
