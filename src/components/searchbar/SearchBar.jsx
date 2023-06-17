import styles from "./SearchBar.module.css"

export default function SearchBar(onSearch) {
   return (
      <div className={styles.container}>
         <input type='search' />
         <button onClick={() => onSearch(1)}>Agregar</button>
      </div>
   );
}
