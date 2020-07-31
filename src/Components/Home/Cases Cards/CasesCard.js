import React, {useContext} from 'react';
import CovidContext from "../../../Context/COVID/covidContext";

const CasesCard = ({name,value,addedToday,type,icon,selected}) => {
    const covidContext=useContext(CovidContext)
    const{setCurrentlySelected,currentlySelected}=covidContext
    return (

            <div className=" col-xl-4 col-md-4 mb-4 card-cases " style={{}} onClick={()=>{
                setCurrentlySelected(selected)
            }}>
                <div className={`card shadow border-left-${type} py-2 ${currentlySelected===selected?'bg-info':''}`} >
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