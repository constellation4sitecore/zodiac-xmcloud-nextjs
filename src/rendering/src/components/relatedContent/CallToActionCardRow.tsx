import {
  Placeholder,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { CallToActionCardRowFields } from './types/CallToActionCardRowFields';

type CallToActionCardRowProps = ComponentProps & {
  fields: CallToActionCardRowFields;
};

const CallToActionCardRow = ({ fields, rendering }: CallToActionCardRowProps): JSX.Element => (
  <>
    <section
      className="column-row"
      data-module="column-row"
      data-breakpoint={767}
      aria-labelledby="columnRowHeading"
      style={{ width: '100%' }}
    >
      <header>
        <Text field={fields.heading} tag="h2" className="column-row__heading" />
        <RichText field={fields.copy} className="column-row__copy rtf" />
      </header>
      <div className="swiper-container">
        <div className="swiper-wrapper swiper-wrapper--@columns">
          <Placeholder name="CallToActionCards" rendering={rendering} />
        </div>
        <div className="column-row--pagination">
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <RichText field={fields.trailingCopy} className="column-row__copy rtf" />
    </section>
  </>
);

export default withDatasourceCheck()<CallToActionCardRowProps>(CallToActionCardRow);
