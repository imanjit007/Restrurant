import React, { useState } from "react";
import Menu from "./MenuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currElem)=>{
      return currElem.category;
    })
  ),
  "All",
];
const Restrurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const[menuList, setMenuList] = useState(uniqueList);
  const filterItem=(category)=>{
    if(category=="All"){
      setMenuData(Menu);
      return ;
    }
    const updatedList = Menu.filter((currElem)=>{
      return currElem.category === category;
    })
    setMenuData(updatedList);
  }
  return <>
  <Navbar filterItem={filterItem} menuList={menuList} />
<br/>
  <MenuCard menuData={menuData}/>
  </>;
};

export default Restrurant;
