import React from 'react';
import {data} from '../../data/PricingPlanItems';
import PricingCard from './PricingCard';
import './pricing.css';


export default function PricingList() {
  return (
    <div className="pricelist--container">
      {data.planOptions.map((item: any, index: number) => (
        <PricingCard plan={item.plan} price={item.price} paymentPlan={item.paymentPlan} buttonText={item.buttonText} backgroundColor={item.backgroundColor} key={index}/>
      ))}
    </div>
  )
}
