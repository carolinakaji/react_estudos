import styles from './CarDetails.module.css';

const CarDetails = ({brand, color, model, year, price, info}) => {
  return (
    <div className={styles.car_details_card}>
      <h2>{brand} - {model}</h2>
      <p><span className={styles.car_details_detail}>Cor:</span> {color}</p>
      <p><span className={styles.car_details_detail}>Ano:</span> {year}</p>
      <p><span className={styles.car_details_detail}>Preço:</span> {price}</p>
      <p><span className={styles.car_details_detail}>Informações:</span> {info}</p>
    </div>
  )
}

export default CarDetails