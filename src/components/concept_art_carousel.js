import React, { useReducer, useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import img_helmet_1 from "../media/img/concept_art/helmet_1.jpg";
import img_helmet_2 from "../media/img/concept_art/helmet_2.jpg";
import img_helmet_3 from "../media/img/concept_art/helmet_3.jpg";
import img_clothing from "../media/img/concept_art/clothing_design.jpg";
import img_shirakawa from "../media/img/concept_art/shirakawa.jpg";
import img_japan from "../media/img/concept_art/japan.jpg";
import {
    Carousel_L_R
} from '../components/buttons'
import { SectionText } from "./design";

const slides = [
    {
        name: "1/6",
        image: img_helmet_1
    },
    {
        name: "2/6",
        image: img_helmet_2
    },
    {
        name: "3/6",
        image: img_helmet_3
    },
    {
        name: "4/6",
        image: img_clothing
    },
    {
        name: "5/6",
        image: img_shirakawa
    },
    {
        name: "6/6",
        image: img_japan
    }
];

export const SlideContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  text-align: center;
`

function useTilt(active) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) { return; }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) { return; }

            if (!state.rect) { state.rect = el.getBoundingClientRect(); }

            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => { el.removeEventListener("mousemove", handleMouseMove); };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};


function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <SlideElement
            ref={ ref }
            className="slide"
            data-active={ active }
            style={ {
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            } }
        >
            <SlideContent
                className="slideContent"
                style={ { backgroundImage: `url('${slide.image}')` } }
            >
                <SlideContentInner className="slideContentInner">
                    <SlideNumber className="slideTitle">{slide.name}</SlideNumber>
                </SlideContentInner>
            </SlideContent>
        </SlideElement>
    );
}

const SlideElement = styled.div `
  grid-area: 1 / -1;

  &[data-active] {
    z-index: 2;
    pointer-events: auto;

    .slideContentInner {
      opacity: 1;
    }

    .slideContent {

      --x: calc(var(--px) - 0.5);
      --y: calc(var(--py) - 0.5);
      opacity: 1;

      &:hover {
        transition: none;
        rotateX(calc(var(--y) * -45deg));
      }
    }
  }
`

const Slides = styled.div `
  display: grid;
`

const SlideContent = styled.div `
  width: 30vw;
  height: 40vw;
  max-width: 600px;
  max-height: 750px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.7;
  text-align: center;

  display: grid;
  align-content: end;

  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(100% * var(--offset)))
  rotateY(calc(-45deg * var(--dir)));
`

const SlideContentInner = styled.div `
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0;
`

const SlideNumber = styled.h2 `
  font-family: NeutralFace-Bold, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin-bottom: -30px;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`

const SlideDescription = styled.p `
  margin: 0 0 30px 0;
  text-align:left;
  font-size: 1.0rem;
  letter-spacing: 0.2ch;
  color: #fff;
`

const ConceptArtCarousel = () => {
    const [showing, toggleShow] = useState(false);
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return(<>
        <SectionText>Concept Art</SectionText>
        <SlideContainer>
            <Slides className="slides">
                <Carousel_L_R onClick={ () => dispatch({ type: "NEXT" } ) }>‹</Carousel_L_R>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={ slide } offset={ offset } key={ i } />;
                })}
                <Carousel_L_R onClick={ () => dispatch({ type: "PREV" } ) }>›</Carousel_L_R>
            </Slides>
        </SlideContainer>
        }
        </>);
}

export default ConceptArtCarousel;