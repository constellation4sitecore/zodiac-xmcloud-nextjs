import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type VideoProviderSetting = {
  fields: {
    displayName: Field<string>;
    providerID: Field<string>;
  };
};
