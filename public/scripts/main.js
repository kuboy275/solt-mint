function addReceiverInput() {
    $(".js-add-receiver-input").on('click', function(){
        $('.add-receiver-wrapper').append('<div class="form-row multiple-input"><div class="col-8"><div class="form-group"><input class="form-control" type="text" name="receiver-address-field[]" placeholder="Enter receiver address"></div></div><div class="col-4"><div class="form-group"><input class="form-control" type="text" name="receiver-amount[]" placeholder="How much"> <button class="btn btn-icon js-remove-receiver-input" type="button"><i class="far fa-times"></i></button></div></div></div>');
    });

    $(document).on('click', '.js-remove-receiver-input', function(){
        $(this).parents('.form-row.multiple-input').remove();
    })
}

function openMenuMobile() {
    $('.btn-open-menu').on('click', function(){
        $('html').toggleClass('overflow-hidden');
        $('.navbar').toggleClass('active');
        $(this).toggleClass('opened');
    })
}

function uploadFileLogo() {
    $('.js-upload-logo').on('change', function(e) {
        var currentEle = $('.label-upload-logo img');
        var fileName = $(this).val();
        fileName= fileName.substring(fileName.lastIndexOf('\\') + 1);
        var reader = new FileReader();
        reader.onload = function(event) {
            currentEle.attr('src', event.target.result);
            $('.label-upload-logo .desc p').hide();
            $('.label-upload-logo .desc p.name-img').text(fileName).show();
        }
        reader.readAsDataURL(this.files[0])
    })
}

function autoShowDropdownNavbar() {
    $('.navbar .navbar-item.dropdown').each(function(id, el) {
        if( $(el).find('.collapse .navbar-link').hasClass('active') ) {
            $(el).find('.collapse .navbar-link').parents('.collapse').collapse('show')
        }
    })
}



$(document).ready(function () {
    // Add Receiver Address Input
    addReceiverInput();

    // OpenMenuMobile
    openMenuMobile();

    // Upload Logo
    uploadFileLogo();

    autoShowDropdownNavbar();
    
    $(window).on('load', function() {
        $('#modalConnectWallet').modal('hide');
    });
});
