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
                       <li><a href="order.php">MY ORDERS</a></li>
                       <li><a class="active-li" href="review.php">MY REVIEWS & RATINGS</a></li>
                   </ul>
               </div>

               <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                    <h6 class="dash-heading">MY REVIEWS & RATINGS</h6>
                    <hr class="my-2">
                    <div class="panel-box">
                        <div class="row">
                           <div class="col-xl-12">
                               <h6 class="sm text-center mt-3">You didn't buy any product yet.</h6>
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