import React from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ProductTable } from './ProductTable/ProductTable';

function App(props) {
  const [filterText, setFilterText] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);


  return (
    <div className="flex flex-col pt-10 items-center min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-5">Products</h1>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={txt => setFilterText(txt)} onInStockChange={inStock => setInStockOnly(inStock)} />
      <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default App;
