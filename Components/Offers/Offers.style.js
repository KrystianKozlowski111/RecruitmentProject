import styled from 'styled-components';
import { Media } from '../../public/Assets/Mixins.jsx';
export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

export const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 100%;
  ${Media.lg`
  grid-template-columns: 1fr 1fr;
  `}
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 42px;
  margin-top: 30px;
  ${Media.lg`
  margin-bottom: 30px;

  `}
`;
export const SliderWrapper = styled.div`
  position: relative;
`;
export const Arrow = styled.div`
  position: absolute;
  top: 50px;
  z-index: 1;
  cursor: pointer;
`;

export const TopText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: flex-end;
  ${Media.sm`
  font-size: 20px;
  
  `}
`;
export const SeeAll = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: #c7e7f5;
  border-radius: 6px;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
export const SeeAllDark = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: rgba(48, 104, 222, 0.25);
  border-radius: 6px;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;
