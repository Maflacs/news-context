import React, { useContext } from "react";
import styles from "./ChangeTheme.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import sun from "../../assets/img/pngtree-cartoon-cute-cute-little-sun-png-image_4628469.jpg";
import moon from "../../assets/img/moon-crescent-png.webp";

const ChangeTheme = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={styles.toggle}>
      <img src={sun} alt="sun" className={styles.icon} />
      <img src={moon} alt="moon" className={styles.icon} />
      <div
        className={styles.button}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default ChangeTheme;
