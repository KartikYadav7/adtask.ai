// import { Button} from "./Button"
// import {Link} from 'react-router-dom';
// import AuthContext from "../../context/AuthContext";
// import ScheduleCall from "../Pages/ScheduleCall";
// import { useContext } from "react";

// const Navbar = () => {
//   const {user,logout}= useContext(AuthContext);
//   return (
//     <>
//        <div className="w-3/4 mx-auto py-8">
//         <ul className="flex items-center justify-around border-1  py-4 rounded-b-md border-gray-[#5C6069]">
//           <li className="text-2xl hover:cursor-pointer">adTask.ai</li>
//           <div className="flex items-center justify-around space-x-4">
//             <li className="hover:font-medium cursor-pointer">Products</li>
//             <li className ="hover:font-medium cursor-pointer">Tools</li>
//             <li className="hover:font-medium cursor-pointer">Contact Us</li>
//             {!user ? (
//               <li>
//                 <Link to='/login'>
//                   <Button name="Login" />
//                 </Link>
//               </li>
//             ) : (
//               <>
//                 <li>
//                   <Button
//                   name="Logout"
//                   onClick={logout} />
//                 </li>
//                 </>)}
//             <li>
//               <Link to ='/ScheduleCall'>
//             <Button name = "Schedule a Call " 
//             /></Link>
//             </li>
//           </div>
//         </ul>
//       </div>
//     </>
//   )
// }

// export default Navbar



import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useContext } from "react";
import { Menu, X } from "lucide-react";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const {user,logout}= useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-3/4 mx-auto py-8">
      <div className="flex justify-between items-center py-4  border border-gray-300 px-4 rounded-xl" >
        <h1 className="text-2xl font-bold cursor-pointer">adTask.ai</h1>
        
        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8 cursor-pointer" /> : <Menu className="w-8 h-8 cursor-pointer" />}
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6">
          <li className="hover:font-medium cursor-pointer">Products</li>
          <li className="hover:font-medium cursor-pointer">Tools</li>
          <li className="hover:font-medium cursor-pointer">Contact Us</li>
          {!user ? (
            <li>
              <Link to='/login'>
                <Button name="Login" />
              </Link>
            </li>
          ) : (
            <li>
              <Button name="Logout" onClick={logout} />
            </li>
          )}
          <li>
            <Link to='/ScheduleCall'>
              <Button name="Schedule a Call" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 py-4 shadow-md rounded-md">
          <li className="hover:font-medium cursor-pointer">Products</li>
          <li className="hover:font-medium cursor-pointer">Tools</li>
          <li className="hover:font-medium cursor-pointer">Contact Us</li>
          {!user ? (
            <li>
              <Link to='/login'>
                <Button name="Login" />
              </Link>
            </li>
          ) : (
            <li>
              <Button name="Logout" onClick={logout} />
            </li>
          )}
          <li>
            <Link to='/ScheduleCall'>
              <Button name="Schedule a Call" />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
