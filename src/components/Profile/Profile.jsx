import css from "../Profile/Profile.module.css";

export default function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <img className={css.avatar} src={image} alt="Portfolio image" />
      <p className={css.infoTitle}>
        <b>{name}</b>
      </p>
      <p className={css.info}>{tag}</p>
      <p className={css.info}>{location}</p>

      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.infoItem}>
          <span>Views</span>
          <span>
            <b> {views}</b>
          </span>
        </li>
        <li className={css.infoItem}>
          <span>Likes</span>
          <span>
            <b> {likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
