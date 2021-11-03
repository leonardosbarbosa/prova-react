import React from 'react'
import Input from '../../components/micro/Input/Input'
import Select from '../../components/micro/Select/Select'
import './Forms.css'

function Forms(props) {

    return (
        <>
            <section>
                <div class="main-content">

                    <div class="container-fluid content-top-gap">

                        <nav aria-label="breadcrumb" class="mb-4">
                            <ol class="breadcrumb my-breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Forms</li>
                            </ol>
                        </nav>

                        <section class="forms">
                            <div class="card card_border py-2 mb-4">
                                <div class="cards__heading">
                                    <h3>Forms <span></span></h3>
                                </div>
                                <div class="card-body">
                                    <form action="#" method="post">
                                        <div class="form-group">
                                            <Input id="exampleInputEmail1" type="email" label="Email address" placeholder="Enter email" />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                                anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <Input id="exampleInputPassword1" type="password" label="Password" placeholder="Password" />
                                        </div>
                                        <div class="form-check check-remember check-me-out">
                                            <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1" />
                                            <label class="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-style mt-4">Submit</button>
                                    </form>
                                </div>
                            </div>

                            <div class="card card_border py-2 mb-4">
                                <div class="card-body">
                                    <form action="#" method="post">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <Input id="inputEmail4" type="email" label="Email" placeholder="Enter email" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <Input id="inputPassword4" type="password" label="Password" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <Input id="inputAddress" type="text" label="Address" placeholder="1234 Main St" />
                                        </div>
                                        <div class="form-group">
                                            <Input id="inputAddress2" type="text" label="Address 2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <Input id="inputCity" type="text" label="City" placeholder="Your city" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <Select id="inputState" label="State" />
                                            </div>
                                            <div class="form-group col-md-2">
                                                <Input id="inputZip" type="text" label="Zip" placeholder="Your zip code" />
                                            </div>
                                        </div>
                                        <div class="form-check check-remember check-me-out">
                                            <input class="form-check-input checkbox" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label checkmark" for="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-style mt-4">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forms