import Navbar from "./ui/Navbar";
import Menu from "./ui/Menu";
import Cart from "./ui/Cart";
import { useState } from "react";

export default function Nav() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
}
