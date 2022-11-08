import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: Orange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Dapatkan Produk Berkualitas Dengan Harga Murah!!!</Container>;
};

export default Announcement;
