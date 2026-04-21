import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
    return (
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white 
                d-flex justify-content-center align-item-center' >
                    <div>
                        <h1 className='display-8 f2-bold'>Find your next adventure</h1>
                        <p className='fs-4'>Discover the most popular books handpicked just for you.</p>
                        <Link type='button' className='btn main-color btn-lg text-white' to='/search'>
                            Explore Top Books
                        </Link>
                    </div>
            </div>
        </div>
    );
}