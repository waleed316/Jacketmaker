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
                       <li><a class="active-li" href="dash.php">ACCOUNT SETTINGS PANEL</a></li>
                       <li><a href="personal.php">PERSONAL INFORMATION</a></li>
                       <li><a href="adres.php">ADDRESS BOOK</a></li>
                       <li><a href="order.php">MY ORDERS</a></li>
                       <li><a href="review.php">MY REVIEWS & RATINGS</a></li>
                   </ul>
               </div>

               <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                    <h6 class="dash-heading">Account Setting Panel</h6>
                    <hr>
                    <div class="panel-box">
                        <div class="name-box">
                            <h6 class="name-echo">Hello Waleed Khan</h6>
                            <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select link below to view or edit information.</p>
                        </div>

                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="detail-box">
                                    <h6 class="cntct-detail-head">Contact details</h6>
                                    <hr>
                                    <h6 class="cntct-name mt-3">Waleed Khan</h6>
                                    <h6 class="cntct-name mb-3">WaleedKhan633@gmail.com - <a href="">Change E-mail</a> </h6>
                                    <a href="#" class="pswrd-chnge">Change Password</a>
                                    <h6 class="text-right mt-4"><a href="#" class="edit-anchor"><i class="mr-1 fa fa-pencil-square-o" aria-hidden="true"></i>Edit</a></h6>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-xl-6">
                                <h6 class="address-head">Address book</h6>
                            </div>

                            <div class="col-xl-6">
                                <h6 class="address-manag text-right"><a href="#">Address management</a></h6>
                            </div>
                        </div>

                        <hr class="my-1" style="background-color:black">


                        <div class="row mt-4">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="two-boxes">
                                    <h6 class="cntct-detail-head">Default billing address</h6>
                                    <hr>
                                    <h6 class="cntct-name mt-3">Waleed Khan Replalcement</h6>
                                    <h6 class="cntct-name"><i class="fa fa-map-marker" aria-hidden="true"></i> 11/25 A Area Liaquatabad near masjid e aksa Karachi Sindh</h6>
                                    <h6 class="cntct-name mb-3"><i class="fa fa-phone" aria-hidden="true"></i> 03453045564</h6>                                    
                                    <h6 class="text-right mt-4"><a href="#" class="edit-anchor"><i class="mr-1 fa fa-pencil-square-o" aria-hidden="true"></i>Edit Address</a></h6>
                                </div>
                            </div>  

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="two-boxes min-height">
                                    <h6 class="cntct-detail-head">Default delivery address</h6>
                                    <hr>
                                    <h6 class="cntct-name mt-3">No default shipping address available</h6>
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