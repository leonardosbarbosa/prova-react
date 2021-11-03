import React from 'react'
import Chart from '../../components/Chart/Chart'
import StatsCard from '../../components/StatsCard/StatsCard'
import './Home.css'

function Home(props) {

    return (
        <>
            <section>

                {/* <!-- //sidebar menu end -->
    <!-- header-starts --> */}

                <div className="main-content">

                    {/* <!-- content --> */}
                    <div className="container-fluid content-top-gap">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb my-breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                        <div className="welcome-msg pt-3 pb-4">
                            <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                            <p>Very detailed & featured admin.</p>
                        </div>

                        {/* <!-- statistics data --> */}
                        <div className="statistics">
                            <div className="row">
                                <div className="col-xl-6 pr-xl-2">
                                    <div className="row">
                                        <div className="col-sm-6 pr-sm-2 statistics-grid">
                                            <StatsCard icon="lnr-users" number="29.75 M" text="Total Users" color="primary"/>
                                        </div>
                                        <div className="col-sm-6 pl-sm-2 statistics-grid">
                                        <StatsCard icon="lnr-eye" number="51.25 K" text="Daily Visitors" color="secondary"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 pl-xl-2">
                                    <div className="row">
                                        <div className="col-sm-6 pr-sm-2 statistics-grid">
                                        <StatsCard icon="lnr-cloud-download" number="166.89 M" text="Downloads" color="success"/>
                                        </div>
                                        <div className="col-sm-6 pl-sm-2 statistics-grid">
                                        <StatsCard icon="lnr-cart" number="1,250K" text="Purchased" color="danger"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- //statistics data -->

  <!-- charts --> */}
                        <div className="chart">
                            <div className="row">
                                <Chart name="Bar Chart" id="barchart" lastUpdate="2 hours ago"/>
                                <Chart name="Line Chart" id="linechart" lastUpdate="just now"/>
                            </div>
                        </div>
                        {/* <!-- //charts --> */}
                    </div>
                    {/* <!-- //content --> */}
                </div>
            </section>
        </>
    )
}

export default Home