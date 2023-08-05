import React from 'react';

const ExperienceItem = ({company, companySubtitle, children}:{
  company: string;
  companySubtitle?: string;
  children?: React.ReactNode;
}) => {
  function render() {
    return(
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="uppercase text-3xl font-bold">{company}</h3>
          {companySubtitle &&
          <h4>{companySubtitle}</h4>
          }
        </div>
        <div className="col-span-9 border-0 border-l-4 border-teal-600 pl-12 relative">
          {children}
        </div>
      </div>
    )
  }

  return render()
}

export default ExperienceItem