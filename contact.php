<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './navigations/header.php' ?>  
  </head>
  
  <body>
    <?php include './navigations/navigation.php' ?>

    <div class="container-fluid mt-5">
        <div class="container px-5">
            <div class="row">
                <div class="col-xl-12">
                    <h1 class="contact-head text-center">CONTACT US</h1>

                    <div class="row mt-5">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <form action="" class="contact-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
                                </div>

                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" id="exampleTextarea" rows="5"></textarea>
                                </div>

                                <button type="submit" class="btn btn-submit">Submit</button>
                            </form>
                        </div>
                        
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925620.8043501101!2d66.50423761389811!3d25.010095050891096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C+Pakistan!5e0!3m2!1sen!2s!4v1508495242131" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>
                        </div>                        

                    </div>

                </div>
            </div>

            <div class="row mt-5">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <h1 class="contact-head">Contact Details</h1>
                    <ul class="contact-list">
                        <li><a href="mailto:google.com">www.Makeyourjacket.com</a></li>
                        <li><a href="tel:">01234568</a></li>                        
                    </ul>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <h1 class="contact-head">Address Details</h1>
                    <ul class="address-list">
                        <li>The Jacket Maker Limited</li>
                        <li>Office 2408 South Tower, </li>
                        <li>Emirates Financial Tower, DIFC,</li> 
                        <li>Dubai, </li>           
                        <li>United Arab Emirates</li>        
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <?php require './navigations/footer.php' ?>  
  </body>
</html>