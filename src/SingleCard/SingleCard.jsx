/* eslint-disable react/prop-types */
import { AiFillCheckSquare } from 'react-icons/ai';
const SingleCard = (props) => {
    const {name, img, features, price, rating} =(props.singleCard);
  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {
            features.map((feature, idx) => (
                <div className='flex items-center' key={idx}>
                    <AiFillCheckSquare className='text-violet-500'></AiFillCheckSquare>
                    <p className='ml-2'>{feature}</p>
                </div>
            ))
          }
          <div className='flex justify-evenly my-4'>
            <p>Ratings: {rating}/5</p>
            <p>Price: {price} tk</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
