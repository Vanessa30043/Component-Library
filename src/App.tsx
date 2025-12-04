

// function App() {
 

//   return (
//     <>
//      <p className="text-2xl text-blue-500"> Hello Vanessa! </p>
      
//     </>
//   )
// }

// export default App
import { AlertBox } from "./components/AlertBox/AlertBox";
import { useState } from "react";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  // const [cartItems, setCartItems] = useState<string[]>([]);
 
  // const handleAddToCart = (productId: string) => {
  //   setCartItems([...cartItems, productId]);
  //   setShowAlert(true);
  // };
 
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
        {/* <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
        />
 
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        /> */}
      </div>
    </div>
  );
};

 export default App


 //CREATE YOUR PRODUCT DISPLAY USE THE ALERTBOX AS AN EXAMPLE . you dont need to add another object in your product display.