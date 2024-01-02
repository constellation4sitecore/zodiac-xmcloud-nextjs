import { withDatasourceRendering } from '@constellation4sitecore/foundation-enhancers';
import { Placeholder, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { MastheadFields } from './types/MastheadFields';

type SimpleMastheadProps = ComponentProps & {
  fields: MastheadFields;
};

const SimpleMasthead = ({ fields, rendering }: SimpleMastheadProps): JSX.Element => (
  <div className="masthead masthead--simple">
    <div className="masthead__inner container">
      <div className="masthead__content">
        <Text tag="h1" className="masthead__heading" field={fields?.heading} />
        {fields?.subheading?.value.length > 0 && (
          <Text tag="h2" className="masthead__subheading" field={fields?.subheading} />
        )}
        {fields?.introText?.value.length > 0 && (
          <RichText className="masthead__copy rtf" field={fields?.introText} tag="div" />
        )}
        <div className="masthead__actions">
          <Placeholder name="MastheadActions" rendering={rendering} />
        </div>
      </div>
    </div>
  </div>
);

export default withDatasourceRendering()<SimpleMastheadProps>(SimpleMasthead);