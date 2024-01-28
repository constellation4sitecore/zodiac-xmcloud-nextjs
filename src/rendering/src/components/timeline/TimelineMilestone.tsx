import { Image, RichText, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { TimelineMilestoneFields } from './types/TimelineMilestoneFields';

type TestimonialCarouselCardProps = ComponentProps & {
  fields: TimelineMilestoneFields;
};

const TestimonialCarouselCard = ({ fields }: TestimonialCarouselCardProps): JSX.Element => (
  <div className="swiper-slide">
    <div
      className="animated-carousel-card"
      data-module="cardCarousel"
      data-show-more-label="@Labels.ShowMore"
      data-show-less-label="@Labels.ShowLess"
    >
      <div className="animated-carousel-card__image">
        <picture>
          <Image field={fields.milestoneImage} />
        </picture>
      </div>

      <div className="animated-carousel-card__content">
        <Text tag="p" className="animated-carousel-card__subheader" field={fields.milestoneDate} />
        <h3 className="animated-carousel-card__header">@Model.Heading</h3>
        <Text tag="h3" className="animated-carousel-card__header" field={fields.heading} />
        <RichText
          tag="div"
          className="animated-carousel-card__description rtf"
          field={fields.copy}
        />
        <div className="animated-carousel-card__action">
          <button type="button" className="btn btn--primary btn--outline btn--small">
            @Labels.ShowMore
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<TestimonialCarouselCardProps>(TestimonialCarouselCard);
