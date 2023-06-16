import React from 'react';
import {
  BoxContainer,
  List,
  Container,
  Button,
  ImageBox,
  Country,
  TitleBox,
  Stars,
  Date,
  HeadingContainer,
  Price,
  Discount,
  LastMinute,
  Inclusive,
  BoxTop,
  BoxLeft,
  BoxRight,
  BoxDown,
  Person,
  SpecialsContainer,
} from './Box.style';
import Image from 'next/image';
const Box = ({ destination }) => {
  return (
    <BoxContainer>
      <HeadingContainer>
        <Country>{destination.Title}</Country>
        <ImageBox src={destination.Img} alt={destination.Title} />
      </HeadingContainer>

      <List>
        {destination.Details.map((detail, index) => (
          <Container key={index}>
            <BoxTop>
              <TitleBox>{detail.title}</TitleBox>
              <Stars>
                {Array(detail.stars)
                  .fill()
                  .map((_, i) => (
                    <Image
                      key={i}
                      src={'/Assets/Icons/Star.svg'}
                      alt="Star"
                      width={10}
                      height={9}
                    />
                  ))}
              </Stars>
            </BoxTop>
            <BoxDown>
              <BoxLeft>
                <Date>{detail.date}</Date>
                <SpecialsContainer>
                  {detail.IsLastMinute ? (
                    <LastMinute>Last Minute </LastMinute>
                  ) : (
                    ''
                  )}

                  {detail.IsAllInclusive ? (
                    <Inclusive>All inclusive </Inclusive>
                  ) : (
                    ''
                  )}
                </SpecialsContainer>
              </BoxLeft>
              <BoxRight>
                <Discount>{detail.priceDiscounted} pln</Discount>
                <Price>
                  {detail.price} <span>pln</span>
                </Price>
                <Person>per person</Person>
              </BoxRight>
            </BoxDown>
          </Container>
        ))}
      </List>

      <Button title={`See all offers in ${destination.Title}`}>
        See all offers in {destination.Title}
        <Image src={'/Assets/Icons/Arrow.svg'} alt="" width={24} height={24} />
      </Button>
    </BoxContainer>
  );
};

export default Box;
