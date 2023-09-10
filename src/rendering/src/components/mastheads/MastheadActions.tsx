import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { MastheadActionsFields } from './types/MastheadActionsFields';

type MastheadActionsProps = ComponentProps & {
  fields: MastheadActionsFields;
};

const MastheadActions = ({ fields }: MastheadActionsProps): JSX.Element => {
  const renderPrimary = fields.primaryLink.value && fields.primaryLink.value.href;
  const renderSecondary = fields.secondaryLink.value && fields.secondaryLink.value.href;
  return (
    <>
      {renderPrimary && <Link field={fields.primaryLink} className="btn btn--primary btn--lg" />}
      {renderSecondary && (
        <Link field={fields.secondaryLink} className="btn btn--secondary btn--lg" />
      )}
    </>
  );
};

export default MastheadActions;
