import React from 'react'
import './Cards.css'
import CartImg from '../../assets/images/cart.jpg'
import Template2Img from '../../assets/images/template2.jpg'
import DashboardImg from '../../assets/images/dashboard.jpg'
import DeskImg from '../../assets/images/desk.jpg'
import Gridcard from '../../components/GridCard/Gridcard'

function Cards(props) {

    return (
        <>
            <section>
                <div class="main-content">
                    {/* <!-- content --> */}
                    <div class="container-fluid content-top-gap">
                        {/* <!-- breadcrumbs --> */}
                        <nav aria-label="breadcrumb" class="mb-4">
                            <ol class="breadcrumb my-breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Cards</li>
                            </ol>
                        </nav>
                        {/* <!-- //breadcrumbs -->
        <!-- cards --> */}
                        <section class="template-cards">
                            {/* <!-- Card Columns --> */}
                            <div class="card card_border mb-5">
                                <div class="cards__heading">
                                    <h3>Card Columns</h3>
                                </div>
                                <div class="card-body">
                                    <div class="card-columns">
                                        <div class="card">
                                            <img src={CartImg} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title that wraps to a new line</h5>
                                                <p class="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                        <div class="card p-3">
                                            <blockquote class="blockquote mb-0 card-body">
                                                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                                    ante.
                                                </p>
                                                <footer class="blockquote-footer">
                                                    <small class="text-muted">
                                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                                    </small>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div class="card">
                                            <img src={Template2Img} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text  mb-4">This card has supporting text below as a natural lead-in to additional
                                                    content.
                                                </p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div class="card bg-primary text-white text-center p-3">
                                            <blockquote class="blockquote mb-0">
                                                <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                    erat.
                                                </p>
                                                <footer class="blockquote-footer text-white">
                                                    <small>
                                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                                    </small>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div class="card text-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text  mb-4">This card has a regular title and short paragraphy of text below it.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <img src={DashboardImg} class="card-img-top" alt="..." />
                                        </div>
                                        <div class="card p-3 text-right">
                                            <blockquote class="blockquote mb-0">
                                                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                                    ante.
                                                </p>
                                                <footer class="blockquote-footer">
                                                    <small class="text-muted">
                                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                                    </small>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text  mb-4">This is another card with title and supporting text below. This card has
                                                    some
                                                    additional content to make it slightly taller overall.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Card Columns -->

          <!-- Grid Columns --> */}
                            <div class="card card_border mb-5">
                                <div class="cards__heading">
                                    <h3>Grid Columns</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row row-cols-1 row-cols-md-2">
                                        <div class="col mb-4">
                                            <Gridcard img={Template2Img} />
                                        </div>
                                        <div class="col mb-4">
                                            <Gridcard img={DeskImg} />
                                        </div>
                                        <div class="col mb-4">
                                            <Gridcard img={CartImg} />
                                        </div>
                                        <div class="col mb-4">
                                            <Gridcard img={DashboardImg} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Grid Columns --> */}

                        </section>
                        {/* <!-- //cards --> */}

                    </div>
                    {/* <!-- //content --> */}
                </div>
                {/* <!-- main content end--> */}
            </section>
        </>
    )
}

export default Cards