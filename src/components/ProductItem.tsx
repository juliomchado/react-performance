import { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number,
        price: number;
        priceFormatted: string;
        title: number;
    }
    onAddToWishList: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to with list</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});