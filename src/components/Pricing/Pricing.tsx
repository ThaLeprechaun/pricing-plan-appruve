import React from 'react';
import PricingList from './PricingList';
import './pricing.css';

export default function Pricing() {
  return (
    <div className="pricing--container">
      <div className="heading text-header">
        <h4>Pricing Plans</h4>
      </div>
      <PricingList />
    </div>
  )
}
