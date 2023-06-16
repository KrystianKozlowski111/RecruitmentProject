import styled from 'styled-components';
import { Media } from '../../public/Assets/Mixins.jsx';

export const BoxContainer = styled.div`
  box-shadow: 3px 3px 9px rgba(79, 79, 79, 0.3);
  border-radius: 6px;

  ${Media.sm`
  margin-left:15px;
  margin-right:15px;


  `}
`;
export const ImageBox = styled.img`
  border-radius: 6px;
  max-height: 200px;
  object-fit: cover;
  min-width: 100%;

  ${Media.sm`
  max-height: 150px;


  `}
`;
export const Button = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  gap: 17px;
  justify-content: flex-end;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #3068de;
  margin-bottom: 21px;
  padding-bottom: 21px;
  margin-top: 21px;
  margin-right: 23px;
  cursor: pointer;
`;
export const Container = styled.div`
  width: 100%;
  padding: 18px;

  border-radius: 6px;
  &:nth-child(2n) {
    background: #f3f4f6;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeadingContainer = styled.div`
  position: relative;
`;
export const Country = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #ffffff;
`;
export const TitleBox = styled.div`
  width: 100%

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  ${Media.sm`
  font-size: 14px;
  
  `}
`;
export const Stars = styled.div`
  display: flex;
  margin-top: 5px;
  gap: 2px;
`;
export const Date = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  opacity: 0.75;
  ${Media.sm`
  font-size: 12px;
  `}
`;

export const Discount = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: line-through;
  color: #ff5353;
  ${Media.sm`
  font-size: 12px;
  
  `}
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #3e4958;
  span {
    font-size: 13px;
  }
`;
export const LastMinute = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #ff5353;
  ${Media.sm`
  font-size: 12px;
  `}
`;
export const Inclusive = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #000000;
  opacity: 0.5;
  ${Media.sm`
  font-size: 12px;
  `}
`;
export const Person = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: #3e4958;
  opacity: 0.75;
`;
export const BoxTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const BoxDown = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
`;
export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const SpecialsContainer = styled.div`
  display: flex;
  gap: 26px;
  flex-direction: row;
  justify-content: space-between;
  div:not(:last-child)::after {
    content: '';
    display: block;
    width: 1px;
    height: 11px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    position: absolute;
    right: -13px;
    top: 0;
  }
`;
