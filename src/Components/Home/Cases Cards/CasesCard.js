import React from 'react';

const CasesCard = ({name,value,addedToday,type,icon}) => {
    return (
            <div className="col-md-6 col-xl-4 mb-4">
                <div className={`card shadow border-left-${type} py-2`}>
                    <div className="card-body">
                        <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                                <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>{name}</span></div>
                                <div className="text-dark font-weight-bold h5 mb-0"><span>{value}</span></div>
                                <div className="text-danger font-weight-bold h5 mb-0 align-items-end">
                                    <span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀+{addedToday}</span>
                                </div>
                            </div>
                            <div className="col-auto"><i className={icon}></i></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CasesCard;