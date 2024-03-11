import MainLayout from "@/layouts/mainLayout";
import styles from "../../styles/Info.module.scss";
import { useEffect, useState } from "react";
export default function Info() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUsername(userData.username);
  }, []);

  return (
    <MainLayout>
      <div className={styles.Container}>
        <h1>Info of the project</h1>
        <h3>Hello {username}</h3>
        <p>
          My name is Carlo, this web app was developed in react and sass with
          next.js.
        </p>
      </div>
    </MainLayout>
  );
}
