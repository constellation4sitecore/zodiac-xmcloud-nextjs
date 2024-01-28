import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps;

const Header = ({ rendering }: HeaderProps) => (
  <header className="header">
    <div className="header__logo">
      <a href="/">
        <Placeholder name="headless-header-logo" rendering={rendering} />
      </a>
    </div>
    <div className="header__primary-navigation">
      <Placeholder name="headless-primary-nav" rendering={rendering} />
    </div>
  </header>
);

export default Header;
