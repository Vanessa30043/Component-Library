// src/components/ProductDisplay/ProductDisplay.tsx
import React from "react";
import type { ProductDisplayProps } from "../../types";

/*
  ProductDisplay
  - Shows product image (if any), name, price, optional description and stock status.
  - If `onAddToCart` is provided and product is in stock, it shows Add to Cart button.
*/

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  const handleAdd = () => {
    if (onAddToCart) onAddToCart(product.id);
  };

  return (
    <div className="border rounded p-4 bg-white max-w-md shadow-sm">
      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
              No image
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="font-semibold text-lg">{product.name}</div>
          <div className="text-sm text-gray-800">
            ${product.price.toFixed(2)}
          </div>

          {showDescription && (
            <div className="mt-2 text-sm text-gray-600">
              {product.description}
            </div>
          )}

          {showStockStatus && (
            <div className="mt-2 text-sm">
              {product.inStock ? (
                <span className="text-green-700">In Stock</span>
              ) : (
                <span className="text-red-700">Out of Stock</span>
              )}
            </div>
          )}

          {children && (
            <div className="mt-2 text-xs text-gray-500">{children}</div>
          )}

          {onAddToCart && product.inStock && (
            <div className="mt-3">
              <button
                onClick={handleAdd}
                className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

//product.price.toFixed(2) ensures price shows two decimals.//
