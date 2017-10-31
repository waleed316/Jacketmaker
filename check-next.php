<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './navigations/header.php' ?>  
  </head>
  
  <body>

    <!-- logo section -->
    <div class="container-fluid mt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 text-center">
                    <img src="images/Black Myj (1).png" alt="" class="imgfluid">
                </div>
            </div>
        </div>
    </div>

    <!-- checkout steps -->
    <div class="container-fluid mt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <span class="badge badge-pill badge-clr">1</span><h6 class="bdge-heading">SHIPPING DETAILS</h6>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <span class="badge badge-pill badge-no">2</span><h6 class="bdge-heading">BILLING DETAILS</h6>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <span class="badge badge-pill badge-clr">3</span><h6 class="bdge-heading">PAYMENT</h6>
                </div>
            </div>
            <hr>
        </div>
    </div>

    <!-- forms -->
    <div class="container-fluid">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-8 ">
                    <h6 class="billing-add mt-5 mb-5">BILLING DETAILS</h6>
                    <form action="">
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-height mmm"  placeholder="First Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-height"  placeholder="Last Name">
                            </div>
                        </div>


                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-height mmm"  placeholder="Address">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-height"  placeholder="City">
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-height mmm"  placeholder="Post Code">
                            </div>
                            <div class="col-sm-6">
                                <select class="form-control">
                                    <option>United States</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-sm-6">
                                <select class="form-control">
                                    <option>Select States</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                            </div>
                        </div>


                        <div class="form-group row mt-5">
                            <div class="col-sm-6">
                                <a href="checkout.php" class="back-btn"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</a>
                            </div>
                            <div class="col-sm-6 text-right">
                                <a href="check-final.php" class="next-check-btn btn">Next</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php require './navigations/footer.php' ?>  
  
  </body>
</html>