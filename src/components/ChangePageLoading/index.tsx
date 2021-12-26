import classNames from 'classnames';
import styles from './styles.module.scss';

const Loading: React.FC<any> = ({ children, loading }) => {
  return (
    <>
      <div className={classNames(styles.container, !loading && styles.active)}>
        <div></div>
      </div>
      {children}
    </>
  );
};

export default Loading;
