import { Sidebar } from 'components';
import styles from './styles.module.scss';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Sidebar
        menuList={[
          { label: 'ABOUT', href: 'about' },
          { label: 'SKILL', href: 'skill' },
          { label: 'WORK', href: 'work' },
          { label: 'CONTACT', href: 'contact' },
        ]}
      />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
