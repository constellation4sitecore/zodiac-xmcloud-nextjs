import { Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { MastheadActionsFields } from './types/MastheadActionsFields';

type MastheadActionsProps = ComponentProps & {
  fields: MastheadActionsFields;
};

const MastheadActions = ({ fields }: MastheadActionsProps): JSX.Element => {
  return (
    <>
      <Link field={fields.primaryLink} className="btn btn-primary btn-lg" />
      <Link field={fields.secondaryLink} className="btn btn-secondary btn-lg" />
    </>
  );
};

export default withDatasourceCheck()<MastheadActionsProps>(MastheadActions);
