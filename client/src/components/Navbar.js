import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 shadow">
      <div className='py-4 font-bold text-xl justify-center flex'>
        Flat Earth Collective
      </div>
      <div className='flex space-x-12 pb-2 justify-center'>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/mens'>Mens</Link>
        </div>
        <div>
          <Link to='/womens'>Womens</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

