import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSliceThunk } from '../../Store/Reducer/getSlice';

const Products = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.getSlice.products);
    useEffect(() => {
        dispatch(getSliceThunk());
    },[]);
  return (
    <div>
    {data &&
      data.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
  </div>
  )
}

export default Products