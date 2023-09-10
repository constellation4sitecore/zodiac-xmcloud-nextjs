import { Placeholder, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { MastheadFields } from './types/MastheadFields';

type MastheadWithMediaProps = ComponentProps & {
  fields: MastheadFields;
  params: {
    position: string;
  };
};

const _MastheadWithMedia = ({ fields, params, rendering }: MastheadWithMediaProps): JSX.Element => (
  <div className={`masthead masthead--${params.position}-media`}>
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
  return <_MastheadWithMedia {...props} params={{ position: 'left' }} />;
};

const _WithMediaRight = (props: MastheadWithMediaProps): JSX.Element => {
  return <_MastheadWithMedia {...props} params={{ position: 'right' }} />;
};

export const Default = _Default;
export const WithMediaRight = _WithMediaRight;
