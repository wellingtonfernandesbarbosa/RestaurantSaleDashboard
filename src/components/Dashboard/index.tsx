import styles from "./Dashboard.module.scss";

const list = Array.from({ length: 100 }, (_, i) => i + 1);

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <ul className={styles.container__list}>
        {list.map((i) => (
          <li key={i} className={styles.container__list__item}>
            <a className={styles.container__list__item__link} href="#">
              <div className={styles.container__list__item__link__content}>{i}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
