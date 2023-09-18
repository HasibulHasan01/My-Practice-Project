import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineCoffee } from 'react-icons/ai';

const Navbar = () => {
    const [navData, setNavData] = useState([])
  useEffect(() => {
    fetch("navbarData.json")
      .then((res) => res.json())
      .then((data) => setNavData(data));
  }, []);

  return (
    <div className="flex justify-around items-center mb-12">
        <div className="flex items-center">
            <AiOutlineCoffee className="text-6xl text-violet-500"></AiOutlineCoffee>
            <h1 className="text-5xl font-semibold font-mono">Coffee Shop</h1>
        </div>
        <ul className="flex">
            {
                navData.map((data)=>(
                    <li className="mr-6 p-8 text-2xl cursor-pointer" key={data.id}>{data.name}</li>
                ))
            }
        </ul>
    </div>
  );
};

export default Navbar;
