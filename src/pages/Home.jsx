import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import Menu from "../components/Menu";
import data from "../components/data";
import styled from "styled-components";

const Container = styled.div`
  /* height:100vh; */
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const changeList = (category) => {
  //   category === "All"
  //     ? setmenuItems(data)
  //     : setmenuItems(data.filter((item) => item.category === category));
 
  // };

  return (
    <Container>
      <Navbar />
      <Header />
      <Category setSelectedCategory={setSelectedCategory}/>
      <Menu selectedCategory={selectedCategory}/>
    </Container>
  );
};

export default Home;
