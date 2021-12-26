import { Link, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import DelayLink from 'components/DelayLink';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useRouteContext } from 'context/RouteContext';

export type MenuOfSidebarType = {
  label: string;
  href: string;
};

export type MenuListType = { menuList: Array<MenuOfSidebarType> };

const Sidebar: React.FC<MenuListType> = ({ menuList }) => {
  const location = useLocation();
  const { loading, setLoading } = useRouteContext();

  const renderMenu = useMemo(
    () =>
      menuList.map((menu) => (
        <div
          key={menu?.label}
          className={classNames(
            styles.menu,
            location.pathname.slice(1) === menu?.href && styles.active
          )}
        >
          <DelayLink
            to={menu?.href}
            data-type="menu"
            data-href={menu?.href}
            onDelayStart={() => setLoading(true)}
            delay={500}
          >
            <div className={styles.icon}>{menu.label.slice(0, 1)}</div>
            <span>{menu?.label}</span>
          </DelayLink>
        </div>
      )),
    [menuList]
  );

  const onClickMenu = (e: any) => {
    const el = e.target.parentNode.getBoundingClientRect();

    const selector = document.querySelector(
      'div[data-type="selector-bg"]'
    ) as HTMLElement;

    selector.style.top = `calc(${el.top - 5}px - 1rem)`;
    selector.style.height = el.height + 'px';
  };

  useEffect(() => {
    const el = (
      document.querySelector(
        `a[data-href="${location.pathname.slice(1)}"]`
      ) as HTMLElement
    ).parentElement?.getBoundingClientRect() as DOMRect;

    const selector = document.querySelector(
      'div[data-type="selector-bg"]'
    ) as HTMLElement;

    selector.style.top = `calc(${el.top - 5}px - 1rem)`;
    selector.style.height = el.height + 'px';
  }, []);

  useEffect(() => {
    const menuList = document.querySelectorAll('a[data-type="menu"');

    menuList.forEach((el) => el.addEventListener('click', onClickMenu));

    return () =>
      menuList.forEach((el) => el.removeEventListener('click', onClickMenu));
  }, []);

  return (
    <div className={styles['wrapper-container']}>
      <div className={styles.container}>
        <div className={styles['selector-bg']} data-type="selector-bg"></div>
        {renderMenu}
      </div>
    </div>
  );
};

export default Sidebar;
