import React from 'react';
import Product from "../partials/cards/Product";
import SubHeader from "../layouts/Subheader";
import { routes } from "../../utils/enum";

const ProductPage = () => {

	return (
		<>
			<SubHeader title="Shops" navTitle="Products" route={routes.PRODUCT} />
			<Product />
		</>
		)

}


export default ProductPage