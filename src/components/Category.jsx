import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import styled from "styled-components";

function Category() {
  return (
    <List>
      {/* <NavLink to={"/cuisine/Italian"}> */}
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
        {/* </NavLink> */}
      </div>
      {/* <NavLink to={"/cuisine/American"}> */}
      <div>
        <FaHamburger />
        <h4>American</h4>
        {/* </NavLink> */}
      </div>
      {/* <NavLink to={"/cuisine/Thai"}> */}
      <div>
        <GiNoodles />
        <h4>Thai</h4>
        {/* </NavLink> */}
      </div>
      {/* <NavLink to={"/cuisine/Japanese"}> */}
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
        {/* </NavLink> */}
      </div>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
