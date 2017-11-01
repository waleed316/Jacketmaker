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
                       <li><a class="active-li" href="adres.php">ADDRESS BOOK</a></li>
                       <li><a href="order.php">MY ORDERS</a></li>
                       <li><a href="review.php">MY REVIEWS & RATINGS</a></li>
                   </ul>
               </div>

               <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                    <h6 class="dash-heading dis-inline">Address book</h6><a href="#" class="btn-ad btn btn-sm">Add A New Address</a>
                    <hr>
                    <div class="panel-box">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="two-boxes">
                                    <h6 class="cntct-detail-head">Your address</h6>
                                    <hr>
                                    <h6 class="billing-addres">Billing address</h6>
                                    <h6 class="cntct-name mt-3">Waleed Khan Replalcement</h6>
                                    <h6 class="cntct-name"><i class="fa fa-map-marker" aria-hidden="true"></i> 11/25 A Area Liaquatabad near masjid e aksa Karachi Sindh</h6>
                                    <h6 class="cntct-name mb-3"><i class="fa fa-phone" aria-hidden="true"></i> 03453045564</h6>                                    
                                    <h6 class="text-right mt-4"><a href="#" class="edit-anchor"><i class="mr-1 fa fa-pencil-square-o" aria-hidden="true"></i>Edit Address</a></h6>
                                    <hr>
                                    <h6 class="billing-addres mt-2">Default delivery address</h6>
                                    <h6 class="cntct-name mt-3">Waleed Khan Replalcement</h6>
                                    <h6 class="cntct-name"><i class="fa fa-map-marker" aria-hidden="true"></i> 11/25 A Area Liaquatabad near masjid e aksa Karachi Sindh</h6>
                                    <h6 class="cntct-name mb-3"><i class="fa fa-phone" aria-hidden="true"></i> 03453045564</h6>                                                                        
                                </div>
                            </div>  

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="two-boxes margin">
                                    <h6 class="cntct-detail-head">Additional addresses</h6>
                                    <hr>
                                    <h6 class="cntct-name mt-3">Waleed Khan Replalcement</h6>
                                    <h6 class="cntct-name"><i class="fa fa-map-marker" aria-hidden="true"></i> 11/25 A Area Liaquatabad near masjid e aksa Karachi Sindh</h6>
                                    <h6 class="cntct-name mb-3"><i class="fa fa-phone" aria-hidden="true"></i> 03453045564</h6>                                                                        
                                    <h6 class="add-services"><i class="fa fa-info mr-2" aria-hidden="true"></i><a href="#" class="edit">Edit Address</a><i class="fa fa-times-circle ml-3 mr-2" aria-hidden="true"></i><a href="#" class="delete">Delete Address</a></h6>
                                    <h6 class="add-services mt-4"><i class="fa fa-star-o mr-2" aria-hidden="true"></i><a href="#" class="default">Default Address</a></h6>                                    
                                </div>
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