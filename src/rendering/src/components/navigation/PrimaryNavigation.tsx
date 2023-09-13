import { NavigationLink, getNavLinks } from '@constellation4sitecore/feature-navigation';
import { GraphNavigationMenu } from '@constellation4sitecore/feature-navigation/types/models/navigation-menu';
import { mapToNew } from '@constellation4sitecore/foundation-mapper';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PrimaryNavigationProps = ComponentProps & {
  navigation: GraphNavigationMenu;
};

const PrimaryNavigation = ({ navigation }: PrimaryNavigationProps) => (
  <nav className="header__primary-navigation">
    <ul>
      {navigation?.items?.children?.results?.map((item) => {
        console.log(item);
        if (item.template.name == 'Navigation Link') {
          const link = mapToNew<NavigationLink>(item);
          return (
            <li key={item.id}>
              <a className="link" href={link?.link.value.href}>
                {link?.useThisDisplayName ? item.displayName : link?.link.value.text}
              </a>
            </li>
          );
        }
        return;
      })}
    </ul>
  </nav>
);

export const getStaticProps = async (rendering: ComponentRendering) => {
  const navigation = {
    items: {
      children: await getNavLinks(rendering.dataSource as string),
    },
  };

  return { navigation };
};

export default PrimaryNavigation;
