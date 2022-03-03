import React from 'react'


const AcordionItem = ({acorTitle, mentorInformation, numAcordion}) => {
    return (
        <div className="card profile-card mb-4 p-2">
            <h3 className="" id={`flush-heading${numAcordion}`}>
                <span className="" type="text"
                    data-bs-target={`#flush-collapse${numAcordion}`} aria-expanded="true"
                    aria-controls={`flush-collapse${numAcordion}`}>
                    {acorTitle}
                </span>
            </h3>
            <div id={`flush-collapse${numAcordion}`} className=""
                aria-labelledby={`flush-heading${numAcordion}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    {mentorInformation}
                </div>
            </div>
        </div>
    );
}



export {AcordionItem}