import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: Orange;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email,password });
  };
  const Error = styled.span`
  color: red;
`;
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
          <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
          
          <Agreement>
            Dengan Membuat Akun, saya bersedia menggunakan aplikasi ini dengan baik dan benar
            <br /><b>Sudah Punya Akun?</b><Link to="/login">LOGIN</Link> 
          </Agreement><br /><br />
          
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
        {error && <Error>Something went wrong...</Error>} 
      </Wrapper>
    </Container>
  );
};

export default Register;
