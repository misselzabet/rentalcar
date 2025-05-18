import { FaCheckCircle } from 'react-icons/fa'; // Використай існуючу іконку
import s from './FeaturesCarList.module.css';

const FeaturesCarList = ({ title, items }) => {
    return (
        <div className={s.listContainer}>
            <h3 className={s.subtitle}>{title}</h3>
            <ul className={s.list}>
                {items.map((text, index) => (
                    <li className={s.item} key={index}>
                        <FaCheckCircle />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturesCarList;
