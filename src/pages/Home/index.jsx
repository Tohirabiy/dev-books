import { useEffect } from "react";
import { Button } from "flowbite-react";
import VECTOR_2 from "../../assets/images/Vector2.svg";
import IntroCarousel from "../../components/UI/Carousel/IntroCarousel";
import SearchPanel from "../../components/UI/SearchPanel/SearchPanel";
import "./style.scss";
import Category from "../../components/category/Category";
import CardWrapper from "../../components/Layout/CardWrapper";
import CardAuthor from "../../components/UI/Card/Author/CardAuthor";
import CardBook from "../../components/UI/Card/Book/CardBook";

const index = () => {
  return (
    <section className="intro" style={{ backgroundImage: `url(${VECTOR_2})` }}>
      <div className="container">
        <div className="wrapper">
          <IntroCarousel />
          <SearchPanel />
          <Category />
          <CardWrapper>
            {"HELLOsWORLD".split("").map((item) => {
              return <CardAuthor />;
            })}
          </CardWrapper>
          <CardWrapper Wrapper>
            {"HELLOddWORLD".split("").map((item) => {
              return <CardBook />;
            })}
          </CardWrapper>
        </div>
      </div>
    </section>
  );
};

export default index;
