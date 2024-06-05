import { useState } from "react";
import products from "../assets/products";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import OnsaleCard from "../components/OnSaleCard";
import styles from "./Offers.module.css";
function Offers() {
    const onsale = products.filter((product) => product.onsale === true);
    const page1 = onsale.slice(0, 2);
    const page2 = onsale.slice(2, 4);
    const [actualPage, setActualPage] = useState(page1);
    return <>
        <NavBar />
        <Hero first="Principales" second="ofertas" />
        <div className={styles["text-example"]}>Ofertas</div>
        {actualPage.map((product) => (
            <OnsaleCard title={product.title} price={product.price} color={product.colors[0]} image={product.images[0]} />
        ))}
        <div>
            <button onClick={() => setActualPage(page1)}>1</button>
            <button onClick={() => setActualPage(page2)}>2</button>
        </div>
        <Footer />
    </>
}

export default Offers