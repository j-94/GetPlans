import React, { useState } from 'react';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { CheckIcon } from '@/components/CheckIcon';
import { Container } from '@/components/Container';
import { GridPattern } from '@/components/GridPattern';
import { SectionHeading } from '@/components/SectionHeading';

const householderApplication = {
  type: 'Householder Application',
  baseFee: 1200,
  requiredDocuments: [
    { name: 'Application Form', fee: 0, required: true, description: 'You should use the Householder Planning form' },
    { name: 'CIL Additional Information Form 1', fee: 0, required: true, description: 'CIL Additional Information Form 1' },
    { name: 'Application Fee', fee: 0, required: true, description: 'You must submit supporting documents if applying for an exemption' },
    { name: 'Administration Fee', fee: 0, required: true, description: 'Mandatory if an administration fee is charged' }
  ],
  requiredPlans: [
    { name: 'Block Plan (1:500)', fee: 0, required: true, description: 'Mandatory if the proposed work extends beyond the current external walls or a new outbuilding is proposed' },
    { name: 'Elevation Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory if any of the proposed work is visible externally' },
    { name: 'Floor Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory' },
    { name: 'Photos', fee: 0, required: true, description: 'Photos should show all sides of the application property, plus front and rear streetscene photos showing the application property and the neighbouring properties' },
    { name: 'Roof Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory if any new roof element is proposed' },
    { name: 'Section Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory if there is a change in floor heights (eg. loft conversion)' },
    { name: 'Site Location Plan (1:1250)', fee: 0, required: true, description: 'Mandatory' }
  ],
  additionalRequirements: [
    { name: 'Archaeological Desk-based Assessment', fee: 0, required: true, description: 'Mandatory if site is within 50m of an Ancient Monument and new or additional footings are required' },
    { name: 'Basement Impact Assessment', fee: 0, required: true, description: 'Mandatory if the application proposes any new or extended subterranean levels' },
    { name: 'Contaminated Land Assessment', fee: 0, required: true, description: 'Mandatory if site is on Contaminated Land' },
    { name: 'Ecological Assessment/Biodiversity Net Gain Assessment', fee: 0, required: true, description: 'Mandatory if converting loft space or other roof alterations within a Site of Nature Conservation Interest (SINC) or a Green Corridor. A Preliminary Roost Assessment should be undertaken by a suitably qualified professional' },
    { name: 'Fire Safety Strategy (Part A)', fee: 0, required: true, description: 'Mandatory' },
    { name: 'Flood Risk Assessment', fee: 0, required: true, description: 'Mandatory if the site is within Flood Zones 2 or 3 and work involves new footings being dug' },
    { name: 'Flood Risk Assessment', fee: 0, required: true, description: 'Mandatory if the application proposes any new subterranean levels' },
    { name: 'Heritage Statement', fee: 0, required: true, description: 'Mandatory if the works are within a Conservation Area or the property is a Listed or Locally Listed Building' },
    { name: 'Tree survey, Arboricultural Impact Assessment (AIA) and Arboricultural Method Statement (AMS)', fee: 0, required: true, description: 'Mandatory if any trees are within 5m of the proposed works' }
  ]
};

const lawfulDevelopmentCertificate = {
  type: 'Lawful Development Certificate',
  baseFee: 900,
  requiredDocuments: [
    { name: 'Application Form', fee: 0, required: true, description: '' },
    { name: 'CIL Additional Information Form 1', fee: 0, required: true, description: 'CIL Additional Information Form 1' },
    { name: 'Application Fee', fee: 0, required: true, description: 'You must submit supporting documents if applying for an exemption' },
    { name: 'Administration Fee', fee: 0, required: true, description: 'Mandatory if an administration fee is charged' }
  ],
  requiredPlans: [
    { name: 'Block Plan (1:500)', fee: 0, required: true, description: 'Mandatory if the proposed work extends beyond the current external walls or a new outbuilding is proposed' },
    { name: 'Elevation Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory if any of the proposed work is visible externally' },
    { name: 'Floor Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory' },
    { name: 'Photos', fee: 0, required: true, description: 'Photos should show all sides of the application property, plus front and rear streetscene photos showing the application property and the neighbouring properties' },
    { name: 'Roof Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory if any new roof element is proposed' },
    { name: 'Section Plans - Existing & Proposed (appropriately scaled)', fee: 0, required: true, description: 'Mandatory if there is a change in floor heights (eg. loft conversion)' },
    { name: 'Site Location Plan (1:1250)', fee: 0, required: true, description: 'Mandatory' }
  ]
};

function Plan({ name, description, price, features, href, featured, handleChange, selectedItems }) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg'
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900'
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600'
          )}
        >
          {description}
        </p>
        <p className="flex order-first font-bold font-display">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-blue-200' : 'text-slate-500'
            )}
          >
            £
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900'
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900'
            )}
          >
            {features.map((feature) => (
              <li key={feature.name} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600'
                  )}
                />
                <span className="ml-4">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
      </div>
    </div>
  );
}

export function Pricing() {
  const [selectedApplication, setSelectedApplication] = useState(householderApplication);
  const [selectedItems, setSelectedItems] = useState({});

  const handleChange = (item) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [item.name]: !prevState[item.name],
    }));
  };

  const calculateTotalCost = () => {
    const baseFee = selectedApplication.baseFee;
    const documentCost = selectedApplication.requiredDocuments.reduce((total, document) => {
      return total + (selectedItems[document.name] ? document.fee : 0);
    }, 0);
    const planCost = selectedApplication.requiredPlans.reduce((total, plan) => {
      return total + (selectedItems[plan.name] ? plan.fee : 0);
    }, 0);
    const additionalRequirementCost = selectedApplication.additionalRequirements
      ? selectedApplication.additionalRequirements.reduce((total, requirement) => {
          return total + (selectedItems[requirement.name] ? requirement.fee : 0);
        }, 0)
      : 0;

    return baseFee + documentCost + planCost + additionalRequirementCost;
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="pt-16 pb-8 scroll-mt-14 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="4" id="pricing-title">
          Pricing
        </SectionHeading>
        <p className="mt-8 text-5xl font-extrabold tracking-tight font-display text-slate-900">
          Transparent Pricing
        </p>
        <p className="max-w-xl mt-4 text-lg tracking-tight text-slate-600">
          We believe in being transparent with our pricing. Below you'll find detailed information on what's included in each of our packages so you can choose the best fit for your project.
        </p>
      </Container>
      <div className="max-w-5xl mx-auto mt-16 lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            featured
            name={householderApplication.type}
            description="The comprehensive package with everything you need for your householder application."
            price={householderApplication.baseFee}
            href="#"
            features={householderApplication.requiredDocuments.concat(
              householderApplication.requiredPlans,
              householderApplication.additionalRequirements
            )}
            handleChange={handleChange}
            selectedItems={selectedItems}
          />
          <Plan
            name={lawfulDevelopmentCertificate.type}
            description="A basic package for lawful development certificates."
            price={lawfulDevelopmentCertificate.baseFee}
            href="#"
            features={lawfulDevelopmentCertificate.requiredDocuments.concat(lawfulDevelopmentCertificate.requiredPlans)}
            handleChange={handleChange}
            selectedItems={selectedItems}
          />
        </div>
      </div>
      
    </section>
  );
}
