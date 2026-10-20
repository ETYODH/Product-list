
import { useState } from "react";
import ProductCard from "./productCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 350000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 550000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 4,
    name: "Backpack",
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
];

function App() {
  const [cart, setCart] = useState<number[]>([]);

  function addToCart(id: number) {
    setCart([...cart, id]);
  }

  function removeFromCart(id: number) {
    const index = cart.indexOf(id);

    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <main className="min-h-screen bg-[#090a0c] px-3 py-5 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-7 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold">Product List</h1>
            <p className="text-xs text-gray-400">
              Find your favorite products.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-lg border border-white/10 px-3 py-2 text-xs">
              Cart: {cart.length} items
            </div>

            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs hover:bg-red-700"
              >
                Clear Cart
              </button>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              added={cart.includes(product.id)}
              onAdd={() => addToCart(product.id)}
              onRemove={() => removeFromCart(product.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
