import {
  Field,
  Image,
  ImageField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type ImageRowProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    sectionImage: ImageField;
    caption: Field<string>;
  };
};

const ImageRow = ({ fields }: ImageRowProps): JSX.Element => (
  <div className="">
    <section className="full-width-image">
      <header>
        <Text field={fields.heading} className="full-width-image__header" tag="h2" />
      </header>
      <figure className="full-width-image__figure">
        <div className="full-width-image__wrapper">
          <Image field={fields.sectionImage} className="full-width-image__image" />
        </div>
        <figcaption className="full-width-image__caption">
          <Text field={fields.caption} />
        </figcaption>
      </figure>
    </section>
  </div>
);

export default withDatasourceCheck()<ImageRowProps>(ImageRow);
