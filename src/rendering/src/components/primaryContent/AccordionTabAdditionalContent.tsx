import { Field, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type AccordionTabAdditionalContent = ComponentProps & {
  fields: {
    copy: Field<string>;
  };
};

const AccordionTabAdditionalContent = ({ fields }: AccordionTabAdditionalContent): JSX.Element => (
  <>
    <Text field={fields.copy} />
  </>
);

export default withDatasourceCheck()<AccordionTabAdditionalContent>(AccordionTabAdditionalContent);
