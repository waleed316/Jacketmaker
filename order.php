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
                       <li><a href="personal.php">PERSONAL INFORMATION</a></li>
                       <li><a href="adres.php">ADDRESS BOOK</a></li>
                       <li><a class="active-li" href="order.php">MY ORDERS</a></li>
                       <li><a href="review.php">MY REVIEWS & RATINGS</a></li>
                   </ul>
               </div>

               <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-5">
                            <h6 class="dash-heading mb-0">Address book</h6> 
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-3 col-3">
                            <a href="#" class="anchar">Print all orders</a>
                        </div>

                        <div class="col-xl-8 col-lg-6 col-md-4 col-sm-5 col-4 text-right">
                            <form action="" class="form-inline" style="display:inline">
                                <select class="form-control form-control-sm" id="exampleSelect1">
                                    <option>Last 30 Days</option>
                                    <option>Last 6 Months</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <button type="submit" class="mx-1 go-btn btn btn-sm">Go</button>
                            </form>
                        </div>


                    </div>
                    <hr class="my-2">
                    <div class="panel-box">
                        <div class="row">
                           <div class="col-xl-12">
                               <h6 class="sm text-center mt-3">You have not placed any new orders.</h6>
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