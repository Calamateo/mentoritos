import React from 'react'


const AcordionItem = ({acorTitle, mentorInformation, numAcordion}) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`flush-heading${numAcordion}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${numAcordion}`} aria-expanded="false"
                    aria-controls={`flush-collapse${numAcordion}`}>
                    {acorTitle}
                </button>
            </h2>
            <div id={`flush-collapse${numAcordion}`} className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${numAcordion}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    {mentorInformation}
                </div>
            </div>
        </div>
    );
}



export {AcordionItem}