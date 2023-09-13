import {
  Placeholder,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { AccordionContainerFields } from './types/AccordionContainerFields';

type AccordionContainerProps = ComponentProps & {
  fields: AccordionContainerFields;
};

const AccordionContainer = ({ fields, rendering }: AccordionContainerProps): JSX.Element => (
  <>
    <section className="accordion container" data-module="accordion">
      <header className="accordion__header">
        <Text className="accordion__title" field={fields.heading} tag="h2" />
        {fields.introText.value.length > 0 && (
          <RichText className="accordion__description rtf" field={fields.introText} tag="div" />
        )}
      </header>
      <div className="accordion__items">
        <Placeholder name="AccordionTabs" rendering={rendering} />
      </div>
    </section>
  </>
);

export default withDatasourceCheck()<AccordionContainerProps>(AccordionContainer);
