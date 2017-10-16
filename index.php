<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './navigations/header.php' ?>  
   
  </head>
  <body>
    <?php include './navigations/navigation.php' ?>

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="main-banner" src="images/banner.png" alt="First slide">
                <div class="main-image-bg"></div>
            </div>
        </div>

        <div class="container main-banner-text">
            <div class="row">
                <div class="col-xl-12 text-center">
                    <h1>CUSTOM LEATHER JACKET</h1>
                    <h4>Your Story. Your Details. Your Jacket</h4>
                    <br class="mobile-hide"><br>
                    <a href="#">ORDER NOW</a>
                </div>
            </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <!-- video section -->
    <div class="container-fluid">
        <div class="box">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <h3>Main Heading</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div class="embed-responsive embed-responsive-21by9">
                        <iframe class="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>      
            </div>
        </div>
    </div>
    
    <!-- form section -->
    <div class="container-fluid form-bg-color">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h3 class="form-heading1">Your Customize Jacket</h3>
                    <h4 class="form-heading2">Just Few Clicks Away</h4>

                    <div class="row form-margin">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <form action="">
                                <div class="form-group row input-margin">
                                    <div class="col-sm-6">
                                        <input type="text" required name="f_name" placeholder="Name" class="form-control">
                                        <input type="email" required name="email" placeholder="Email" class="form-control">
                                        <input type="text" required name="phone_no" placeholder="Phone No (Optional)" class="form-control">
                                        <label for="exampleInputFile">Upload (Picture or Skech of desired jacket/Logo)</label>
                                        <input type="file" class="form-control-file">
                                    </div>

                                    <div class="col-sm-6">
                                        <input type="text" required name="material" placeholder="Material (Real Leather, Denim, Wool, Faux Leather etc)" class="form-control">
                                        <textarea name="desc" required class="form-control" placeholder="Description" cols="30" rows="8"></textarea>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-12 text-center">
                                        <button type="submit" class="btn form-submit-btn" name="form-submit">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div id="carousel">
                    <a href="#"><img src="images/c1.jpg" class="img-fluid" id="item-1" /></a>
                    <a href="#"><img src="images/c2.jpg" class="img-fluid" id="item-2" /></a>
                    <a href="#"><img src="images/c3.jpg" class="img-fluid" id="item-3" /></a>
                    <a href="#"><img src="images/c4.jpg" class="img-fluid" id="item-4" /></a>
                    <!-- <a href="#"><img src="images/5.jpg" id="item-5" /></a>
                    <a href="#"><img src="images/6.jpg" id="item-6" /></a>
                    <a href="#"><img src="images/7.jpg" id="item-7" /></a>
                    <a href="#"><img src="images/8.jpg" id="item-8" /></a>
                    <a href="#"><img src="images/9.jpg" id="item-9" /></a> -->
                </div>
                    <a href="#" id="prev">Prev</a> | <a href="#" id="next">Next</a>
                
            </div>
        </div>
    </div>  

    <!-- men's Leather Jacket -->
    <div class="container-fluid margin-top">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <table style="height:100%">
                        <tr><td class="align-middle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </td></tr>
                    </table>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="cover-image">
                        <img src="images/Types-of-leather.jpg">
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <table style="height:100%">
                        <tr><td class="align-bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </td></tr>
                    </table>
                </div>            
            </div>
        </div>

        <div class="row four-box">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div class="four-boxes">
                    <img src="images/leather-jacket.jpg" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div class="four-boxes">
                    <img src="images/leather-jacket.jpg" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div class="four-boxes">
                    <img src="images/leather-jacket.jpg" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div class="four-boxes">
                    <img src="images/leather-jacket.jpg" class="img-fluid" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <table style="height:100%">
                        <tr><td class="align-middle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </td></tr>
                    </table>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="cover-image">
                        <img src="images/41e8b35367fc8ac4ede31f68aae734ac.png">
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <table style="height:100%">
                        <tr><td class="align-bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </td></tr>
                    </table>
                </div>            
            </div>
        </div>
    </div>

    <?php require './navigations/footer.php' ?>  
    <script type="text/javascript">
      $(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

      });
    </script>
  </body>
</html>