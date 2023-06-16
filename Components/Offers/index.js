import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '../Box';
import useWindowSize from '../../hooks/useWindowSize';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Media } from '../../public/Assets/Mixins.jsx';

import {
  BoxesWrapper,
  TopContainer,
  TopText,
  SeeAll,
  SeeAllDark,
  SliderWrapper,
  Arrow,
  OffersContainer,
} from './Offers.style';
import styled from 'styled-components';

const NextArrow = styled(Arrow)`
  right: 30px;
  ${Media.xxs`
  right: 25px;
  `}
`;

const PrevArrow = styled(Arrow)`
  left: 450px;
  ${Media.s`
  left: 350px;
  `}
  ${Media.xs`
  left: 250px;
  `}
  ${Media.xxs`
  left: 230px;
  `}
`;

const Offers = () => {
  const [destinations, setDestinations] = useState([]);
  const { width: windowWidth } = useWindowSize();
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: (
      <NextArrow>
        <Image src={'/Assets/Icons/RArrow.svg'} alt="" width={6} height={10} />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <Image src={'/Assets/Icons/LArrow.svg'} alt="" width={6} height={10} />
      </PrevArrow>
    ),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/destination'
        );
        setDestinations(response.data.destinations);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <OffersContainer>
      <TopContainer>
        <TopText>Big saving on all inclusive trips</TopText>
        {windowWidth > 767 ? <SeeAll>See all offers</SeeAll> : ''}
      </TopContainer>
      {windowWidth < 767 ? (
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {destinations.map((destination, index) => (
              <Box key={index} destination={destination} />
            ))}
          </Slider>
        </SliderWrapper>
      ) : (
        <BoxesWrapper>
          {destinations.map((destination, index) => (
            <Box key={index} destination={destination} />
          ))}
        </BoxesWrapper>
      )}
      {windowWidth < 767 ? <SeeAllDark>See all offers</SeeAllDark> : ''}
    </OffersContainer>
  );
};

export default Offers;
