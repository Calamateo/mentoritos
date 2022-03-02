import React from 'react'

const ShoppingCar3 = () => {
    return (
        <div>
            <div className="modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Medio de comunicación</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-primary btn-lg">Zoom</button>
                            <button type="button" className="btn btn-secondary btn-lg">Meet</button>
                            <button type="button" className="btn btn-secondary btn-lg">Facetime</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Anterior</button>
                            <button type="button" className="btn btn-primary">Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCar3