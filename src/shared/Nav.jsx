import{ useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import logo from '/logo.png';
import favicon from '/favcion.png'
import './Navbar.css'
const navItems = [
  {
    route: 'Home',
    pathname: '/',
  },
  {
    route: 'About',
    pathname: '/about',
  },
  {
    route: 'Skills',
    pathname: '/skills',
  },
  {
    route: 'Projects',
    pathname: '/projects',
  },
  {
    route: 'Contact',
    pathname: '/contact',
  },
];

function Navbar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="flex flex-col">
    <nav className="bg-gradient-to-r from-primary via-[#285545] to-[#7EA799] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <Link to="/">
              <img className="h-10" src={logo} alt="Logo" /></Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.pathname}
                  to={item.pathname}
                  className="hover:text-secondary text-xl hover:underline"
                >
                  {item.route}
                </Link>
              ))}
              <button>ddfghfg</button>
            </div>
            
         
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleDrawerToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        direction="right"
        className="bla bla bla"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <img className="h-10" src={favicon} alt="favicon" />
            <button
              onClick={handleDrawerToggle}
              className="bg-secondary text-white p-2 rounded-md"
            >
              <FaTimes className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col mt-3 divide-y">
            {navItems.map((item) => (
              <Link
                key={item.pathname}
                to={item.pathname}
                className="mt-2 px-3 py-2 text-black text-base font-medium"
                onClick={handleDrawerToggle}
              >
                {item.route}
              </Link>
            ))}
            
          </div>
        </div>
      </Drawer>
    </nav>
  </div>
  );
}

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

export default Navbar;

