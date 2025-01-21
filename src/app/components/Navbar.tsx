/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import { useContext, useEffect, useState } from "react";
import { GoSearch, GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantity }: any = useContext(CartContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/products");
        const products: Product[] = await response.json(); // Explicitly type the API response
  
        // Extract unique tags from the products
        const allTags = products.flatMap((product) => product.tags);
        const uniqueTags = Array.from(new Set(allTags));
        setTags(uniqueTags); // Now TypeScript knows `uniqueTags` is `string[]`
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
  
    fetchTags();
  }, []);

  const handleTagClick = (tag: string) => {
    router.push(`/search/${encodeURIComponent(tag)}`); // Redirect to dynamic route
    setShowDropdown(false); // Close the dropdown
  };

  return (
    <div className="h-20 px-4 lg:px-4 xl:px-64 relative pb-[5%] z-50">
      <header className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src="/icon.jpg"
            alt="icon"
            width={185}
            height={41}
            className="object-cover"
          />
        </Link>
        {/* Desktop Nav (Visible on large devices) */}
        <nav className="hidden lg:flex gap-[60px] lg:h-[100px] lg:items-center whitespace-nowrap font-bold text-xl">
          <Link href="/">Home</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </nav>

        {/* Search and Icons (Visible on large devices) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-2xl">
            <MdOutlinePersonOutline />
          </button>
          <button className="text-xl"  onClick={() => setShowDropdown((prev) => !prev)}>
            <GoSearch />
            
          </button>
          {showDropdown && (
  <div className="absolute top-16 bg-white shadow-md p-4 rounded w-96 z-50">
    {/* Grid Layout for Tags */}
    <div className="grid grid-cols-4 sm:grid-cols-3 gap-4">
      {tags.slice(0, 12).map((tag) => ( // Limit tags to 12
        <div
          key={tag}
          onClick={() => handleTagClick(tag)}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded text-center"
        >
          {tag}
        </div>
      ))}
    </div>
  </div>
)}


        

          {/* Wishlist Icon with Tooltip */}
          <button className="relative text-xl group">
          
              <GoHeart />
           
            <span className="absolute left-1/2 transform -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Wishlist
            </span>
          </button>

          {/* Cart Icon with number of items*/}
          <div className="relative text-[25px]">
            <Link href="/Cart">
              <IoCartOutline />
              <span className="absolute text-[12px] top-0 right-[-5px] bg-red-500 w-[18px] h-[18px] rounded-full text-center text-white font-bold ">{totalQuantity}</span>
            </Link>


          </div>
        </div>



        {/* Mobile and Medium Menu Button */}
        <div className="flex lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>

      {/* Mobile and Medium Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col items-center gap-6 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/Shop" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/Blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-row gap-5">
              <Link href="/Cart" onClick={() => setMenuOpen(false)}>
                Cart

              </Link>
              <div className="relative text-[25px]">
                <Link href="/Cart" onClick={() => setMenuOpen(false)}>
                  <IoCartOutline className="text-xl" />
                  <span className="absolute text-[12px] top-0 right-[-5px] bg-red-500 w-[15px] h-[15px] rounded-full text-center text-white font-bold">{totalQuantity}</span>
                </Link>
              </div>

            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg px-4 py-2 w-60"
              />
              <button className="text-xl">
                <GoSearch />
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
