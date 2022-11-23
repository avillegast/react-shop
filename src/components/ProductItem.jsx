import React, {useContext, useState} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartimg from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	const handClick = (item) =>{
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handClick(product)}>
					<img src={addToCartimg} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
