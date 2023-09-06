import {
  Field,
  Placeholder,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type ContentRowProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    subheading: Field<string>;
    copy: Field<string>;
  };
};

const ContentRow = ({ fields, rendering }: ContentRowProps): JSX.Element => (
  <>
    <section className="content-section-row container">
      <Text field={fields.heading} tag="h2" className="content-section-row__heading" />
      {fields.subheading.value.length > 0 && (
        <Text field={fields.subheading} tag="h3" className="content-row__subhead" />
      )}
      <RichText field={fields.copy} tag="div" className="content-section-row__rtf" />
      <Placeholder name="ContentRowActions" rendering={rendering} />
    </section>
  </>
);

export default withDatasourceCheck()<ContentRowProps>(ContentRow);
