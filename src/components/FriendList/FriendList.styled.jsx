import styled from '@emotion/styled';

export const FriendList = styled.li`
  display: flex;
  width: 300px;
  background-color: rgb(248, 240, 240);
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;


export const FriendAvatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 7px;
  margin-right: 20px;
  background-color: rgb(236, 219, 219);
  border-radius: 8px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;
export const FriendName = styled.p`
  font-size: 19px;
  line-height: 1.54;
  margin-left: 20px;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
export const FriendItems = styled.ul`
  background-color: #fff;
  width: 350px;
  margin: 0px auto;
  margin-bottom: 100px;
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`;
