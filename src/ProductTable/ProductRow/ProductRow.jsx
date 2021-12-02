import React from "react";
import "tailwindcss/tailwind.css";

export function ProductRow(props) {
    const product = props.product;
    const name = product.stocked ?
        product.name :
        (
            <span className="text-red-600">
                {product.name}
            </span>
        );

    return (
        <tr className="border-b border-gray-700">
            <td className="p-1">{name}</td>
            <td className="p-1 text-right">{product.price}</td>
        </tr>
    );
}
