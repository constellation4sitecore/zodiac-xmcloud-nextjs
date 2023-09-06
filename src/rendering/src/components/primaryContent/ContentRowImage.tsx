import { Image, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type ContentRowImageProps = ComponentProps & {
  fields: {
    sectionImage: ImageField;
  };
};

const ContentRowImage = ({ fields }: ContentRowImageProps): JSX.Element => (
  <div>
    <picture>
      <Image field={fields.sectionImage} />
    </picture>
  </div>
);

export default withDatasourceCheck()<ContentRowImageProps>(ContentRowImage);
