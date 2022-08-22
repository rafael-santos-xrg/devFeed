import DevFeedIcon from '../../assets/DevFeedIcon';
import style from './Header.module.css';

function Header () {
  return (
    <div className={style.header}>
      <span>
        <DevFeedIcon />
        <strong>DevFeed</strong>
      </span>
    </div>
  )
}

export default Header