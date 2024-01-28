import { Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { ContentRowImageFields } from './types/ContentRowImageFields';

type ContentRowImageProps = ComponentProps & {
  fields: ContentRowImageFields;
};

const ContentRowImage = ({ fields }: ContentRowImageProps): JSX.Element => (
  <div>
    <picture>
      <Image field={fields.sectionImage} />
    </picture>
  </div>
);

export default withDatasourceCheck()<ContentRowImageProps>(ContentRowImage);
