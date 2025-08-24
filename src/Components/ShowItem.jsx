import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createUnifiedProducts } from "../Data/ProductsItems";
import Loader from "../Components/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";

function ShowItem() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [addSuccess, setAddSuccess] = useState(false);

  const dispatch = useDispatch();

  // Ensure id is parsed as a number for comparison
  const allProducts = createUnifiedProducts();
  const item = allProducts.find(
    (product) =>
      String(product.globalId) === String(id) ||
      Number(product.globalId) === Number(id)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!item && !loading) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">Item Not Found</h1>
        <p>No item found with ID: {id}</p>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  const formatPrice = (price) => {
    if (typeof price === "string" && price.includes("₹")) {
      return price;
    }
    return `$${price}`;
  };

  const handleAddToCart = () => {
    if (!item) return;
    dispatch(addToCart({ ...item }));
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 1200);
  };

  return (
    <div className="py-20 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold">Size:</span> {item.size}
              </p>
              <p className="text-2xl font-bold text-green-600">
                {formatPrice(item.price)}
              </p>
              {item.originalPrice && (
                <p className="text-lg text-gray-500 line-through">
                  {formatPrice(item.originalPrice)}
                </p>
              )}
              {item.discount && (
                <p className="text-sm text-red-600 font-semibold">
                  {item.discount}
                </p>
              )}
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Delivery:</span> {item.deliveryTime}
              </p>
              {item.ali && (
                <p className="text-sm text-blue-600">
                  <i className="ri-check-line mr-1"></i>
                  Available for delivery
                </p>
              )}
            </div>

            <button
              className={`mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full font-semibold ${
                addSuccess ? "opacity-70 cursor-not-allowed" : ""
              }`}
              onClick={handleAddToCart}
              disabled={addSuccess}
              type="button"
            >
              {addSuccess ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowItem;
