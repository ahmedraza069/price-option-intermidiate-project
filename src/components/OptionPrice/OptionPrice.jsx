import PropTypes  from "prop-types";
import Featues from "../Features/Featues";

const OptionPrice = ({option}) => {
    const {option_name, price, features} = option;
    return (
        <div className="bg-blue-500 flex flex-col rounded-lg p-8 text-center">
            <span className="text-6xl text-white font-extrabold">${price}</span>
            <span className="text-2xl font-bold text-white">/month</span>

            <h2 className="text-3xl font-bold text-white mt-4">{option_name}</h2>
         <div className="my-4 flex-grow text-normal font-normal text-white mx-5">
         {
                features.map((feature, index) => <Featues key={index} feature={feature}></Featues>)
            }
         </div>

         <button className="bg-white py-3 w-full text-blue-500 font-bold text-lg mt-3 rounded-lg">Buy Now</button>

        </div>
    );
};

OptionPrice.PropTypes ={
    option: PropTypes.object
}

export default OptionPrice;