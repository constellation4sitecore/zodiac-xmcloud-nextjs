import { Image } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { MastheadMediaFields } from './types/MastheadMediaFields';

type MastheadVideoProps = ComponentProps & {
  fields: MastheadMediaFields;
};

const MastheadVideo = ({ fields }: MastheadVideoProps): JSX.Element => {
  return (
    <>
      <div
        className="video"
        data-module="video"
        data-video-player={fields.videoProvider?.fields.providerID}
        data-video-id={fields?.videoID}
        data-video-auto-play="false"
      >
        <div className="video__background"></div>
        {fields.mastheadImage.value?.src && (
          <picture className="video__poster">
            <Image field={fields.mastheadImage} />
          </picture>
        )}
        {/* <svg viewBox="0 0 495 495">
          <use xlinkHref="#play" />
        </svg> */}
      </div>
    </>
  );
};

export default MastheadVideo;