import React from "react";
import "./styles.css";
import LoginMessage from "./components/Login";
import DateShow from "./components/Date";
import Cart from "./components/Cart";
import FeedbackForm from "./components/FormSend";
import UserInfo from "./components/Interface";
import DownloadButton from "./components/DownloadApp/DownloadApp";
import AgeCheck from "./components/AgeCheck/AgeCheck";
import ChangeLanguage from "./components/ChangeLanguage/ChangeLanguage";
import PriceComponent from "./components/PriceComponent";
//!!!!!! 1 Task !!!!!!!!!
// const App: React.FC = () => {
//   return (
//     <>
//       <LoginMessage />

//     </>
//   );
// };
// export default App;

//!!!!!! 2 Task !!!!!!!!!
// const App: React.FC = () => {
//   return (
//     <>
//       <DateShow />
//     </>
//   );
// };
// export default App;

//!!!!!! 3 Task !!!!!!!!!

// const App: React.FC = () => {
//   const [cart, setCart] = React.useState<string[]>([]);
//   const addToCart = () => {
//     setCart((prev) => [...prev, "T-shirt"]);
//   };

//   return (
//     <>
//       <div>
//         <img
//           style={{ width: 300 }}
//           src="https://colorfulstandard.com/cdn/shop/files/CS2056_Male_OversizedOrganicT-Shirt-DeepBlack_2_2adc696d-0930-4a7f-86b1-61ad0c6dc3e9.jpg?v=1745834597&width=3000"
//           alt="T-shirt"
//         />
//         <button onClick={addToCart}>Add to cart</button>
//       </div>
//       <Cart empty={cart.length === 0} />
//     </>
//   );
// };
// export default App;

//!!!!!! 4 Task !!!!!!!!!

// const App: React.FC = () => {
//   return (
//     <>
//       <FeedbackForm />
//     </>
//   );
// };

// export default App;

//!!!!!! 5 Task !!!!!!!!!

// const App: React.FC = () => {
//   const userRole = "admin";
//   return (
//     <>
//       <UserInfo role={userRole} />
//     </>
//   );
// };

// export default App;

//!!!!!! 6 Task !!!!!!!!!

// const App: React.FC = () => {
//   const [theme, setTheme] = React.useState<"light" | "dark">("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className={theme} style={{ height: "100vh", width: "100vw" }}>
//       <p>Current theme: {theme}</p>
//       <button onClick={toggleTheme}>Toggle theme</button>
//     </div>
//   );
// };
// export default App;

//!!!!!! 7 Task !!!!!!!!!

// const App: React.FC = () => {
//   return (
//     <>
//       <DownloadButton />
//     </>
//   );
// };

// export default App;

//!!!!!! 8 Task !!!!!!!!!

// const App: React.FC = () => {
//   const age = 18;
//   return (
//     <>
//       <AgeCheck age={age} />
//     </>
//   );
// };

// export default App;

//!!!!!! 9 Task !!!!!!!!!

// const App: React.FC = () => {
//   const [language, setLanguage] = React.useState<"Ukrainian" | "English">(
//     "English"
//   );
//   return (
//     <>
//       <ChangeLanguage language={language} />
//       <div className="buttonBox">
//         <button onClick={() => setLanguage("English")}>English</button>
//         <button onClick={() => setLanguage("Ukrainian")}>Ukrainian</button>
//       </div>
//     </>
//   );
// };

// export default App;

//!!!!!! 10 Task !!!!!!!!!

const App: React.FC = () => {
  const price = 120;
  const discond = 30;
  return (
    <>
      <PriceComponent price={price} discount={discond} />
    </>
  );
};

export default App;
