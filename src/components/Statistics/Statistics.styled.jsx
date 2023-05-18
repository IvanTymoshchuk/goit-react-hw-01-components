import styled from '@emotion/styled';

export const StatSection = styled.section`
  width: 350px;
  margin: 0px auto;
  margin-bottom: 100px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
  border-radius: 10px;
  background-color: #fff;
  color: #fff;
`;
export const Title = styled.h2`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  padding: 10px;
`;
export const StatLabel = styled.span`
  font-size: 16px;
  padding-top: 5px;
`;
export const StatPercentage = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
`;
