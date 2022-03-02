import React from 'react'
import './EditarTextContent.css'

const EditarTextContent = ({title, editInfo, setEditInfo}) => {
  const onChange = (event) => {
    setEditInfo(event.target.value)
    
  }
    
  return (
    <div>
        <section id="editSection">
              <h3>{title}</h3>
              <textarea value={editInfo}
                        onChange={onChange}></textarea>
        </section>
        
    </div>
  );
}

export  {EditarTextContent}