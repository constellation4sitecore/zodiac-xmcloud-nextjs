import { Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { AccordionTabAdditionalContentFields } from './types/AccordionTabAdditionalContentFields';

type AccordionTabAdditionalContent = ComponentProps & {
  fields: AccordionTabAdditionalContentFields;
};

const AccordionTabAdditionalContent = ({ fields }: AccordionTabAdditionalContent): JSX.Element => (
  <>
    <Text field={fields.copy} />
  </>
);

export default withDatasourceCheck()<AccordionTabAdditionalContent>(AccordionTabAdditionalContent);
