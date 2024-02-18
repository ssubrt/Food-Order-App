import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-hot-toast";
import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuantity, removeQuantity } from '../utils/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handleAddQuantity = () => {
        dispatch(addQuantity(item));
        toast.success("Item Added To Cart");
    }

    const handleRemoveQuantity = () => {
        dispatch(removeQuantity(item));
        toast.error("Item Removed From the Cart");

    }

  

   return (
    <div>
       
                
                <td className="flex justify-center  py-2 px-1 -ml-14">
                 
                    <div className="flex justify-between items-center gap-2 text-orange-500 border px-2 rounded-lg border-gray-300 py-1 ">
                      <button className="text-sm border border-solid border-r-2" >
                        <FaPlus onClick={() => handleAddQuantity()} />
                      </button>
                      <span className='text-sm'>{item?.quantity}</span>
                      <button className='text-sm  border border-solid border-l-2'>
                        <FaMinus onClick={() => handleRemoveQuantity()} />
                      </button>
                    </div>
                 
                </td>
                
                
              
    </div>
   )
};

export default CartItem;