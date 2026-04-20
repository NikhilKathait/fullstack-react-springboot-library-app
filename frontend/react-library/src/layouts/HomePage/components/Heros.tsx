export const Heros = () => {
    return (
        <div>

            {/* Desktop Heroes */}
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-4'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What have you been reading lately?</h1>
                            <p className='lead'>
                                The library team would love to know what you have been reading.
                                Share your recent reads with fellow book lovers!
                                We will be able to provide top content for you!
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Check back often to see new additions to our library.
                                We are constantly updating our collection with the latest
                                and greatest books across all genres. We are Redifying
                                our collection just for you!
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heroes */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading lately?</h1>
                            <p className='lead'>
                                The library team would love to know what you have been reading.
                                Share your recent reads with fellow book lovers!
                                We will be able to provide top content for you!
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Check back often to see new additions to our library.
                                We are constantly updating our collection with the latest
                                and greatest books across all genres. We are <b>Redify</b>ing
                                our collection just for you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}