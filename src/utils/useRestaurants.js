import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addRestaurants } from "./restaurantSlice";
import { RESTAURANT_LIST_DESKTOP } from "./constants";




const useRestaurants = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  const dispatch = useDispatch();
  const fetchRestaurantList = async () => {
    try {


        const res = await fetch(RESTAURANT_LIST_DESKTOP, {
            headers: {
              'x-cors-api-key':"temp_812f2dcb586d1db98e924b8e4394ab17"
            }
          });
      const json = await res.json();
      const resList =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(resList);
      dispatch(addRestaurants(resList));
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError("Failed to fetch restaurant data");
    }
  };
  useEffect(() => {
    fetchRestaurantList();
  }, []);
  return {
    error,
    isLoading,
    restaurantList,
  };
};
export default useRestaurants;