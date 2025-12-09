import { AlertBox } from "./components/AlertBox/AlertBox";
import { useState } from "react";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };
  const user = {
    id: "1",
    name: "Vanessa sierra",
    email: "vanessa.sierra@gmail.com",
    role: "CEO",
    avatarUrl: "https://avatar.iran.liara.run/public",
  };
  const product = {
    id: "1",
    name: "Uv Bird Lamp",
    price: 50.99,
    description:
      "Full-spectrum lighting with UV-A and UV-B is important for birds' vitamin D and calcium metabolism, and behavioral health, mimicking natural sunshine.",
    imageUrl: "/images/heatlamp.png",
    inStock: true,
  };

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard user={user} showEmail={true} showRole={true} />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default App;

//CREATE YOUR PRODUCT DISPLAY USE THE ALERTBOX AS AN EXAMPLE . you dont need to add another object in your product display.
