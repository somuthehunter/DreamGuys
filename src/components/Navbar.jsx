import logo from "../assets/logo.png";
import { navItems } from "../constant";
import { useState } from "react";
import {Phone , MessageCircle , Menu ,X} from "lucide-react"
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-100/80">
          <div className="container px-4 mx-auto relative text-sm">
              <div className="flex justify-between items-center">
                  <div className="flex items-center flex-shrink-0">
                      <img className="h-20 w-20 mr-2" src={logo} alt="logo" />
                      <span className="text-xl tracking-tight">DreamGuys</span>
                  </div>
                  <ul className="hidden lg:flex ml-14 space-x-12">
                      {navItems.map((item, index) => (
                          <li key = {index}>
                              <a href={item.href} className="hover:text-purple-600 transition" >{ item.label }</a>
                          </li>
                      ))}
                  </ul>
                  <div className="hidden lg:flex justify-center space-x-12 items-center">
                      <a href="tel:+916295184794" className="py-2 px-3 border rounded-md"><Phone className="h-5 w-5 text-blue-600" /></a>
                      <a href="https://wa.me/+916295184794" className="border py-2 px-3 rounded-md"><MessageCircle className="h-5 w-5 text-green-400" /></a>
                  </div>
                  <div className="lg:hidden md:flex flex-col justify-end">
                      <button onClick={toggleNavbar}>
                          {mobileDrawerOpen ? <X/> : <Menu/>}
                      </button>
                  </div>
              </div>
              {mobileDrawerOpen && (
                  <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center  lg:hidden">
                      <ul>
                          {navItems.map((item, index) => (
                            
                              <li key={index} className="py-2">
                                  <a href={item.href}> { item.label } </a>
                              </li>

                          ))}
                      </ul> 
                      <div className="flex space-x-6 mt-5 ">
                         <a href="tel:+916295184794" className="py-2 px-3 border rounded-md"><Phone className="h-5 w-5 text-blue-600" /></a>
                      <a href="https://wa.me/+916295184794" className="border py-2 px-3 rounded-md"><MessageCircle className="h-5 w-5 text-green-400" /></a>
                      </div>
                      
                  </div>
              )}
          </div>

   </nav>
  )
}

export default Navbar
