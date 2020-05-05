import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './pricing.css';

interface PricingTypes {
  plan: string;
  price: number;
  paymentPlan: string;
  buttonText: string;
  backgroundColor?: string;
}

export default function PricingCard({plan, price, paymentPlan, buttonText, backgroundColor}: PricingTypes) {
  return (
    <>
      <Card cardClass="cardplan--container">
        <div className="cardplan__details">
          <p className="plan-heading">{plan}</p><hr />
          <div style={{backgroundColor: backgroundColor}}>
            <p>${price}</p><hr />
            <p>{paymentPlan}</p><hr />
          </div>
        <Button buttonName={buttonText} buttonClass="cardplan--button"/>  
        </div>
      </Card>
    </>
  )
}
