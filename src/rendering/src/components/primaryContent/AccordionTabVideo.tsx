import { Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { AccordionTabVideoFields } from './types/AccordionTabVideoFields';

type AccordionTabVideoProps = ComponentProps & {
  fields: AccordionTabVideoFields;
};

const AccordionTabVideo = ({ fields }: AccordionTabVideoProps): JSX.Element => (
  <>
    {fields.videoID && fields.videoProvider?.fields.providerID && (
      <div className="accordion__video">
        {!fields.videoID && (
          <div className="video">
            <p>
              No video specified for playback. Please use the Edit button on the floating toolbar to
              specify a video.
            </p>
          </div>
        )}
        <figure
          className="video"
          data-module="video"
          data-video-player={fields.videoProvider.fields.providerID}
          data-video-id={fields.videoID}
          data-video-auto-play="false"
        >
          <div className="video__background"></div>
          <picture className="video__poster">
            <Image field={fields.sectionImage} />
          </picture>
          {/* <svg viewBox="0 0 495 495" className="video_svg">
            <use xlinkHref="#play" />
          </svg> */}
          <span>SVG Commented</span>
        </figure>
      </div>
    )}
  </>
);

export default withDatasourceCheck()<AccordionTabVideoProps>(AccordionTabVideo);
