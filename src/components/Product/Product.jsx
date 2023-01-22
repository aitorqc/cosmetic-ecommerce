import React, { useState } from 'react';
import {useAutoAnimate} from "@formkit/auto-animate/react";

import css from "./Product.module.css";

import Plane from "../../assets/plane.png";

import { ProductsData } from '../../data/products';

export default function Product() {
    const [parent] = useAutoAnimate();
    const [menuProducts, setMenuProducts] = useState(ProductsData);

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((item) => item.type === type));
    }

    return (
        <div className={css.container}>
            <img src={Plane} alt="Plane" />
            <h1>Our Featured</h1>

            <div className={css.products}>
                <div className={css.menu}>
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skin Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </div>

                <div className={css.list} ref={parent}>
                    {
                        menuProducts.map((product, i) => (
                            <div key={i} className={css.product}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}</span>
                                    <div>Show Now</div>
                                </div>
                                <img src={product.img} alt="" className='img-p' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
