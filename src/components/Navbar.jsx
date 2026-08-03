import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#232f3e] text-white">

      <div className="flex items-center px-4 h-10 text-sm font-medium">

        <div className="flex items-center mr-5 cursor-pointer">
          <Menu size={20} />
          <span className="ml-1">All</span>
        </div>

        <div className="flex gap-6">

          <p className="cursor-pointer">Fresh</p>

          <p className="cursor-pointer">Prime Video</p>

          <p className="cursor-pointer">Sell</p>

          <p className="cursor-pointer">Bestsellers</p>

          <p className="cursor-pointer">Today's Deals</p>

          <p className="cursor-pointer">Mobiles</p>

          <p className="cursor-pointer">New Releases</p>

          <p className="cursor-pointer">Prime</p>

          <p className="cursor-pointer">Amazon Pay</p>

          <p className="cursor-pointer">Electronics</p>

          <p className="cursor-pointer">Customer Service</p>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;