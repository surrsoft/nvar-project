import styles from './style.module.scss';

export default function LayoutMain({children}) {
  return <>
    <div className={styles.con1}>
      {children}
    </div>
  </>
}
