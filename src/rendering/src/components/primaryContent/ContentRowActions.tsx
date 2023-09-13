import { Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { ContentRowActionsFields } from './types/ContentRowActionsFields';

type ContentRowActionsProps = ComponentProps & {
  fields: ContentRowActionsFields;
};

const ContentRowActions = ({ fields }: ContentRowActionsProps): JSX.Element => {
  const renderPrimary = fields.primaryLink.value && fields.primaryLink.value.href;
  const renderSecondary = fields.secondaryLink.value && fields.secondaryLink.value.href;
  return (
    <>
      <aside className="buttons-row">
        {renderPrimary && <Link field={fields.primaryLink} className="btn btn--primary" />}
        {renderSecondary && (
          <Link field={fields.secondaryLink} className="link link--primary">
            {/* <svg viewBox="0 0 6 10" className="link__icon link__icon--right">
              <use xlinkHref="#chevron-right" />
            </svg> */}
            <span>SVG Commented</span>
          </Link>
        )}
      </aside>
    </>
  );
};

export default withDatasourceCheck()<ContentRowActionsProps>(ContentRowActions);
