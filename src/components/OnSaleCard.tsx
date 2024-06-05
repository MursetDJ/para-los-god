import styles from "./OnSaleCard.module.css";

export default function OnsaleCard(props) {
    // Desestructuración de objetos
    const { title, price, color, image } = props;
    return (

        <>
            <img className={styles["product-img"]} src={image} alt={title} />
            <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>{title}</span>
                <span className={styles["product-description"]}>{color}</span>
                <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}>Desde S/{price}</span>
                </div>
                <div className={styles["onsale-price-block"]}>
                    <span className={styles["onsale-price"]}>S/{price / 2}</span>
                    <span className={styles["discount"]}>50% Off</span>
                </div>

                <div className={styles["product-tax-policy"]}>
                    Includes Country tax and AFIP collection
                </div>
            </div>
        </>
        //</a>
    );
}