jQuery(document).ready(function (){
    jQuery(".clickable-design").click(function () {
        jQuery("#design-icon").toggle();
        jQuery("#design-description").toggle();
    });
    jQuery(".clickable-dev").click(function (){
        jQuery("#dev-icon").toggle();
        jQuery("#dev-description").toggle();
    });
    jQuery(".clickable-product").click(function (){
        jQuery("#product-icon").toggle();
        jQuery("#product-description").toggle();
    });
});
