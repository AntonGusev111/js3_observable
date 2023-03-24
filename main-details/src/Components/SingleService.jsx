import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getSinglesRequest } from '../ReduxObs/Actions/actionCreators';
import { useEffect } from 'react';

export default function SingleService() {
  const param = useParams();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.single);


  useEffect(()=>{
    dispatch(getSinglesRequest(param.id))
  },[param]);

  const repeatedRequest = () => {
    dispatch(getSinglesRequest(param.id))
  }






  return (
    <div>
      {items && loading && <div>Load...</div>} 
   {error ? <div>Error occured <button onClick={repeatedRequest} >Try again</button> </div> : <ul>
    <li key={items.id}>{items.name}  {items.price}  {items.content}</li>
    </ul>}
    </div>
  )
}
