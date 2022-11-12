import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import pmart from "../img/Logo.png";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Img = styled.img`
  flex: 1;

  align-items: center;
  height: 7vh;
  width: 15vw;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Button = styled.div`
  flex: 1;
  text-align: center;
  color: white;
  padding: 5px;
  font-size: 15px;
  background-color: red;
  cursor: pointer;
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const dispatch = useDispatch();
  const handleClick = () => {
    logout(dispatch);
  window.location.reload()
  }
  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Center>
        <Link to="/">
        <Img src={pmart}alt="image" />
          </Link>
        </Center>
        <Right>
        <MenuItem>
          <Button onClick={handleClick}>LOG OUT</Button>
        </MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
