"use strict";function addReceiverInput(){var e=1;$(".js-add-receiver-input").on("click",function(){e++,$(".add-receiver-address-section").append('<div class="form-group"> <input class="form-control" name="receiver-address-field-'+e+'" type="text" placeholder="Enter receiver address"> <button class="btn btn-icon js-remove-receiver-input" type="button"><i class="far fa-times"></i></button></div>')}),$(document).on("click",".js-remove-receiver-input",function(){$(this).parent(".form-group").remove()})}function openMenuMobile(){$(".btn-open-menu").on("click",function(){$("html").toggleClass("overflow-hidden"),$(".navbar").toggleClass("active"),$(this).toggleClass("opened")})}function uploadFileLogo(){$(".js-upload-logo").on("change",function(e){var o=$(".label-upload-logo img"),n=(n=$(this).val()).substring(n.lastIndexOf("\\")+1),a=new FileReader;a.onload=function(e){o.attr("src",e.target.result),$(".label-upload-logo .desc p").hide(),$(".label-upload-logo .desc p.name-img").text(n).show()},a.readAsDataURL(this.files[0])})}function autoShowDropdownNavbar(){$(".navbar .navbar-item.dropdown").each(function(e,o){$(o).find(".collapse .navbar-link").hasClass("active")&&$(o).find(".collapse .navbar-link").parents(".collapse").collapse("show")})}$(document).ready(function(){addReceiverInput(),openMenuMobile(),uploadFileLogo(),autoShowDropdownNavbar(),$(window).on("load",function(){$("#modalConnectWallet").modal("hide")})});