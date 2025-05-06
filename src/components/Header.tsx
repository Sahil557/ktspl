'use client';

// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';
// import Button from '../common/Button';

// const Header = () => {
//     const handleSaveClick = () => {
//         // alert('Save button clicked!');
//       };
//   return (
//     <header className="text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//       <Link href="/" className="flex items-center space-x-2">
//           <Image src="/logo.png" alt="Logo" width={142} height={51} />
//         </Link>
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <Link href="/" className="hover:text-gray-400">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about-us" className="hover:text-gray-400">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/key-projects" className="hover:text-gray-400">
//                 Key Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" className="hover:text-gray-400">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/projects" className="hover:text-gray-400">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="/testimonials" className="hover:text-gray-400">
//               Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact-us" className="hover:text-gray-400">
//                 Contact Us
//               </Link>
//             </li>
//             <Button
//         text="Save"
//         color="bg-green-500"
//         textColor="text-white"
//         size="py-3 px-6"
//         textSize="text-lg"
//         onClick={handleSaveClick}  // Pass the handler here
//       />
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';
import Iconic from "@/common/Iconic";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="mx-auto max-w-screen-[1183px]">
      <div className="container py-6 flex items-center gap-40">
        <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={142} height={51} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-white hover:text-[#e6b800] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#e6b800] transition-colors">
            About Us
          </Link>
          <Link href="/projects" className="text-white hover:text-[#e6b800] transition-colors">
            Key Projects
          </Link>
          <Link href="/services" className="text-white hover:text-[#e6b800] transition-colors">
            Services
          </Link>
          <Link href="/products" className="text-white hover:text-[#e6b800] transition-colors">
            Products
          </Link>
          <Link href="/testimonials" className="text-white hover:text-[#e6b800] transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="text-white hover:text-[#e6b800] transition-colors">
            Contact Us
          </Link>
          {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="bg-[#e6b800] hover:bg-[#d4a900] text-[#0a0a3c] font-medium px-4 py-2 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>
        </nav>

        

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <div>Cross Menu</div> : <div>Mobile Menu</div>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a3c] border-t border-gray-700">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Key Projects
            </Link>
            <Link
              href="/services"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/testimonials"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-white hover:text-[#e6b800] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/get-started"
              className="block mt-4 bg-[#e6b800] hover:bg-[#d4a900] text-[#0a0a3c] font-medium px-4 py-2 rounded-md text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
