<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './navigations/header.php' ?>  
  </head>
  
  <body>
    <?php include './navigations/navigation.php' ?>

    <!--  Product Section  -->
    <div class="container-fluid margin-product">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <nav class="breadcrumb">
                        <a class="breadcrumb-item" href="#">Home</a>
                        <a class="breadcrumb-item" href="#">Leather Jacket</a>
                        <span class="breadcrumb-item active">Black Leather jacket</span>
                    </nav>
                </div>
            </div>


            <div class="row margin-gallery">
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                    <ul id="image-gallery" class="gallery list-unstyled cS-hidden">
                        <li data-thumb="images/1.jpg" data-src="images/1.jpg"> 
                            <img src="images/1.jpg" class="img-fluid" />
                        </li>
                        <li data-thumb="images/2.jpg" data-src="images/2.jpg"> 
                            <img src="images/2.jpg" class="img-fluid" />
                        </li>
                        <li data-thumb="images/3.jpg" data-src="images/3.jpg"> 
                            <img src="images/3.jpg" class="img-fluid" />
                        </li>
                        <li data-thumb="images/4.jpg" data-src="images/4.jpg"> 
                            <img src="images/4.jpg" class="img-fluid" />
                        </li>
                    </ul>
                </div>

                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 margin-size">
                    <h4 class="product-heading">XYZ Black Leather Biker Jacket</h4>
                    <span class=""><i class="fa fa-tag" aria-hidden="true"></i> Price $</span>
                    <ul class="sizes">
                        <li><a href="#" class="sixe-box">S</a></li>
                        <li><a href="#" class="sixe-box">M</a></li>
                        <li><a href="#" class="sixe-box">L</a></li>
                        <li><a href="#" class="sixe-box">XL</a></li>                        
                        <li><a href="#" class="sixe-box">XXL</a></li>
                        <li><a href="#" class="sixe-box">2XL</a></li>
                    </ul>

                    <h6 class="product-detail">Details</h6>
                    <p class="details-desc">The Quick brown fox jump over the lazy dog the quick brown fox jump over the lazy dog the quick brown fox jump over the lazy dog</p>
                    <ul class="details">
                        <li>High Quality leather is used</li>
                        <li>High Quality leather is used</li>
                        <li>High Quality leather is used</li>
                        <li>High Quality leather is used</li>                        
                    </ul>

                    <div class="text-center">
                        <button class="btn add-to-cart-btn">Add To Cart</button>
                    </div>

                    <div class="reviews">
                        <ul class="stars">
                            <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li>(Total Reviews)</li>
                        </ul>

                        <form action="" class="text-center">
                            <div class="form-group">
                                <input type="text" name="review" class="form-control" placeholder="Write a review ...">
                            </div>

                            <button class="btn btn-submit">SUBMIT</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>

    

    <div class="container-fluid related">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h1 class="text-center">Related Items</h1>
                    <ul class="related-prod text-center">
                        <li>
                            <a href="#" class="r-anchor">
                                <div class="r-products">
                                    <div class="img-products">
                                        <img src="images/1.jpg" alt="">
                                        <div class="hover-product"></div>
                                    </div>
                                    <h6 class="text-center r-heading">Leather Jacket</h6>
                                    <h6 class="text-center">$ 200</h6>
                                    <ul class="rp-star text-center">
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>                                    
                                    </ul>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="r-anchor">
                                <div class="r-products">
                                    <div class="img-products">
                                        <img src="images/1.jpg" alt="">
                                        <div class="hover-product"></div>                                        
                                    </div>
                                    <h6 class="text-center r-heading">Leather Jacket</h6>
                                    <h6 class="text-center">$ 200</h6>
                                    <ul class="rp-star text-center">
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>                                    
                                    </ul>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="r-anchor">
                                <div class="r-products">
                                    <div class="img-products">
                                        <img src="images/1.jpg" alt="">
                                        <div class="hover-product"></div>                                        
                                    </div>
                                    <h6 class="text-center r-heading">Leather Jacket</h6>
                                    <h6 class="text-center">$ 200</h6>
                                    <ul class="rp-star text-center">
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>                                    
                                    </ul>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="r-anchor">
                                <div class="r-products">
                                    <div class="img-products">
                                        <img src="images/1.jpg" alt="">
                                        <div class="hover-product"></div>                                        
                                    </div>
                                    <h6 class="text-center r-heading">Leather Jacket</h6>
                                    <h6 class="text-center">$ 200</h6>
                                    <ul class="rp-star text-center">
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>                                    
                                    </ul>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="r-anchor">
                                <div class="r-products">
                                    <div class="img-products">
                                        <img src="images/1.jpg" alt="">
                                        <div class="hover-product"></div>                                        
                                    </div>
                                    <h6 class="text-center r-heading">Leather Jacket</h6>
                                    <h6 class="text-center">$ 200</h6>
                                    <ul class="rp-star text-center">
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>                                    
                                    </ul>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- banner -->
    <div class="container-fluid banner">
        <div class="row">
            <div class="text-center col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h5>Didn't Find What You were Looking for?</h5>
                <h6>Get Your Dream Jacket Made.</h6>
                <button class="btn btn-get">Get Started</button>
            </div>
        </div>
    </div>

    <?php require './navigations/footer.php' ?>  
    <script>
       $(document).ready(function() {
			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
		});
    </script>
  </body>
</html>