import {
  Field,
  Image,
  ImageField,
  Link,
  LinkField,
  RichText,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type CallToActionCardProps = ComponentProps & {
  fields: {
    thumbnailImage: ImageField;
    heading: Field<string>;
    copy: Field<string>;
    link: LinkField;
  };
};

const CallToActionCard = ({ fields }: CallToActionCardProps): JSX.Element => {
  const ctx = useSitecoreContext();
  return (
    <>
      <aside className="swiper-slide">
        {ctx.sitecoreContext.pageEditing ||
          ((fields.thumbnailImage.value?.src == null || fields.thumbnailImage.value.src == '') && (
            <picture className="card-content__image">
              <Image field={fields.thumbnailImage} />
            </picture>
          ))}
        <div className="content-card__wrapper">
          <Text field={fields.heading} tag="h6" className="content-card__heading" />
          <RichText field={fields.copy} className="content-card__copy" />
          <div className="content-card__actions">
            <Link field={fields.link} className="btn btn--primary btn--small" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default withDatasourceCheck()<CallToActionCardProps>(CallToActionCard);
