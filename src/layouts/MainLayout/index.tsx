import { Sidebar } from 'components';
import styles from './styles.module.scss';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Sidebar
        menuList={[
          { label: 'MENU1', href: 'menu1' },
          { label: 'MENU2', href: 'menu2' },
          { label: 'MENU3 MENU3 MENU3 MENU3 MENU3', href: 'menu3' },
        ]}
      />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
