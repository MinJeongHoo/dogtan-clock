import React, { useEffect } from 'react';
import { requestGet } from '../../modules/service/get';
import { useDispatch, useSelector } from 'react-redux';
import Test from './Test';
function AppTop({ btnState }) {
    const { data, loading } = useSelector(state => state.getReducer.famousSaying);
    const dispatch = useDispatch();

    const getContent = () => {
        dispatch(requestGet(`https://api.quotable.io/random`, 'famousSaying'));
    }
    const changeContent = () => {
        getContent();
    }
    // const [id, setId] = useState(0);
    useEffect(() => {
        getContent();
    }, [dispatch]);
    return (
        <Test loading={loading} data={data} btnState={btnState} changeContent={changeContent} />
    )
}
export default AppTop;