<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './navigations/header.php' ?>  
  </head>
  
  <body class="about-body">
    <?php include './navigations/navigation.php' ?>

    
   <div class="container-fluid mt-5 pt-4">
       <div class="container">
           <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-7">
                   <h6 class="dash-heading">MY ACCOUNT</h6>
                   <hr>
                   <div class="rotate"></div>
                   <ul class="dash-list">
                       <li><a href="dash.php">ACCOUNT SETTINGS PANEL</a></li>
                       <li><a class="active-li" href="personal.php">PERSONAL INFORMATION</a></li>
                       <li><a href="adres.php">ADDRESS BOOK</a></li>
                       <li><a href="order.php">MY ORDERS</a></li>
                       <li><a href="review.php">MY REVIEWS & RATINGS</a></li>
                   </ul>
               </div>

               <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                    <h6 class="dash-heading">Edit account</h6>
                    <hr>
                    <div class="panel1-box">
                        <div class="row d-flex justify-content-center">
                            <div class="col-xl-8">
                                <form action="">
                                
                                    <div class="form-group row">
                                        <label for="example-text-input" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 col-form-label label1">First Name*</label>
                                        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-4 col-7">
                                        <input class="form-control" required type="text" id="example-text-input">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="example-text-input" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 col-form-label label1">Last Name*</label>
                                        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-4 col-7">
                                        <input class="form-control" required type="text" id="example-text-input">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="example-text-input" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 col-form-label label1">Gender*</label>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-7">
                                            <select required class="form-control">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>  
                                    </div>


                                    <div class="form-group row">
                                        <label for="example-text-input" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 col-form-label label1">Current Email</label>
                                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-4 col-7">
                                            <p class="form-control-static">Waleedkhan633@gmail.com</p>
                                        </div>
                                    </div>
                                
                                    <div class="form-group row">
                                        <label for="example-text-input" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 col-form-label label1">New Email</label>
                                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-4 col-7">
                                        <input class="form-control" required type="email" id="example-text-input">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="example-text-input" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 col-form-label label1">Birthday*</label>
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 pr-0 mr-1">
                                            <input class="form-control px-1" required type="text" id="example-text-input">
                                            <small class="form-text text-muted">DD</small> 
                                        </div>

                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 pl-0 pr-1 mr-0">
                                            <input class="form-control px-1" required type="text" id="example-text-input">
                                            <small class="form-text text-muted">MM</small> 
                                        </div>

                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 pl-0 ml-0 pr-0">
                                            <input class="form-control px-1" required type="text" id="example-text-input">
                                            <small class="form-text text-muted">YYYY</small> 
                                        </div>

                                    </div>



                                    <div class="form-group row">
                                        <div class="0ffset-xl-3 offset-lg-3 offset-md-3 offset-sm-3 offset-5 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                                            <small class="form-text text-muted">* Required fields</small>   
                                        </div>
                                    </div>


                                    <div class="form-group row">
                                        <div class="0ffset-xl-3 offset-lg-3 offset-md-3 offset-sm-3 offset-5 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7">
                                            <button type="submit" class="btn btn-sm register-btn">Save</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </div>
   </div>

    <?php require './navigations/footer.php' ?>  
  </body>
</html>