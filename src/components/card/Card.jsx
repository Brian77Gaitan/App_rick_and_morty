import React from "react";
import styles from "./Card.module.css"

const Card = (props) => {
   // export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}
               className={styles.button}>X</button>
         </div>
         <div className={styles.imageContainer}>
            <img src={props.image} alt="Not found" />
            <h2 className={styles.name}>{props.name}</h2>
         </div>
         <div className={styles.propsContainer}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         {/* <h2>{props.status}</h2>
         <h2>{props.origin}</h2> */}

      </div>
   );
}

export default Card