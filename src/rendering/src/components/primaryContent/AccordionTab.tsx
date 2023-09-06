import {
  Field,
  Placeholder,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type AccordionTabProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    expanded: Field<boolean>;
  };
};

const AccordionTab = ({ fields, rendering }: AccordionTabProps): JSX.Element => {
  const expandedValue = fields.expanded.value ? 'true' : 'false';
  return (
    <>
      <article className="accordion__item">
        <button className="accordion__item-trigger" aria-expanded={expandedValue}>
          <Text field={fields.heading} tag="h3" />
          <span className="accordion__item-icon">
            <svg viewBox="0 0 14 2" className="accordion__item-icon-minus">
              <use xlinkHref="#minus" />
            </svg>
            <svg viewBox="0 0 14 14" className="accordion__item-icon-plus">
              <use xlinkHref="#plus" />
            </svg>
          </span>
        </button>
        <div role="region" className="accordion__item-panel">
          <div className="accordion__item-content">
            <div className="rtf accordion__item-description">
              <RichText field={fields.copy} />
              <Placeholder name="AccordionTabContent" rendering={rendering} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default withDatasourceCheck()<AccordionTabProps>(AccordionTab);
