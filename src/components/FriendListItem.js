import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span class="status on"></span>
      ) : (
        <span class="status off"></span>
      )}
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
