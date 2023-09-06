import { Image, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type AccordionTabImageProps = ComponentProps & {
  fields: {
    sectionImage: ImageField;
  };
};

const AccordionTabImage = ({ fields }: AccordionTabImageProps): JSX.Element => (
  <div>
    <picture>
      <Image field={fields.sectionImage} />
    </picture>
  </div>
);

export default withDatasourceCheck()<AccordionTabImageProps>(AccordionTabImage);
