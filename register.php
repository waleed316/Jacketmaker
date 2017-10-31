<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './navigations/header.php' ?>  
  </head>
  
  <body class="about-body">
    <?php include './navigations/navigation.php' ?>

    
    <div class="container-fluid mt-5 pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-10">
                    <h6 class="creat-head">Create new customer account</h6>
                    <hr>
                    <form action="" class="register-form-styling">
                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">Gender*</label>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-7">
                                <select required class="form-control">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>  
                        </div>


                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">First Name*</label>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                            <input class="form-control" required type="text" id="example-text-input">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">Last Name*</label>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                            <input class="form-control" required type="text" id="example-text-input">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">Birthday*</label>
                            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 pr-0 mr-1">
                                <input class="form-control px-1" required type="text" id="example-text-input">
                                <small class="form-text text-muted">DD</small> 
                            </div>

                            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 pl-0 pr-1 mr-0">
                                <input class="form-control px-1" required type="text" id="example-text-input">
                                <small class="form-text text-muted">MM</small> 
                            </div>

                            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 pl-0 ml-0 pr-0">
                                <input class="form-control px-1" required type="text" id="example-text-input">
                                <small class="form-text text-muted">YYYY</small> 
                            </div>

                        </div>
                    
                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">Email*</label>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                            <input class="form-control" required type="email" id="example-text-input">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">Password*</label>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                            <input class="form-control" required type="email" id="example-text-input">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="example-text-input" class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 col-form-label label1">Retype Password*</label>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                            <input class="form-control" required type="email" id="example-text-input">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="form-check-label col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 label1 ">
                                <input class="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            </label>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                                <small class="form-text text-muted">I want to receive Newsletter and SMS with best deals and offers</small>   
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="0ffset-xl-2 offset-lg-2 offset-md-2 offset-sm-3 offset-5 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                                <small class="form-text text-muted">* Required fields</small>   
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="0ffset-xl-2 offset-lg-2 offset-md-2 offset-sm-3 offset-5 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox"> Keep me Logged in
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="0ffset-xl-2 offset-lg-2 offset-md-2 offset-sm-3 offset-5 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                                <button type="submit" class="btn btn-sm register-btn">SUBMIT</button>
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