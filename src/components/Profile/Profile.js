import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <br />
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <br />
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <br />
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

// const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
//   return (
//     <div className="profile">
//       <div className="description">
//         <img
//           src={avatar}
//           alt="Аватар пользователя"
//           className="avatar"
//         />
//         <p className="name">{name}</p>
//         <p className="tag">{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Profile;
