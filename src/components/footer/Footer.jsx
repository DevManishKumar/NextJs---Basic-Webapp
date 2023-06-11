import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div> ©️ 2023 DevManish.</div>
      <div className={styles.social}>
        <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="denman" />
        <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="denman" />
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="denman" />
        <Image src="/linkedin.png" width={15} height={15} className={styles.icon} alt="denman" />
      </div>
    </div>
  );
};
export default Footer;
