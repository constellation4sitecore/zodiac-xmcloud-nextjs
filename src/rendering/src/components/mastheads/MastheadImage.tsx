import { Image } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { MastheadMediaFields } from './types/MastheadMediaFields';

type MastheadImageProps = ComponentProps & {
  fields: MastheadMediaFields;
};

const MastheadImage = ({ fields }: MastheadImageProps): JSX.Element => {
  return (
    <picture>
      <Image field={fields.mastheadImage} className="masthead__image" />
    </picture>
  );
};

export default MastheadImage;
