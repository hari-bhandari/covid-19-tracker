import React from 'react';

const CasesCard = ({name,value}) => {
    return (
            <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-left-primary py-2">
                    <div className="card-body">
                        <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                                <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Corona</span></div>
                                <div className="text-dark font-weight-bold h5 mb-0"><span>as</span></div>
                            </div>
                            <div className="col-auto"><i className="fas fa-temperature-high fa-2x text-gray-300"></i></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CasesCard;