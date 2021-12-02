import React from 'react';

export function ProductCategoryRow(props) {
    const category = props.category;

    return (
        <tr>
            <th colSpan="2" className="text-yellow-600 bg-gray-800 border-b border-gray-700 py-2">
                {category}
            </th>
        </tr>
    );
}
