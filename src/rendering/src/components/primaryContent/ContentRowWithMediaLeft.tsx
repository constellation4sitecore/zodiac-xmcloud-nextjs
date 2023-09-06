import {
  Field,
  Placeholder,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type ContentRowWithMediaLeftProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    subheading: Field<string>;
    copy: Field<string>;
  };
};

const ContentRowWithMediaLeft = ({
  fields,
  rendering,
}: ContentRowWithMediaLeftProps): JSX.Element => (
  <section className="content-row content-row--media-align-left ">
    <div className="content-row__media">
      <Placeholder name="ContentRowMedia" rendering={rendering} />
    </div>
    <div className="content-row__content">
      <header>
        <Text field={fields.heading} className="content-row__headline" tag="h2" />
        {fields.subheading.value.length > 0 && (
          <Text tag="h3" field={fields.subheading} className="content-row__subhead" />
        )}
      </header>
      <RichText field={fields.copy} className="content-row__description rtf" tag="div" />
      <Placeholder name="ContentRowActions" rendering={rendering} />
    </div>
  </section>
);

export default withDatasourceCheck()<ContentRowWithMediaLeftProps>(ContentRowWithMediaLeft);
