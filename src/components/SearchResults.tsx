import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{ id: number, price: number; title: number; }>
}

export function SearchResults({ results }: SearchResultsProps) {

    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0);
    }, [results]);


    return (
        <div>
            <h2>{totalPrice}</h2>

            {/* <Component totalPrice={totalPrice} /> */}

            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} />
                );
            })}
        </div>
    );
};