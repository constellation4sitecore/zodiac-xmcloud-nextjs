import {
  Field,
  Image,
  ImageField,
  Link,
  LinkField,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type CallToActionRowProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    link: LinkField;
    backgroundImage: ImageField;
    thumbnailImage: ImageField;
  };
};

const _CallToActionRow = ({ fields }: CallToActionRowProps): JSX.Element => (
  <>
    <aside className="cta-row cta-row--with-background container">
      <div className="cta-row__inner">
        <div className="cta-row__content">
          <Text className="cta-row__title" field={fields.heading} tag="h2" />
          <RichText className="cta-row__description rtf" field={fields.copy} tag="div" />
          <Link className="btn btn--primary" field={fields.link} />
        </div>
        {/* has image */}
        <picture className="cta-row__image">
          <Image field={fields.thumbnailImage} />
        </picture>
        {/* has background */}
        <picture className="cta-row__background">
          <Image field={fields.backgroundImage} />
        </picture>
      </div>
    </aside>
  </>
);

const _CallToActionRowWithBackground = ({ fields }: CallToActionRowProps): JSX.Element => (
  <>
    <aside className="cta-row cta-row--with-background container">
      <div className="cta-row__inner">
        <div className="cta-row__content">
          <Text className="cta-row__title" field={fields.heading} tag="h2" />
          <RichText className="cta-row__description rtf" field={fields.copy} tag="div" />
          <Link className="btn btn--primary" field={fields.link} />
        </div>
        {/* has background */}
        <picture className="cta-row__background">
          <Image field={fields.backgroundImage} />
        </picture>
      </div>
    </aside>
  </>
);

const _CallToActionRowWithImage = ({ fields }: CallToActionRowProps): JSX.Element => (
  <>
    <aside className="cta-row cta-row--with-image container">
      <div className="cta-row__inner">
        <div className="cta-row__content">
          <Text className="cta-row__title" field={fields.heading} tag="h2" />
          <RichText className="cta-row__description rtf" field={fields.copy} tag="div" />
          <Link className="btn btn--primary" field={fields.link} />
        </div>
        {/* has image */}
        <picture className="cta-row__image">
          <Image field={fields.thumbnailImage} />
        </picture>
      </div>
    </aside>
  </>
);

export const Default = withDatasourceCheck()<CallToActionRowProps>(_CallToActionRow);
export const WithBackground = withDatasourceCheck()<CallToActionRowProps>(
  _CallToActionRowWithBackground
);
export const WithImage = withDatasourceCheck()<CallToActionRowProps>(_CallToActionRowWithImage);
