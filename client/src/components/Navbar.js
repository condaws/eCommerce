const Navbar = () => {
  return (
    <nav className="bg-gray-200 shadow">
      <div className='py-4 font-bold text-xl justify-center flex'>
        Flat Earth Collective
      </div>
      <div className='flex space-x-12 pb-2 justify-center'>
        <div>
          Home
        </div>
        <div>
          Mens
        </div>
        <div>
          Womens
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

