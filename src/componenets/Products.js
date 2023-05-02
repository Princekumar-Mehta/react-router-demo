import React from "react";
import { Link, Outlet } from "react-router-dom";
export function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        {/*<Link to="featured">Featured</Link>
        <Link to="new">New</Link>*/}

        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}
// to="featured" relative link inherit closest route in which they are rendred
// to="/featured" absolute link
