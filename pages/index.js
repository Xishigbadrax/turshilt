import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Sum from "./components/sum";

export default function Home() {
  const [Aimag, setAimag] = useState(null);
  // const [Test, setTest] = useState(null);

  // function handleChange(e) {
  //   setAimag(e.target.value);
  //   console.log(Aimag);
  // }

  useEffect(() => {
    console.log("===>" + Aimag);
  }, [Aimag]);

  return (
    <div className={styles.container}>
      <form>
        <label>
          Аймаг
          <select onChange={(e) => setAimag(e.target.value)}>
            <option></option>
            <option value="Arhangai">Архангай</option>
            <option value="Hentii">Хэнтий</option>
          </select>
          <Sum aimagName={Aimag} />
        </label>
        <button type="submit"> Сонгох </button>
      </form>
    </div>
  );
}
