import { Image, Link, RichText, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

import { withDatasourceRendering } from '@constellation4sitecore/foundation-enhancers';
import { ComponentProps } from 'lib/component-props';
import { CallToActionCardFields } from './types/CallToActionCardFields';

type CallToActionCardProps = ComponentProps & {
  fields: CallToActionCardFields;
};

export const CallToActionCardZodiac = ({ fields }: CallToActionCardProps): JSX.Element => {
  const ctx = useSitecoreContext();
  console.log(ctx.sitecoreContext.site);
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
          <span>Zodiac Maual</span>
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

export const CallToActionCardReuseLibrary = ({ fields }: CallToActionCardProps): JSX.Element => {
  const ctx = useSitecoreContext();
  console.log(ctx.sitecoreContext.site);
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
          <span>Reuse Library</span>
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

export const CallToActionCardDefault = ({ fields }: CallToActionCardProps): JSX.Element => {
  const ctx = useSitecoreContext();
  console.log(ctx.sitecoreContext.site);
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
          <span>Default</span>
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

const CallToActionCard = withDatasourceRendering()<CallToActionCardProps>({
  'Reuse Library': CallToActionCardReuseLibrary,
  'Zodiac Manual': CallToActionCardZodiac,
  default: CallToActionCardDefault,
});

export default CallToActionCard;
