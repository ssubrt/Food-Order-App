import { useEffect, useState } from "react";
import { CORSPROXY,MENU_API } from "./constants";

// custom hook to fetch restaurantMenu and restaurantInfo and return it
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${MENU_API}restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`,
      {
        headers: {
          "x-cors-api-key":import.meta.env.VITE_TOKEN ,
        },
      }
    );

    const json = await data.json();
    const resDesktopMenu =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
=======
   const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORSPROXY +
        encodeURIComponent(
          MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
        )
    );
    const json = await data.json();
    const resInfo = json?.data?.cards[0]?.card?.card?.info;
    const resDesktopMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
>>>>>>> 58b674648bfc0cd37b89fe20d93e0048bd851d6b
        1,
        -2
      );

    const resMobileMenu =
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
        1,
        -2
      );
    setResInfo(resInfo);
    setResMenu(resDesktopMenu || resMobileMenu);
  };

  return [resInfo, resMenu];
};

<<<<<<< HEAD
export default useRestaurantMenu;
=======
export default useRestaurantMenu;
>>>>>>> 58b674648bfc0cd37b89fe20d93e0048bd851d6b
