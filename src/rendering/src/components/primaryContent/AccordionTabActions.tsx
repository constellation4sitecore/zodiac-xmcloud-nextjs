import { Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { AccordionTabActionsFields } from './types/AccordionTabActionsFields';

type AccordionTabActionsProps = ComponentProps & {
  fields: AccordionTabActionsFields;
};

const AccordionTabActions = ({ fields }: AccordionTabActionsProps): JSX.Element => {
  const renderPrimary = fields.primaryLink.value && fields.primaryLink.value.href;
  const renderSecondary = fields.secondaryLink.value && fields.secondaryLink.value.href;
  return (
    <>
      <aside className="buttons-row">
        {renderPrimary && <Link field={fields.primaryLink} className="btn btn--primary" />}
        {renderSecondary && <Link field={fields.secondaryLink} className="btn btn--secondary" />}
      </aside>
    </>
  );
};

export default withDatasourceCheck()<AccordionTabActionsProps>(AccordionTabActions);
