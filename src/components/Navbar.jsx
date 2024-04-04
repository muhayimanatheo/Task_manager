import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className=" bg-green-600 flex justify-between items-center px-4 py-2">
      <div className="flex justify-between items-center space-x-2">
        <img src="/images/add.png" alt="" />
        <h1 className="text-white font-bold">Task Managments</h1>
      </div>
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="" className="text-white hover:text-gray-300">
          Home
        </Link>

        <Link to="AddTask" className="text-white hover:text-gray-300">
          AddTask
        </Link>
        <Link to="#" className="text-white hover:text-gray-300">
          Contact
        </Link>

        <Link to="#" className="text-white hover:text-gray-300">
          Login
        </Link>

        <Link to="#" className="text-white hover:text-gray-300">
          Signup
        </Link>
      </div>

      {/* Add Todo Button
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Todo
      </button> */}
    </nav>
  );
}

export default NavBar;
