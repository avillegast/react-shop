import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';

const OrderItem = (props) => {

	const { productItem, indexValue} = props;
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={productItem.images[0]} alt={productItem.title} />
			</figure>
			<p>{productItem.title}</p>
			<p>${productItem.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(indexValue)}/>
		</div>
	);
}

export default OrderItem;
