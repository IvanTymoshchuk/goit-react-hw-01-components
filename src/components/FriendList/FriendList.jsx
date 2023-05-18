import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendItems } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendItems>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
