import { Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { AccordionTabImageFields } from './types/AccordionTabImageFields';

type AccordionTabImageProps = ComponentProps & {
  fields: AccordionTabImageFields;
};

const AccordionTabImage = ({ fields }: AccordionTabImageProps): JSX.Element => (
  <div>
    <picture>
      <Image field={fields.sectionImage} />
    </picture>
  </div>
);

export default withDatasourceCheck()<AccordionTabImageProps>(AccordionTabImage);
