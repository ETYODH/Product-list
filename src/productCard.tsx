
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  added: boolean;
  onAdd: () => void;
  onRemove: () => void;
};

function ProductCard({
  product,
  added,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="overflow-hidden bg-[#181a1b] transition hover:bg-[#202223]">
      <img
        src={product.image}
        alt={product.name}
        className="h-[120px] w-full object-cover sm:h-[120px]"
      />

      <div className="p-2.5">
        <h2 className="text-xs font-semibold text-white">
          {product.name}
        </h2>

        <p className="mt-3 text-xs font-bold text-white">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        {added ? (
          <button
            onClick={onRemove}
            className="mt-5 w-full bg-[#29272b] py-1.5 text-xs text-white hover:bg-red-700"
          >
            Added ✓
          </button>
        ) : (
          <button
            onClick={onAdd}
            className="mt-5 w-full bg-emerald-700 py-1.5 text-xs text-white transition hover:bg-emerald-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
