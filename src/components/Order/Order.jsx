import React from "react";
import { useSelector , useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { oneOrderAction } from "../../store/slices/order";
import { json, useParams } from "react-router-dom";

function Order() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const order = useSelector((state)=> state.order.order)
  useEffect(()=>{
    dispatch(oneOrderAction(id))
},[])

  return <div>{order|json}</div>;
}

export default Order;
