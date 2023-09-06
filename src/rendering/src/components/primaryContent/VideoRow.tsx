import { getLabelsForView } from '@constellation4sitecore/foundation-labels';
import {
  Field,
  GetStaticComponentProps,
  Image,
  ImageField,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { VideoLabels, videoLabelsId } from 'src/labels/videos/VideoLabels';
import { VideoProviderSetting } from 'src/types/Video/VideoProviderSettings';

type VideoRowProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    sectionImage: ImageField;
    caption: Field<string>;
    videoID: string;
    videoProvider: VideoProviderSetting;
  };
  labels: VideoLabels;
};

const VideoRow = ({ fields, labels }: VideoRowProps): JSX.Element => (
  <>
    {/* {fields.videoProvider?.fields?.providerID && fields.videoID && fields.videoID.length > 0 && ( */}
    <>
      <section
        className="full-width-video"
        aria-labelledby="fullWidthVideoHeading"
        data-module="fullWidthVideo"
      >
        {!(fields.videoID && fields.videoID.length > 0) ||
          (fields.videoProvider?.fields.providerID == null && (
            <>
              {fields.videoID && fields.videoID.length > 0 && (
                <div className="video">
                  <p>
                    No video specified for playback. Please use the Edit button on the floating
                    toolbar to supply a video ID.
                  </p>
                </div>
              )}
              {fields.videoProvider?.fields.providerID == null && (
                <div className="video">
                  <p>
                    No video provider selected. Please use the Edit button on the floating toolbar
                    to specify a video provider.
                  </p>
                </div>
              )}
            </>
          ))}
        <figure className="full-width-video__wrapper">
          <div
            className="video"
            data-module="video"
            data-video-player="youtube"
            data-video-id="DSLgAsrcpGQ"
            data-video-auto-play="false"
          >
            <div className="video__background"></div>
            {fields.sectionImage.value?.src && (
              <picture className="video__poster">
                <Image field={fields.sectionImage} />
              </picture>
            )}
            <svg viewBox="0 0 495 495" className="video_svg">
              <use xlinkHref="#play" />
            </svg>
            {/* <span>SVG Commented</span> */}
          </div>
          <div className="full-width-video__overlay">
            <button className="full-width-video__play-button">
              <svg aria-label={labels?.playVideo.value}>
                <use xlinkHref="#play-outline" />
              </svg>
              {/* <span>SVG Commented</span> */}
            </button>
            <Text
              tag="h2"
              className="full-width-video__heading"
              id="fullWidthVideoHeading"
              field={fields.heading}
            />
          </div>
        </figure>
        <RichText tag="div" className="full-width-video__caption rtf" field={fields.caption} />
      </section>
    </>
    {/* )} */}
  </>
);

export const getStaticProps: GetStaticComponentProps = async () => {
  const labels = await getLabelsForView<VideoLabels>(videoLabelsId);
  return { labels: labels };
};

export default withDatasourceCheck()<VideoRowProps>(VideoRow);
