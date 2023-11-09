import { Carousel } from 'react-responsive-carousel';
import style from "./carusel.module.css"
import left from "../../images/left-swipe.png"
import right from "../../images/right-swipe.png"

const MyCarousel = ({slide}) => {
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        disabled={!hasPrev}
        aria-label={label}
        className={style.leftSwipe}
      >
        <img src={left} alt='left-swipe' height={"30px"}/>
      </button>
    );
  };

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        disabled={!hasNext}
        aria-label={label}
        className={style.rightSwipe}
      >
        <img src={right} alt='right-swipe' height={"30px"}/>
      </button>
    );
  };

  return (
    <div style={{maxHeight: "700px",maxWidth: "700px",width:"80%"}}>
        <Carousel
            renderArrowPrev={renderCustomPrevArrow}
            renderArrowNext={renderCustomNextArrow}
            className={style.caruselcontainer} 
            showThumbs={false} 
            showIndicators={false}
        >
            {slide.images.map((value) => {
                return(
                    <div className={style.caruselBlock}>
                        <img src={value.url} alt='preview'/>
                    </div>
                )
            })}
        </Carousel>
    </div>
  );
};

export default MyCarousel;