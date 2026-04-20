export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>

                {/* Brand */}
                <span className='navbar-brand fw-bold fs-4'>Readify</span>

                {/* Toggle Button */}
                <button className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                {/* Navbar Links */}
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>

                    {/* Left items */}
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search Books</a>
                        </li>
                    </ul>

                    {/* Right items */}
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#'>Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}