import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number,
        price: number;
        priceFormatted: string;
        title: number;
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>

            {/* <Component totalPrice={totalPrice} /> */}

            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishList} />
                );
            })}
        </div>
    );
};