import styles from './StarIcon.module.scss'

const StarIcon = ({ filled }) => {
  return (<i className={filled ? "fa fa-star" : "fa fa-star-o"}></i>);
};

export default StarIcon;
