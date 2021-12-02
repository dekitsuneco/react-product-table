import React from 'react';

export function SearchBar(props) {
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    return (
        <form>
            <input 
                type="text" 
                placeholder="Search.." 
                value={filterText} 
                onChange={event => props.onFilterTextChange(event.target.value)} 
                className="shadow appearance-none border-none rounded w-full py-2 px-3 mb-4 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p>
                <input 
                    type="checkbox"
                    checked={inStockOnly} 
                    onChange={event => props.onInStockChange(event.target.checked)}
                    className="mr-2 leading-tight"
                /> 
                <span className="text-sm">Only show products in stock</span>
                
            </p>
        </form>
    );
}
