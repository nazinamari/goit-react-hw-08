import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilterName } from '../../redux/filters/slice';
import { useId } from 'react';

export default function SearchBox() {
    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const nameId = useId();

    const handleChange = e => {
        const filter = e.target.value;
        dispatch(setFilterName(filter));
    };

    return (
        <div className={css.container}>
            <h2 className={css.filterTitle}>Find contact by filter</h2>
            <div>
                <label className={css.label} htmlFor={nameId}>
                    <input
                        placeholder="Search"
                        className={css.input}
                        type="text"
                        id={nameId}
                        value={filterValue}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}
