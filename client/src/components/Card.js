let image = require('../pic.jpg');

const Card = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-10 hover:opacity-80 hover:bg-gray-100 duration-300 ease-in max-w-sm rounded-md overflow-hidden shadow-md'>
        <img src={image.default} alt='t-shirt 1' className='w-full'></img>
        <div className='m-4'>
          <span className='font-bold'>New all white cool guy shirt for only cool people</span>
          <span className='block'>$38.99</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
