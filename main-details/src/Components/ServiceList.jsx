import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesRequest } from '../ReduxObs/Actions/actionCreators';
import { Link } from 'react-router-dom';

export default function ServiceList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.services);

  useEffect(()=>{
    dispatch(getServicesRequest())
  },[])

  

  const repeatedRequest = () => {
    dispatch(getServicesRequest())
  }



  return (
    <div>
   {items && loading && <div>Load...</div>} 
   {error ? <div>Error occured<button onClick={repeatedRequest} >Try again</button></div> : <ul>{
   items.map(o => <Link key={o.id} to={`/${o.id}/details`}> <li key={o.id}>{o.name}: {o.price}</li></Link>)
   }</ul>}
    </div>
  )
}
