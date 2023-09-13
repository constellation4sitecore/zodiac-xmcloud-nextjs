import { Placeholder, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { TimelineContainerFields } from './types/TimelineContainerFields';

type TimelineContainerProps = ComponentProps & {
  fields: TimelineContainerFields;
};

const TimelineContainer = ({ fields, rendering }: TimelineContainerProps): JSX.Element => (
  <section
    className="animated-card-carousel"
    data-module="animatedCardCarousel"
    data-autoplay-timeout="7000"
  >
    <div className="container">
      <Text field={fields.heading} tag="h2" className="animated-card-carousel__header" />

      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Placeholder name="TimelineMilestones" rendering={rendering} />
        </div>
      </div>
    </div>
  </section>
);

export default withDatasourceCheck()<TimelineContainerProps>(TimelineContainer);
