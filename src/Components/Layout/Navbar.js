import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                <div className="container-fluid d-flex flex-column p-0">
                    <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-ruler-horizontal"></i></div>
                        <div className="sidebar-brand-text mx-3"><span>COVID TRACKER</span></div>
                    </a>
                        <ul className="nav navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item" role="presentation"><a className="nav-link active" href="index.html"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="register.html"><i className="fas fa-user-circle"></i><span>International</span></a></li>
                        </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;