jQuery(document).ready(function(){

   /*jQuery(".world-map area").mouseover(
      function(){jQuery(this).parent().toggleClass("over-continental");}
   );*/
   
   //change background of continental on mouseover
   /*
   jQuery("body").delegate('.world-map area','mouseover mouseleave', function(e){
      if (e.type == 'mouseover') {
         jQuery(this).parent().parent().css('background-position','left bottom');
      } else {
         if (!jQuery(this).parent().parent().hasClass('active')) {
            jQuery(this).parent().parent().css('background-position','left top');
         }
      }
   });
*/

  jQuery('area').on('mouseover', function(){
    if (jQuery('#view_mobile_trigger').is(':visible')) {

    }
    else {
      jQuery(this).parent().find('.international_infobox').show();
      if (!jQuery(this).parents('.international_map_region_holder').hasClass('active')) {
        jQuery(this).parents('.international_map_region_holder').addClass('tmp-active');
      }
      jQuery(this).parent().parent().addClass('active');
    }
   });

   jQuery('area').on('mouseout', function(){
    if (jQuery('#view_mobile_trigger').is(':visible')) {

    }
    else {
      jQuery(this).parent().find('.international_infobox').hide();
      if (jQuery(this).parents('.international_map_region_holder').hasClass('tmp-active')) {
        jQuery(this).parents('.international_map_region_holder').removeClass('active').removeClass('tmp-active');
      }
    }
  });

  jQuery('.international_infobox').on('mouseover', function(){
    if (jQuery('#view_mobile_trigger').is(':visible')) {

    }
    else {
      jQuery(this).show();
      if (!jQuery(this).parents('.international_map_region_holder').hasClass('active')) {
        jQuery(this).parents('.international_map_region_holder').addClass('tmp-active');
      }
      jQuery(this).parent().parent().addClass('active');
    }  
  });

  jQuery('.international_infobox').on('mouseout', function(){
    if (jQuery('#view_mobile_trigger').is(':visible')) {

    }
    else {
      jQuery(this).hide();
      if (jQuery(this).parents('.international_map_region_holder').hasClass('tmp-active')) {
        jQuery(this).parents('.international_map_region_holder').removeClass('active').removeClass('tmp-active');
      }
    }
  });

/*
   jQuery('.international_infobox').click(function() {
     jQuery(this).siblings('area').trigger('click');
   });
*/

    jQuery('.international_infobox').on('click', function() {
      var tmp_area_href = jQuery(this).parent().find('area').attr('href');
      document.location.href = tmp_area_href;
    });

    jQuery('.international_infobox').on('touchend', function(e) {
      e.preventDefault();
      var tmp_area_href = jQuery(this).parent().find('area').attr('href');
      document.location.href = tmp_area_href;
    });

});
