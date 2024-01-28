import { Placeholder, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { MastheadFields } from './types/MastheadFields';
import { withDatasourceRendering } from '@constellation4sitecore/foundation-enhancers';

type MastheadWithMediaProps = ComponentProps & {
  fields: MastheadFields;
  variantParams: {
    position: string;
  };
};

const _MastheadWithMedia = ({
  fields,
  variantParams,
  rendering,
}: MastheadWithMediaProps): JSX.Element => (
  <div className={`masthead masthead--${variantParams.position}-media`}>
    <div className="masthead__inner container">
      <div className="masthead__media">
        <Placeholder name="MastheadMedia" rendering={rendering} />
      </div>
      <div className="masthead__content">
        <Text field={fields.heading} tag="h1" className="masthead__heading" />
        {fields.subheading.value.length > 0 && (
          <Text tag="h2" className="masthead__subheading" field={fields.subheading} />
        )}
        {fields.introText.value.length > 0 && (
          <RichText field={fields.introText} className="masthead__copy" />
        )}
        <div className="masthead__actions">
          <Placeholder name="MastheadActions" rendering={rendering} />
        </div>
      </div>
    </div>
  </div>
);

const _Default = (props: MastheadWithMediaProps): JSX.Element => {
  return <_MastheadWithMedia {...props} variantParams={{ position: 'left' }} />;
};

const _WithMediaRight = (props: MastheadWithMediaProps): JSX.Element => {
  return <_MastheadWithMedia {...props} variantParams={{ position: 'right' }} />;
};

export const MastheadWithMedia = _Default;

export default withDatasourceRendering()<MastheadWithMediaProps>(MastheadWithMedia);
export const WithMediaRight = withDatasourceRendering()<MastheadWithMediaProps>(_WithMediaRight);
