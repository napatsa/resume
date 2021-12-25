import { Link, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type MenuOfSidebarType = {
  label: string;
  href: string;
};

export type MenuListType = { menuList: Array<MenuOfSidebarType> };

const Sidebar = ({ menuList }: MenuListType) => {
  const location = useLocation();

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
          <Link to={menu?.href} data-type="menu" data-href={menu?.href}>
            {menu?.label}
          </Link>
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
    <div className={styles.container}>
      <div className={styles['selector-bg']} data-type="selector-bg"></div>
      {renderMenu}
    </div>
  );
};

export default Sidebar;
