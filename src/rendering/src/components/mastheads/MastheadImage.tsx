import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type MastheadImageProps = ComponentProps & {
  fields: {
    mastheadImage: ImageField;
  };
};

const MastheadImage = ({ fields }: MastheadImageProps): JSX.Element => {
  return (
    <picture>
      <Image field={fields.mastheadImage.value} className="masthead__image" />
    </picture>
  );
};

export default MastheadImage;
