import { AiFillCheckCircle } from 'react-icons/ai';

const Featues = ({feature}) => {
    return (
        <div className=''>
            <p className="flex items-center text-start mb-2"><AiFillCheckCircle className='mr-2'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Featues;