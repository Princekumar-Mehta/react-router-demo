import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./componenets/Home";
// import { About } from "./componenets/About";
import { Navbar } from "./componenets/Navbar";
import { OrderSummary } from "./componenets/OrderSummary";
import { NoMatch } from "./componenets/NoMatch";
import { Products } from "./componenets/Products";
import { FeaturedNewProducts } from "./componenets/FeaturedNewProducts";
import { NewProducts } from "./componenets/NewProducts";
import { Users } from "./componenets/Users";
import { UserDetails } from "./componenets/UserDetails";
import { Admin } from "./componenets/Admin";
import { Profile } from "./componenets/Profile";
import { AuthProvider } from "./utils/auth";
import { Login } from "./componenets/Login";
import { RequireAuth } from "./componenets/RequireAuth";

const LazyAbout = React.lazy(() => import("./componenets/About"));
function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="About is large so to give less load we use lazy Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedNewProducts />} />
          <Route path="featured" element={<FeaturedNewProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        {/*<Route path="users/:userId" element={<UserDetails />} />{" "}
        
        userID is Param
        this is dynamic route search: localhost:3000/usrs/1 ,
         or in place of 1 use xyz ,2 , 3 , 100
        <Route path="users/admin" element={<Admin />} />*/}
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
