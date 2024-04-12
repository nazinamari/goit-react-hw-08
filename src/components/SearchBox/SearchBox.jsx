import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilterName } from '../../redux/filters/slice';

export default function SearchBox() {
    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleChange = e => {
        const filter = e.target.value;
        dispatch(setFilterName(filter));
    };

    return (
        <div className={css.form}>
            <p className={css.search}>Search</p>
            <input
                className={css.input}
                type="text"
                value={filterValue}
                onChange={handleChange}
            />
        </div>
    );
}
