import { useState } from "react";
import { FiX } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
const Nab = () => {
    const[open , setopen] = useState(false)
    const routes = [
        { path: '/home', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/services', id: 3, name: 'Services' },
        { path: '/contact', id: 4, name: 'Contact' },
        { path: '/blog', id: 5, name: 'Blog' }
      ];
    return (
        <nav className="px-3 bg-lime-200">
            <div className="py-5 md:hidden  " onClick={()=>setopen(!open)}>
                {
                    open === true? <FiX className="text-2xl "></FiX> : <CiMenuFries className="text-2xl "></CiMenuFries>
                }

                
            </div>
            
            <ul className={`md:flex w-max gap-5 md:static absolute duration-1000 rounded-lg md:shadow-none shadow-lg py-4 ml-5 md:bg-transparent bg-purple-300 ${open ? 'top-12' : '-top-40'}`}>
                {
                    routes.map(route => <li className="hover:bg-red-200 duration-500  px-4 w-full" key={route.id}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
            
        </nav>
    );
};

export default Nab;