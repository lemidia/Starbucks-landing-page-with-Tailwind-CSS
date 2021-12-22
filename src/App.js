import { useState } from "react";
import BoxA from "./components/BoxA";
import BoxB from "./components/BoxB";
import BoxC from "./components/BoxC";
import BoxD from "./components/BoxD";
import BoxE from "./components/BoxE";
import BoxF from "./components/BoxF";
import Desc from "./components/Desc";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`App font-opensans relative overflow-x-hidden ${
        open && "max-h-screen overflow-y-hidden"
      }`}
    >
      <Nav open={open} setOpen={setOpen} />
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxE />
      <BoxF />
      <Desc />
      <Footer />
      <MobileNav open={open} />
    </div>
  );
}

export default App;
