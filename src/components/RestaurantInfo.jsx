import React from "react";
import { FaClock} from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleVegOnly } from "../utils/itemSlice";
import { RESTAURANT_IMG_CDN } from "../utils/constants";

const RestaurantInfo = ({ id }) => {
  console.log("id", id);
  const { restaurants } = useSelector( store => store.restaurants)
  console.log("restaurants: ", restaurants);
  const resInfo = restaurants.filter((item) => item.info.id === id)[0]
  console.log("resList :", resInfo)
  const dispatch = useDispatch();
  const isVeg = useSelector((store) => store.item.isVegOnly);

  const toggleIsVeg = () => {
    dispatch(toggleVegOnly());
  };

  

  const {
    locality,
    name,
    costForTwoMessage,
    avgRating,
   
    totalRatingsString,
    cuisines,
    veg,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resInfo.info;

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
        <img  className="h-[130px] object-cover rounded-lg "
        src={RESTAURANT_IMG_CDN+cloudinaryImageId}></img>
        </div>
        <div className="flex flex-col  space-y-4">
          <div>
            <h1 className="font-bold text-xl space-y-4">{name}</h1>
          </div>
          <div>
            <p className="text-xl ">{cuisines.join(", ")}</p>
            <p className="text-xs">{locality}</p>
          </div>
        </div>

        <div className="bg-white border flex flex-col justify-center px-2 rounded-lg">
          <div className="text-center">
            <span className="text-green-600 font-extrabold text-sm">
              <span>&#9733; </span>
              {avgRating}
            </span>
          </div>
          <span className=" border-b border-slate-300"></span>
          <div>
            <span className="text-xs font-semibold text-slate-400">
              {totalRatingsString}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full border border-dashed"></div>

      <div>
        <div className="flex space-x-3 items-center">
          <div className="space-x-1">
            <FaClock />
            <span className="font-bold text-sm">{deliveryTime} minutes</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 border border-slate-900 rounded-full text-center">
            ₹
            </div>
            <span className="font-bold text-sm">{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      {veg ? (
        <div className="space-x-2">
          <FaToggleOn />
          <span className="text-xs font-bold text-slate-500">PURE VEG</span>
        </div>
      ) : (
        <div className="space-x-2 flex items-center">
          <span className="text-xs font-bold text-slate-500">VEG ONLY</span>
          <button
            className={`w-10 h-6 rounded-2xl relative flex items-center transition-all ${
              isVeg ? `bg-green-500` : `bg-slate-200`
            } `}
            onClick={() => toggleIsVeg()}
          >
            <span
              className={`block absolute w-4 h-4 transition-all rounded-full ${
                isVeg
                  ? `left-[calc(100%-20px)] bg-white`
                  : `left-1 bg-green-500`
              }  `}
            ></span>


          </button>


        </div>
      )}
    </div>
  );
};

export default React.memo(RestaurantInfo);
