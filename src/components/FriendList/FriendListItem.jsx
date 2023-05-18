import PropTypes from 'prop-types';
import {
  FriendList,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendList>
      <FriendStatus statusType={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendList>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
