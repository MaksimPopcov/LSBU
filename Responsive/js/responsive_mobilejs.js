/*
*
*    Table of contents
*
*    1. Functions
*   1.1 Resize home slider
*   1.2 Slider mobile navigation
*   1.3 Align Top menu
*   1.4 Mode detect
*   1.5 Mode change
*     1.5.1.1 Show top menu 
*     1.5.1.2 Align top menu
*     1.5.1.3 Assign colorbox elements
*     1.5.1.4 Hide timetable
*     1.5.2.1 Unassign colorbox elements
*   1.6 Align carousel
*   1.7 Colorbox ajax replacement
*   1.8 Create mobile table
*   1.9 Event search select
*   1.10 Add pointer image to main navigation
*   1.11 Course search modifications
*     1.11.1 Change placeholder
*     1.11.2 Expose 'Level' filter
*   1.12 Reorganize home slider
*   1.13 News search modifications
*   1.14 Pagination fix
*   1.15 People search modifications
*   1.16 Case studies search modifications
*   1.17 International page modifications
*   1.18 Resize campaign page slider
*   1.19 Campaign page modifications
*   1.20 Department page modifications
*   1.21 Top of page arrow modifications
*   1.22 Social media plugin modifications
*   1.23 Megamenu adjusting
*   1.24 Finder pages modification
*   1.25 Course page modifications
*   1.26 Mobile Go-back button
*   1.27 Mobile placeholder fix
*   1.28 Mobile full-site international modifications
*   1.29 Faculties and departments page modifications
*   1.30 Mobile full-site Course page modifications
*   1.31 Mobile full-site global old android fix - prevent auto-fit for android 4.0.X
*    2. Document ready
*   2.1 Detect mode
*   2.2 View full site
*   2.3 Top menu
*   2.4 Case studies slider
*   2.5 Show menu when resized to desktop
*   2.6 Left tab menu 
*   2.7 Section menu
*   2.8 Page top
*   2.9 Upcoming events down button
*   2.10 Latest news down button
*   2.11 A-Z Listing toggle
*   2.12 Unasign colorbox elements
*   2.13 Colorbox ajax replacement
*   2.14 Timetable mobile table
*   2.15 Event search select actions
*   2.16 Add pointer image to main navigation
*   2.17 Course search modifications
*   2.18 News search modifications
*   2.19 Pagination fix
*   2.20 People search modifications
*   2.21 Case studies search modifications
*   2.22 International page modifications
*   2.23 Campaign page modifications
*   2.24 Department page modifications
*   2.25 Top of page arrow modifications
*   2.26 Social media plugin modifications
*   2.27 Megamenu adjusting
*   2.28 Finder pages modification
*   2.29 Course page modifications
*   2.30 Mobile Go-back button
*   2.31 Mobile placeholder fix
*   2.32 Faculties and departments page modifications
*   2.33 Mobile full-site international modifications
*   2.34 Mobile full-site Course page modifications
*   2.35 Mobile full-site global old android fix - prevent auto-fit for android 4.0.X
*   3   Window load
*   3.1 Resize home slider
*   3.2 Align carousel
*   3.3 remove .play-video button (sometimes they exist on top level landing pages) - fix for android browsers
*   3.4 Burger menu on Course pages, mobile only
*   3.5 Adding class to when Courses in top nav burger menu has got class of active
*/

/* 1. Functions */

if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

/* 1.1 Resize home slider */
var resize_home_slider = function() {
  var nav_bullets_margin_top = 0;

  jQuery('#home_banner_list').removeAttr('style');
  jQuery('#home_banner_list li').show();
  jQuery('#home_banner_list').css('height', jQuery('#home_banner_list').height());
  jQuery('#home_banner_nav_bullets_holder ol li').each(function(i, item){
    if ( jQuery(this).find('a').hasClass('flex-active') ) {
      jQuery('#home_banner_list li').hide();
      jQuery('#home_banner_list li').eq(i).show();
    }
  });

  nav_bullets_margin_top = jQuery('#home_banner_list li.flex-active-slide img').height() - jQuery('#home_banner_nav_bullets_holder').height() + 7;
  nav_bullets_margin_top = nav_bullets_margin_top + 'px';
  jQuery('#home_banner_nav_bullets_holder').css({'margin-top': nav_bullets_margin_top});
};

/* 1.2 Slider mobile navigation */ 
var slider_current = 1;
var next_slide = function(current, count, wrapper_obj) {
  if ( current+1 > count ) {
    wrapper_obj.find('li').hide();
    wrapper_obj.find('li').eq(0).show();
    slider_current = 1;
  } else {
    wrapper_obj.find('li').hide();
    wrapper_obj.find('li').eq(current).show();
    slider_current++;
  }
};
var prev_slide = function(current, count, wrapper_obj) {
  if ( current-1 == 0 ) {
    wrapper_obj.find('li').hide();
    wrapper_obj.find('li').eq(count-1).show();
    slider_current = count;
  } else {
    wrapper_obj.find('li').hide();
    wrapper_obj.find('li').eq(current-2).show();
    slider_current--;
  }
};

/* 1.3 Align Top menu 
var align_top_menu = function() {
  jQuery("#main_menu_list > li").css("display", "block").css("float","left");
  jQuery("#main_menu_list > li > a").css("padding","9px 0")

  var niwidth = jQuery("#main_menu_list").width();
  var twidth=0;
  jQuery("#main_menu_list > li").each(function(){
    twidth+=jQuery(this).width();
  });
  var diff=niwidth-twidth;
  var newpadding=Math.floor(parseInt(jQuery("#main_menu_list > li > a").css("padding-left"))+diff/2/jQuery("#main_menu_list > li").length);
  jQuery("#main_menu_list > li > a").css("padding-left", newpadding).css("padding-right", newpadding);
  niwidth = jQuery("#main_menu_list").width();
  twidth=0;
  jQuery("#main_menu_list > li").each(function(){
  twidth+=jQuery(this).width();
  });
  diff=niwidth-twidth;
  if(diff%2) {
    diff--;
  }
  for(var i=0;i<diff/2-1;i++){
    jQuery("#main_menu_list > li > a:eq("+i+")").css("padding-left", newpadding+1).css("padding-right", newpadding+1);
  } 
}
*/

/* 1.4 Mode detect */
var mode = new Object;
mode.is = 'desktop';
mode.was = 'desktop';

var detect_mode = function() {
  if(jQuery(window).width() === 0){
     mode.is = 'desktop';
     mode.was = mode.is;
     return true;
  }
  if ( jQuery('#mobile_menu_toggle').is(':visible') || jQuery(window).width() < 767 ) {
    mode.is = 'mobile';
    mode.was = mode.is;
  }
  jQuery(window).resize(function(){
    mode.is = mode.was;
    if ( jQuery('#mobile_menu_toggle').is(':visible') ) { 
      mode.is = 'mobile'; 
    } else { mode.is = 'desktop'; }
    if ( mode.is != mode.was ) {
      mode_change(mode.is, mode.was);
      mode.was = mode.is;
    }
  });
};

/* 1.5 Mode change */
var mode_change = function(is, was) {
  if ( is == 'desktop' && was == 'mobile' ) {
    /* 1.5.1.1 Show top menu */
    jQuery('#main_menu').show();

    /* 1.5.1.2 Align top menu 
    align_top_menu();*/

    /* 1.5.1.3 Assign colorbox elements */
    colorbox_unset();
    colorbox_set();

    /* 1.5.1.4 Hide timetable */
    jQuery('#timetable_table').parent().hide();

  } else {
    /* 1.5.2.1 Unassign colorbox elements */
    colorbox_unset();
  } 
};

/* 1.6 Align carousel */
var align_carousel = function() {
  if ( jQuery('.caroufredsel_wrapper').length ) {
    jQuery('.caroufredsel_wrapper').each(function(i, item){
      if ( jQuery(this).parent().attr('id') != 'case_studies_slider' ) {
        jQuery(this).css('width', jQuery(this).parent().width());
        jQuery(this).find('> ul').css('width', jQuery(this).parent().width());
      }
    });
  }
};

/* 1.7 Colorbox ajax replacement */
var mobile_ajax_load = function(href, obj) {
  var url = href;
  var obj = obj;
  var random = 'n'+parseInt(Math.random()*10000000);

  if ( url != '' && typeof(obj) != 'undefined' && typeof(obj.attr('rel')) == 'undefined' ) { 
    obj.attr('rel',random);
    obj.parent().before('<div class="mobile_ajax_content loading hide_desktop show_mobile" id="'+random+'">Loading ...</div>');

    jQuery.ajax({
      url: url,
      type: 'html',
      method: 'get'
    }).done(function(data){
      data = data.substring(data.indexOf('<body>')+6);
      data = data.substring(0, data.indexOf('</body>'));
      jQuery('#'+random).removeClass('loading').html(data);
      obj.parent().addClass('hide_mobile');
    }).error(function(responseText, textStatus, req){
      jQuery('#'+random).remove();
    }); 
  }
};

/* 1.8 Create mobile table */
var create_mobile_table = function(obj) {
  var table = new Object;
  table.th = new Array();
  table.tr = new Array();

  if ( jQuery(obj).length ) {
    obj.after('<div id="temp_table" class="">'+obj.html()+'</div>');

    /* Create headers list */
    jQuery('#temp_table table thead th').each(function(){
      table.th.push(jQuery(this).text());
    });

    /* Remove colspans */
    jQuery('#temp_table table tbody tr td').each(function(){
      if ( jQuery(this).attr('colspan') ) {
        var count = parseInt(jQuery(this).attr('colspan'));
        for (var i=0; i < count; i++) {
          var temp = jQuery(this).clone().removeAttr('colspan');
          jQuery(this).before(temp);
        }
        jQuery(this).remove();
      }
    });

    /* Create cell list */
    jQuery('#temp_table table tbody tr').each(function(){
      var temp_row = new Array();
      jQuery(this).find('td').each(function(){
        temp_row.push(jQuery(this).text());
      });
      table.tr.push(temp_row);
    });

    /* Remove temp table */
    jQuery('#temp_table').remove();

    /* Create mobile table */
    jQuery(obj).after('<table id="'+obj.attr('id')+'_mobile"><tbody></tbody></table>');

    jQuery.each(table.tr, function(i, item){
      var row = i;
      var temp_html = '<tr>';
      jQuery.each(table.tr[row], function(i, item) {
        temp_html += '<td><span class="row_head">'+table.th[i]+'</span><span class="row_value">'+table.tr[row][i]+'</span></td>';
      });
      temp_html += '</tr>';
      jQuery('#'+obj.attr('id')+'_mobile tbody').append(temp_html);     
    });

    /* Apply mobile classes */
    obj.addClass('hide_mobile show_desktop');
    jQuery('#'+obj.attr('id')+'_mobile').addClass('hide_desktop show_mobile mobile_table');
  }
};

/* 1.9 event search select */
var event_search_select_mobile = function() {
  if (jQuery('#find-event-select-mobile option').length) {
    if (getParam(document.location.href, 'meta_d4')) {
        jQuery('#find-event-select-mobile').attr('name', 'meta_d4');
        jQuery('#event_search_category_mobile p').text('Past events');
        jQuery('#find-event-select-mobile option').each(function(){
          if (jQuery(this).text() === 'Past events') {
              jQuery(this).prop("selected", true);
          }
          else {
              jQuery(this).prop("selected", false);
          }
        });
    }
    else {
      jQuery('#find-event-select-mobile').attr('name', 'meta_d3');
    }

    var showDropdown = function (element) {
      var event;
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('mousedown', true, true, window);
      element.dispatchEvent(event);
    };

    jQuery('#event_search_category_trigger_mobile').on('click', function (e) {
      e.preventDefault();

      var dropdown = document.getElementById('find-event-select-mobile');
      showDropdown(dropdown);


      //jQuery('#find-event-select-mobile').focus();
    });
  }

  jQuery('#find-event-select-mobile').on('change', function () {
    var selected_val = jQuery(this).find('option:selected').index(),
        selected_text = jQuery('#find-event-select-mobile option').eq(selected_val).text(),
        tmp_name = jQuery(this).find('option:selected').text();

    switch (tmp_name) {
      case 'Upcoming events' :
        jQuery('#find-event-select-mobile').attr('name', 'meta_d3');
        break;
      case 'Past events' :
        jQuery('#find-event-select-mobile').attr('name', 'meta_d4');
        break;
      default :
        break;
    }
  });
};

/* 1.10 Add pointer image to main navigation */
var add_pointer_to_main_nav = function() {
  if (!jQuery('#mobile_menu_toggle div.mob_main_nav_pointer_holder').length) {
    jQuery('#mobile_menu_toggle').append('<div class="mob_main_nav_pointer_holder"><div class="mob_pointer_type1 fa fa-sort-asc"></div></div>');
    if (jQuery('#main_menu').is(':visible')) {
      jQuery('#mobile_menu_toggle .mob_main_nav_pointer_holder').show();
    }
    else {
      jQuery('#mobile_menu_toggle .mob_main_nav_pointer_holder').hide();
    }
  }
};

/* 1.11 Course search - change placeholder */
var course_search_modifications = function() {
  // 1.11.1 Change placeholder
  jQuery('#course_search_name').attr('placeholder', 'Course search');
  jQuery('#course_finder_search_input_mobile').attr('placeholder', 'Course search');

  // 1.11.2 Expose 'Level' filter
/*
  if (!jQuery('#lhs_courses_filter .accordion-heading.active').length) {
    jQuery('#collapse_courses_course_level').addClass('in');
    jQuery('#collapse_courses_course_level').siblings('.accordion-heading').addClass('active');
    jQuery('#collapse_courses_course_level').siblings('.accordion-heading').find('.courses_course_level').addClass('active');
  }
*/
  // 1.11.3 Display header before AZ-listing
  if (jQuery('body').hasClass('course_finder') && jQuery('.course_finder .az_pagination').length) {
    jQuery('.course_finder .az_pagination').first().before('<h2 class="list_by_course_title">List by course title</h2>');
  }
};

/* 1.12 Reorganize home slider */
var reorganize_home_slider = function(){
  jQuery('.home_banner_image_title').each(function(){
    jQuery(this).find('img').prependTo(jQuery(this));
  });
};

/* 1.13 News search modifications */
var news_search_modifications = function() {
  // 1.13.1 Change placeholder
  jQuery('#article_search_input_mobile').attr('placeholder', 'Article search');

  // 1.13.2 Move 'Contact Information' box under the pagination
  if (jQuery('#article_search_input_mobile').length) {
    jQuery('.side_box').each(function(){
      var tmp_html = jQuery(this).html();
      jQuery('.pagination').after(tmp_html);
      jQuery(this).remove();
    });
  }
};

/* 1.14 Fix for pagination - fit whole pagination in max three <li> tags (prev - pages - next) */
var pagination_fix = function() {
  jQuery('.pagination').each(function(){
    if (jQuery(this).find('.pages').length >= 2) {
      var tmp_pages_array = [],
          tmp_li_pages_html = '<li><span class="pages"></span></li>',
          tmp_pages_length = 0;
      jQuery(this).find('.pages').each(function(){
        if (jQuery(this).children('a, b').length) {
          tmp_pages_array.push(jQuery(this).children('a, b').first());
        }
      });
      
      tmp_pages_length = tmp_pages_array.length;
      
      jQuery(this).find('.pages').remove();
      
      if (jQuery('.link_prev_page').length) {
          jQuery('.link_prev_page').parent().after(tmp_li_pages_html);
      }
      else {
          jQuery(this).prepend(tmp_li_pages_html);
      }
      
      for (var i = 0; i < tmp_pages_length; i++) {
          jQuery(this).find('.pages').append(tmp_pages_array[i]);
      }
    }
  });
};

/* 1.15 People search modifications */
var people_search_modifications = function() {
  jQuery('#people_search_input_mobile').attr('placeholder', 'People search');

  if (jQuery('body').hasClass('people_finder')) {
    jQuery('#people_listing .media a.pull-left').each(function(){
      jQuery(this).removeClass('pull-left');
    });

    if (jQuery('.people_finder .az_pagination').length) {
      jQuery('.people_finder .az_pagination').first().before('<h2 class="list_by_course_title">List by name</h2>');
    }
  }
};

/* 1.16 Case studies search modifications */
var case_studies_search_modifications = function() {
  jQuery('#case_study_search_input_mobile').attr('placeholder', 'Case study search');
};

/* 1.17 International page modifications */
var international_page_modifications = function() {
  jQuery('.list_by_country_holder .letters').hide();
  if (jQuery('.international_selected_countries').is(':visible')) {
    jQuery('.list_by_country_holder h2').show();
  }
  else {
    jQuery('.list_by_country_holder h2').hide();
  }
};

/* 1.18 Resize Campaign page slider */
var resize_campaign_slider = function() {
  var nav_bullets_margin_top = 0;

  jQuery('#campaign_landing_page_slider_list').removeAttr('style');
  jQuery('#campaign_landing_page_slider_list li').show();
  jQuery('#campaign_landing_page_slider_list').css('height', jQuery('#campaign_landing_page_slider_list').height());
  jQuery('#slider_nav_bullets_holder ol li').each(function(i, item){
    if ( jQuery(this).find('a').hasClass('flex-active') ) {
      jQuery('#campaign_landing_page_slider_list li').hide();
      jQuery('#campaign_landing_page_slider_list li').eq(i).show();
    }
  });

  nav_bullets_margin_top = jQuery('#campaign_landing_page_slider_list li.flex-active-slide img').height() - jQuery('#slider_nav_bullets_holder').height() + 7;
  nav_bullets_margin_top = nav_bullets_margin_top + 'px';
  jQuery('#slider_nav_bullets_holder').css({'margin-top': nav_bullets_margin_top});
};

/* 1.19 Campaign page modifications */
var campaign_page_modifications = function() {
  // slider modification
  resize_campaign_slider();
  
  // scroll down to the list of collected informations from form
  if (jQuery('#thank_you_page_input').length) {
    jQuery('html, body').animate({
      'scrollTop': jQuery('.form-header').first().offset().top
    }, 1000);
  }

};

/* 1.20 Department page modifications */
var department_page_modifications = function() {
  // play-video button modification in top thumbnail
  jQuery('#department .big-thumb').css({'background-size': '100%', 'background-repeat': 'no-repeat'});
  jQuery('#department .play-video-mobile a').attr('target', '_blank').removeClass('youtube').on('click', function(e){
    e.preventDefault();
    window.open(jQuery(this).attr('href'));
    return false;
  });
};

/* 1.21 Top of page arrow modifications - move 'Top of page' button to the bottom of page - just before footer frame; if 'Top of page' button does not exists, create it. */
var top_of_page_arrow_modifications = function() {
  if (jQuery('a.page_top').length) {
    jQuery('#main_content_holder').append('<div class="row"><div class="span12"></div></div>');
    jQuery('a.page_top').appendTo(jQuery('#main_content_holder .row').last().find('.span12'));
  }
  else {
    if (!jQuery('body').hasClass('home_page')) {
      var tmp_top_of_page_html = '<a class="hide_desktop show_mobile page_top" href="#main_container"><span>Top of page</span></a>';
      jQuery('#main_content_holder').append('<div class="row"><div class="span12"></div></div>');
      jQuery('#main_content_holder .row').last().find('.span12').append(tmp_top_of_page_html);
    }
  }
};

/* 1.22 Social media plugin modifications */
var social_media_plugin_modifications = function(){
  if (jQuery('a.page_top').length && !jQuery('body').hasClass('home_page')) {
    jQuery('a.page_top').before(jQuery('#social_media_share_page_mobile'));
  }
};

/* 1.23 Megamenu adjusting */
var adjust_megamenu = function(){
  jQuery('.dropdown-menu').each(function(){
    var tmp_width = jQuery('#main_container').width() - 4;//substracting border width
    tmp_width = tmp_width + 'px !important';
    jQuery(this).removeAttr('style');
    jQuery(this).css({'width': tmp_width});
  });
};

/* 1.24 Finder pages modification */
var finder_pages_modifications = function(){
  // scroll down to the search results when filter was ticked
  if (jQuery('.side_filter_box form').find('input:checkbox:checked').length) {
    // events finder
    if (jQuery('body').hasClass('whats_on_page')) {
      jQuery('html, body').animate({
        'scrollTop': jQuery('#events-mini-calendar').offset().top + jQuery('#events-mini-calendar').height()
      }, 1000);
    }
    // course finder
    else if (jQuery('#courses_listing').length) {
      jQuery('html, body').animate({
        'scrollTop': jQuery('#courses_listing').offset().top
      }, 1000);
    }
    else {
      if (jQuery('#main_content_main_column_PL').length) {
        jQuery('html, body').animate({
          'scrollTop': jQuery('#main_content_main_column_PL').offset().top
        }, 1000);
      }
      else {
        if (jQuery('#site_wide_search_main_form_mobile').length) {
          jQuery('html, body').animate({
            'scrollTop': jQuery('.search-list').first().offset().top
          }, 1000);
        }
      }
    }
  }
};

/* 1.25 Course page modifications */
var course_page_modifications = function(){
  // is this page a Course Information Page
  if (jQuery('body').hasClass('course_information_page')) {
    var tmp_url = jQuery('.popup_prospectus').first().attr('href');
    jQuery('.popup_prospectus').first().attr('href', tmp_url.replace('SQ_DESIGN_NAME=popup', 'SQ_DESIGN_NAME=popup_mobile'));
    jQuery('.popup_prospectus, .button_link_blue, .what_is').attr('target', '_blank');
    jQuery('#gecko-btn').attr('target', '_self');
    
  }
};

/* 1.26 Mobile Go-back button */
var mobile_go_back_button = function(){
  jQuery('.mobile_go_back_button').on('click', function(e){
    e.preventDefault();
    window.history.go(-1);
  });
};

/* 1.27 Mobile placeholder fix */
var mobile_placeholder_fix = function(){
  jQuery('input').placeholder();
};

/* 1.28 Mobile full-site international modifications */
var full_site_international_page_modifications = function(){
  if (jQuery('.international_infobox').length) {
    jQuery('.international_infobox').css({'background-color': 'rgba(0, 0, 0, 0.6)', 'background-image': 'none', 'color': '#fff'});
    jQuery('.international_infobox').hide();
  }

  jQuery('area').on('touchend click', function(e){
    e.preventDefault();

    jQuery(this).parent().find('.international_infobox').show();
    jQuery('.international_infobox').css({'background-color': 'rgba(0, 0, 0, 0.6)', 'color': '#fff'});
    if (!jQuery(this).parents('.international_map_region_holder').hasClass('active')) {
      jQuery(this).parents('.international_map_region_holder').addClass('tmp-active');
    }
    jQuery(this).parent().parent().addClass('active');

    var tmp_href = jQuery(this).attr('href');
    setTimeout(function(){
      document.location.href = tmp_href;
    }, 1500);

  });
};

/* 1.29 Faculties and departments page modifications */
var faculties_and_departments_page_modifications = function() {
  if (jQuery('#faculties-and-departments').length) {
    jQuery('#faculties-and-departments .group').removeAttr('style');
  }
};

/* 1.30 Mobile full-site Course page modifications */
var full_site_course_page_modifications = function(){
  if (jQuery.cookie("full_site") == "yes") {
    jQuery('.mobile_go_back_button_holder').removeClass('hide_desktop').css({'text-align': 'center'});
  }
};

/* 1.31 Mobile full-site global old android fix - prevent auto-fit for android 4.0.X */
var full_site_global_old_android_fix = function(){
  var ua = navigator.userAgent.toLowerCase(),
      isAndroid = ua.indexOf("android") > -1,
      isOldAndroid = ua.indexOf('android 4.0') > -1;

  if (jQuery.cookie("full_site") == "yes" && isAndroid && isOldAndroid) {
    //alert(ua);
    jQuery('#main_content_main_column p, #main_content_main_column_PL p, #main_content_main_column div, #main_content_main_column_PL div, #breadcrumbs div, #page_title, h1').each(function(){
      if (!jQuery(this).css('background').match('url') && !jQuery(this).css('background-image').match('url')) {
        jQuery(this).css({'background-image':'url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)', 'background-repeat':'repeat'});
      }
    });
  }
};



/* 2. Document ready */
jQuery(document).ready(function(){
//jQuery('head link[href$="responsive_mobile.css"]').remove();
  /* 2.1 Detect mode */
  detect_mode();

  if (mode.is == 'desktop') {
    jQuery('head link[href$="responsive_mobile.css"]').remove();
  }
  /* 2.2 View full site */
  if (jQuery.cookie("full_site") == "yes") {
    jQuery('head link[href$="responsive_mobile.css"]').remove();
    jQuery('#view_full_site_trigger').parent().parent().show();
    jQuery('#main_menu').show();
    /* align_top_menu(); */
  }

  jQuery('#view_full_site_trigger, .view_full_site_trigger_class').click(function(){
    jQuery.cookie("full_site","yes", { expires: 365, path: '/' });
    location.reload();
  });

  jQuery('#view_mobile_trigger').click(function(){
    jQuery.removeCookie('full_site', { path: '/' });
    location.reload();
  });

  /* 2.3 Top menu  */
  if ( mode.is == 'mobile' && jQuery.cookie("full_site") !== "yes") {
    jQuery('#main_menu').hide();
  }
 
  jQuery('#mobile_menu_toggle').click(function(){
    jQuery('#main_menu').slideToggle('fast');
    jQuery('#mobile_menu_toggle .mob_main_nav_pointer_holder').slideToggle('fast');
  });

  /* 2.4 Case studies slider */
  if ( jQuery('#case_studies_slider_mobile').length ) {
    if ( jQuery('#case_studies_slides_mobile li').length < 1 ) {
      jQuery('#case_studies_slider_nav_mobile').remove();
    }

    var slider_count = parseFloat(jQuery('#case_studies_slides_mobile li').length);

    jQuery('#case_studies_slider_prev_mobile').click(function(){
      prev_slide(slider_current, slider_count, jQuery('#case_studies_slides_mobile'));
      return false;
    }); 
    jQuery('#case_studies_slider_next_mobile').click(function(){
      next_slide(slider_current, slider_count, jQuery('#case_studies_slides_mobile'));
      return false;
    }); 

  }


  /* 2.5 Show menu when resized to desktop 
  jQuery(window).resize(function(){
    if ( !mode.is == 'mobile' ) {
      jQuery('#main_menu').show();
    }
  });
  */

  /* 2.6 Left tab menu */
  jQuery('#main_content_left_column .tabs-left a').click(function(){
    if ( mode.is == 'mobile' ) {
      jQuery('html, body').animate({
        'scrollTop': jQuery('#main_content').offset().top
      }, 1000);
    }
  });

  /* 2.7 Section menu */
  // move section menu to the bottom of the main content holder
  if (mode.is == 'mobile' && jQuery.cookie("full_site") !== "yes") {
    jQuery('#main_content_left_column').appendTo(jQuery('#main_content_left_column').parents('.row').first());
  }

  if ( jQuery('.section_menu_link').length ) {
    if ( parseFloat(jQuery('#'+jQuery('.section_menu_link').attr('href').split('#')[1]).text().trim().length) == 0 ) {
      jQuery('.section_menu_link').remove();
    } else {
      jQuery('.section_menu_link').click(function(){
        if ( mode.is == 'mobile' ) {
          jQuery('html, body').animate({
            'scrollTop': jQuery('#main_content_left_column').offset().top
          }, 1000);
        }
      });
    }
  }

  /* 2.8 Page top */
  jQuery('.page_top').click(function(){
    if ( mode.is == 'mobile' ) {
      jQuery('html, body').animate({
        'scrollTop': 0
      }, 1000);
    }
  });

  /* 2.9 Upcoming events down button */
  jQuery('.mobile_events_down').click(function(e){
    e.preventDefault();
    if ( mode.is == 'mobile' ) {
      jQuery('#upcoming_events_down_button').click();
    }
  });

  /* 2.10 Latest news down button */
  jQuery('.mobile_news_down').click(function(e){
    e.preventDefault();
    if ( mode.is == 'mobile' ) {
      jQuery('#latest_news_down_button').click();
    }
  });

  /* 2.11 A-Z Listing toggle */
  jQuery('.az-toggle').click(function(e){
    e.preventDefault();
    if ( mode.is == 'mobile' ) {
      jQuery('ul.az_pagination, .list_by_country_holder .letters').slideToggle();
    }
  });

  /* 2.12 Unasign colorbox elements */
  if ( mode.is == 'mobile' ) {
    colorbox_unset();

    jQuery('.cboxElement_off').click(function(e){
      e.preventDefault();
    });
  }

  /* 2.13 Colorbox ajax replacement */
  jQuery('a.mobile_ajax_load').click(function(e){
    if ( mode.is == 'mobile' ) {
      e.preventDefault();
      mobile_ajax_load(jQuery(this).attr('href'), jQuery(this));
    }
  });

  /* 2.14 Timetable mobile table */
  if ( jQuery('#timetable_table').length ) {
    create_mobile_table(jQuery('#timetable_table'));
    if ( jQuery('#tab_timetable a[href="#timetable_table"]').parent().next().hasClass('hidden') && jQuery('#tab_timetable a[href="#timetable_table"]').length ) {
      jQuery('#tab_timetable a[href="#timetable_table"]').parent().next().removeClass('hidden').addClass('hide_desktop hide_mobile');
      jQuery('#tab_timetable a[href="#timetable_table"]').click(function(){
        if ( mode.is == 'mobile' ) {
          jQuery(this).parent().next().toggle();
        }
      });
    }
  }

  if ( mode.is == 'mobile' && jQuery.cookie("full_site") !== "yes") {
    /* 2.15 Event search select actions */
    event_search_select_mobile();

    /* 2.16 Add pointer image to main navigation */
    add_pointer_to_main_nav();

    /* 2.17 Course search modifications */
    course_search_modifications();

    /* 2.18 News search modifications */
    news_search_modifications();

    /* 2.19 Pagination fix */
    pagination_fix();

    /* 2.20 People search modifications */
    people_search_modifications();

    /* 2.21 Case studies search modifications */
    case_studies_search_modifications();

    /* 2.22 International page modifications */
    //international_page_modifications();

    /* 2.23 Campaign page modifications */
    //resize_campaign_slider();
    campaign_page_modifications();

    /* 2.24 Department page modifications */
    department_page_modifications();

    /* 2.25 Top of page arrow modifications */
    top_of_page_arrow_modifications();

    /* 2.26 Social media plugin modifications */
    social_media_plugin_modifications();

    /* 2.27 Megamenu adjusting */
    adjust_megamenu();

    /* 2.28 Finder pages modification */
    finder_pages_modifications();

    /* 2.29 Course page modifications */
    course_page_modifications();

    /* 2.30 Mobile Go-back button */
    mobile_go_back_button();

    /* 2.31 Mobile placeholder fix */
    //mobile_placeholder_fix();

    /* 2.32 Faculties and departments page modifications */
    faculties_and_departments_page_modifications();
  }

  if (jQuery.cookie("full_site") == "yes") {
    /* 2.33 Mobile full-site international modifications */
    full_site_international_page_modifications();

    /* 2.34 Mobile full-site Course page modifications */
    full_site_course_page_modifications();

    /* 2.35 Mobile full-site global old android fix - prevent auto-fit for android 4.0.X */
    full_site_global_old_android_fix();
  

   /* move left column to go before the main */
    var timeout = false;
    var rtime = new Date(1, 1, 2000, 12,00,00);
    var delta = 200;
    $(window).resize(function() {
    
       if (timeout === false) {
          timeout = true;
          setTimeout(resizeend, delta);
       }
    });
   
    
    function resizeend() {
       if (new Date() - rtime < delta) {
          setTimeout(resizeend, delta);
       } else {
          timeout = false;
          $('#main_content_left_column').insertBefore('#main_content_main_column');
       }  
    }
  }

});


/* 3. Window load */
jQuery(window).load(function(){

  /* 3.1 Resize home slider */
  if ( jQuery('#home_banner').length && mode.is == 'mobile' ) {
    resize_home_slider();
    reorganize_home_slider();
  }
  jQuery(window).resize(function(){
    if ( jQuery('#home_banner').length && mode.is == 'mobile' ) {
      resize_home_slider();
    } else {
      jQuery('#home_banner_list').removeAttr('style');
    }
  });

  /* 3.2 Align carousel */
  align_carousel();
  jQuery(window).resize(function(){
    align_carousel();
  });

  /* 3.3 remove .play-video button (sometimes they exist on top level landing pages) - fix for android browsers */
  //jQuery('.play-video').remove();

});

//3.4 Burger menu on Course pages, mobile only
jQuery(document).ready( function () {
    if (jQuery("body").hasClass("course_information_page")) {
      if (jQuery(window).width() < 768) {
          jQuery(".tabs-left").prependTo("#main_content_main_column");
          jQuery("#main_content_main_column").prepend('<div class="mob_main_left_nav"><div class="mob_main_left_nav_btn fa fa-bars"></div></div>');
          jQuery(".section_menu_link.hide_desktop").hide();
          jQuery(".tabs-left").addClass("close");
    
          jQuery('.mob_main_left_nav_btn').click(function() {
              jQuery('.tab-content').toggleClass('active');
              if(jQuery(".tabs-left").hasClass("close")){
                 jQuery(".tabs-left").slideDown('fast').removeClass("close");
              } else {
                 jQuery(".tabs-left").slideUp('fast').addClass("close");
              }
          });
    
          var clickedLink = jQuery("#course_information_page_lhs_tabs > li a");
          jQuery(clickedLink).click(function() {
              jQuery(".tabs-left").slideUp('fast').addClass("close");
          });
      }
    }
});

//3.5 Adding class to when Courses in top nav burger menu has got class of active
jQuery(document).ready( function () {
  if (jQuery(".main_menu_megamenu").hasClass("active")) {
    jQuery(".mob_pointer_type1").addClass("orange");
  } else if (jQuery(".main_menu_megamenu")) {
    jQuery(".mob_pointer_type1").addClass("black");
    jQuery(".mob_pointer_type1").removeClass("orange");
  }
});