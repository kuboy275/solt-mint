"use strict";function addReceiverInput(){$(".js-add-receiver-input").on("click",function(){$(".add-receiver-wrapper").append('<div class="form-row multiple-input"><div class="col-8"><div class="form-group"><input class="form-control" type="text" name="receiver-address-field[]" placeholder="Enter receiver address"></div></div><div class="col-4"><div class="form-group"><input class="form-control" type="text" name="receiver-amount[]" placeholder="How much"> <button class="btn btn-icon js-remove-receiver-input" type="button"><i class="far fa-times"></i></button></div></div></div>')}),$(document).on("click",".js-remove-receiver-input",function(){$(this).parents(".form-row.multiple-input").remove()})}function openMenuMobile(){$(".btn-open-menu").on("click",function(){$("html").toggleClass("overflow-hidden"),$(".navbar").toggleClass("active"),$(this).toggleClass("opened")})}function uploadFileLogo(){$(".js-upload-logo").on("change",function(e){var o=$(".label-upload-logo img"),n=(n=$(this).val()).substring(n.lastIndexOf("\\")+1),l=new FileReader;l.onload=function(e){o.attr("src",e.target.result),$(".label-upload-logo .desc p").hide(),$(".label-upload-logo .desc p.name-img").text(n).show()},l.readAsDataURL(this.files[0])})}function autoShowDropdownNavbar(){$(".navbar .navbar-item.dropdown").each(function(e,o){$(o).find(".collapse .navbar-link").hasClass("active")&&$(o).find(".collapse .navbar-link").parents(".collapse").collapse("show")})}$(document).ready(function(){addReceiverInput(),openMenuMobile(),uploadFileLogo(),autoShowDropdownNavbar(),$(window).on("load",function(){$("#modalConnectWallet").modal("hide")}),$(".home-partners-sliders").slick({infinite:!0,slidesToShow:6,slidesToScroll:1,speed:700,autoplay:!0,autoplaySpeed:700,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}}]})});