import styles from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <div className={styles.description}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </div>
    </div>
  );
}
