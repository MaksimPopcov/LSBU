/* Index:
 1. document.ready part:
 1.1 external links initiation
 1.2 :last-child fix for ie
 1.3 main menu
 1.3.2 pull left dropdown submenu in last item in top menu
 1.4 home page slider
 1.5 course search select
 1.6 home page tabscboxElement
 1.7 home page latest tweets
 1.8 latest tweets RHS
 1.9 Get a Prospectus button - adding user defined design and layout
 1.10 Get in touch button - News listing page
 1.11 colorbox init
 1.12 Get in touch button - Course Enquiries - UK/EU
 1.13 upcoming events slider
 1.14 latest news slider
 1.15 KIS data popup
 1.16 accordion - add 'active' class in .accordion-heading for selected accordion-group
 1.17 compare courses - set counter
 1.18 popup controll
 1.19 filter toggle - events listing
 1.20 top level landing page - odd/even secondary links
 1.21 course information page - Course Units - toggle bullets
 1.22 case studies page - slider
 1.23 Course Finder Page - mark active letter in A-Z filter
 1.24 People Inner Page - collapse first group in Publications accordion
 1.25 Javascript to enable link to tab
 1.26 campus map configuration
 1.27 youtube video in colorbox iframe
 1.28 campaign landing page slider
 1.29 international landing page - hide country results when no letter selected
 1.30 international landing page - mark selected region on the map
 1.31 events listing page - past GET parameter on select change
 1.32 add 'checked' class to the checked input's labels
 1.33 fees widget filters; open first group in accordion
 1.34 course information page - add hover on mouse enter in LHS nav
 1.35 Course Finder Page - mark checked subject
 1.36 Big thumb transparent overlay box ipad fix
 1.37 Sorting accordion - publications
 1.38 Courses accordion - move to top
 1.39 Iframe youtube fix for safari wmode=transparent
 1.40 Add body class if ipad
 1.41 Add 'Course finder' link into breadcrumbs on Course Information Pages
 1.42 Events calendar - change links to act as fb filter
 1.43 Get in touch - validation
 1.44 Search query + lhs filters - correct parameters
 1.45 remove 'most_recent' class from <li> on news finder and case studies finder page if some query was detected in url
 1.46 home page - show end date of event if not equal to start date on open days tab
 1.47 site wide search page - add to main form inputs informing about checked filters
 1.49 remove border from the last contact information box
 1.50 form-standard behaviour
 1.51 Javascript to enable lightbox
 1.52 Course Finder - Ajax
 2. functions:
 2.1 response function for #hidden_form
 2.2 campus map initialisation
 2.3 function getParam - get parameter from 'source' by 'name'
 2.4 function setGetParameter - set parameter in url
 2.9 remove 'most_recent' class from <li> on news finder and case studies finder page if some query was detected in url
 2.7 Twitter functionalities
 2.7.1 hashLink(tweet)
 2.7.2 standardLink(tweet)
 2.7.2.2standardLinkSecured(tweet)
 2.7.3 atLink(tweet)
 2.8 course_breadcrumbs() Add 'Course finder' link into breadcrumbs on Course Information Pages
 2.10 Course finder - mark active letter if selected (based on provided url)
 2.11 Course comparison initialisation
 2.12 getParamsFromFilters
 2.13 srollToMainContent
 2.14 Change Course Finder Hash

 3. new menu width adjusting

 4.1 Campaign Page - form anchor link
 4.2 Nest additional Form
 4.3 View port height is smaller then remove back to top
 4.4 removing href from homepage main slide
 4.5 Remove href from Whats on listing page Dates
 4.6 Equalising feeds height
 4.7 Switch tab from the url on click from content
 */

//3 new menu width adjusting
//adjustNav();

/* Make unprintable */
var make_unprintable = function() {
    jQuery('.whole_content_holder').addClass('hidden-print');
    jQuery('#footer_frame').addClass('hidden-print');
    jQuery('footer').addClass('hidden-print');
    jQuery('body').addClass('print_one_page');
};

/* Make printable */
var make_printable = function() {
    jQuery('.whole_content_holder').removeClass('hidden-print');
    jQuery('#footer_frame').removeClass('hidden-print');
    jQuery('footer').removeClass('hidden-print');
    jQuery('body').removeClass('print_one_page');
};

/* Set all colorbox elements */
var colorbox_set = function() {

    jQuery(".cboxElement").colorbox({rel:"group1", onComplete:function(){
        var controllers_top = Math.ceil(jQuery('#cboxLoadedContent').height() / 2) + 53 + 'px';
        if (jQuery('body').width() < 900 || jQuery('body').hasClass('ipad_resp')) {
            var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                tmp_colorbox_width = jQuery('#colorbox').width(),
                tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
            jQuery('#colorbox').css('left', tmp_left);
        }

        //fix for controlers position
        jQuery('#colorbox').width(function(){
            return jQuery(this).width() + 10;
        });
        jQuery('#cboxWrapper').width(function(){
            return jQuery(this).width() + 10;
        });
        jQuery('#cboxContent').css({'left': '10px'});
        jQuery('#cboxPrevious, #cboxNext').css({'margin-top': 0, 'top': controllers_top});

        if (jQuery('#cboxTitle').text() !== '') {
            var cbox_half_title_height = Math.ceil(jQuery('#cboxTitle').height() / 2),
                cboxTitle_top = jQuery('#cboxLoadedContent').height() + 43,
                cboxTitle_width = jQuery('#cboxLoadedContent').width();
            //cboxPrevious_top = (parseInt(jQuery('#cboxPrevious').css('top').replace(/[^-\d\.]/g, '')) - cbox_half_title_height) + 'px';
            //cboxNext_top = (parseInt(jQuery('#cboxNext').css('top').replace(/[^-\d\.]/g, '')) - cbox_half_title_height) + 'px';

            jQuery('#cboxTitle').show();
            jQuery('#cboxTitle').addClass('cboxTitle_style2');

            jQuery('#colorbox').height(function(){
                return jQuery(this).height() + cbox_half_title_height * 2;
            });
            jQuery('#cboxWrapper').height(function(){
                return jQuery(this).height() + cbox_half_title_height * 2;
            });
            jQuery('#cboxContent').height(function(){
                return jQuery(this).height() + cbox_half_title_height * 2;
            });

            //jQuery('#cboxPrevious').css({'top': cboxPrevious_top});
            //jQuery('#cboxNext').css({'top': cboxNext_top});
            jQuery('#cboxTitle').css({'top': cboxTitle_top, 'width': cboxTitle_width});
        }
        else {
            jQuery('#cboxTitle').hide();
        }

        // add additional functionalities to 'get in touch' contact form
        /*
         if (jQuery('#form_email_3092').length) {

         var ukeu_form_options = {
         target: '#cboxLoadedContent',
         success: function (responseText, statusText, xhr, $form)  {
         $('#form_email_3092').on('click', function() {
         $('#form_email_3092').ajaxForm(ukeu_form_options);
         });
         },
         url: 'http://lsbu-web01.squiz.co.uk/phase1b/course-enquiries-ukeu'
         };

         jQuery('#form_email_3092').ajaxForm(hidden_form_options);
         }
         */
    }, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".ajax").colorbox({width: "978px", onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390, onComplete:function(){
        if (jQuery('body').width() < 900 || jQuery('body').hasClass('ipad_resp')) {
            var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                tmp_colorbox_width = jQuery('#colorbox').width(),
                tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
            jQuery('#colorbox').css('left', tmp_left);
        }
    }, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".iframe").colorbox({iframe:true, width:"80%", height:"80%", onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    //jQuery(".kis").colorbox({iframe:true, width:"762px", height:"80%"});
    jQuery(".kis").colorbox({iframe:true, innerWidth:"682", innerHeight:"360", scrolling: false, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".inline").colorbox({inline:true, width:"90%", onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".popup_prospectus").colorbox({width: "60%", onComplete:function(){
        if (jQuery('body').width() < 900 || jQuery('body').hasClass('ipad_resp')) {
            var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                tmp_colorbox_width = jQuery('#colorbox').width(),
                tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
            jQuery('#colorbox').css('left', tmp_left);
        }
    }, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    //jQuery(".pupup_course_enquiries").colorbox({width: "400px"});
    jQuery(".iframe_70").colorbox({width: "70%", iframe:true, innerWidth:640, innerHeight:600, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery(".callbacks").colorbox({
        onOpen:function(){ alert('onOpen: colorbox is about to open'); },
        onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
        onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
    });
    jQuery('.non-retina').colorbox({rel:'group', transition:'none', onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});
    jQuery('.retina').colorbox({rel:'group', transition:'none', retinaImage:true, retinaUrl:true, onOpen: function() { make_unprintable(); }, onClosed: function() { make_printable(); }});

    // 1.12 Get in touch button - Course Enquiries - UK/EU
    jQuery(".pupup_course_enquiries").colorbox({iframe:true, width:"900px", height:"925px",scrolling:"false", rel:"none", onComplete:function(){
        if (jQuery('body').width() < 900 || jQuery('body').hasClass('ipad_resp')) {
            var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                tmp_colorbox_width = jQuery('#colorbox').width(),
                tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
            jQuery('#colorbox').css('left', tmp_left);
        }
    }});

jQuery(".popup_whatis_unistats").colorbox({iframe:true, width:"900px",opacity:"0.5", height:"500px",scrolling:"false", rel:"nofollow", onComplete:function(){
        if (jQuery('body').width() < 900 || jQuery('body').hasClass('ipad_resp')) {
            var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                tmp_colorbox_width = jQuery('#colorbox').width(),
                tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
            jQuery('#colorbox').css('left', tmp_left);
        }
    }});

};

/* Remove all colorobx elements */
var colorbox_unset = function() {

    jQuery(".cboxElement").colorbox.remove();
    jQuery(".ajax").colorbox.remove();
    jQuery(".youtube").colorbox.remove();
    jQuery(".vimeo").colorbox.remove();
    jQuery(".iframe").colorbox.remove();
    jQuery(".kis").colorbox.remove();
    jQuery(".inline").colorbox.remove();
    jQuery(".popup_prospectus").colorbox.remove();
    jQuery(".iframe_70").colorbox.remove();
    jQuery(".callbacks").colorbox.remove();
    jQuery('.non-retina').colorbox.remove();
    jQuery('.retina').colorbox.remove();
    jQuery(".pupup_course_enquiries").colorbox.remove();
    jQuery(".popup_whatis_unistats").colorbox.remove();

};

jQuery(document).ready(function () {

    var docCookies = {
        getItem: function (sKey) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
            var sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                        break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                        break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toUTCString();
                        break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        },


        removeItem: function (sKey, sPath, sDomain) {
            if (!sKey || !this.hasItem(sKey)) { return false; }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function (sKey) {
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: /* optional method: you can safely remove it! */ function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
            return aKeys;
        }
    };

    // 1.1 external links initiation
    jQuery('a[rel="external"]').attr('target', '_blank');

    // 1.2 :last-child fix for ie
    jQuery('li:last-child, p:last-child').addClass('last-child');

    // 1.3 main menu
    //TODO jQuery('.dropdown a').dropdown();

    // main menu - mark current root
    var main_menu_marked_current = 0;
    jQuery('#main_menu_list').children('li').each(function(){
        if(jQuery(this).data('pageid') == jQuery('input.pageid-input.current').val()) {
            jQuery(this).addClass('active');
            main_menu_marked_current = 1;
        }
    });
    if(!main_menu_marked_current && jQuery('input[name="pageid"]').val() == jQuery('li.main_menu_home').data('pageid')) {
        jQuery('li.main_menu_home').addClass('active');
    }

    jQuery(".dropdown-menu").each(function(){
        if(jQuery(this).find(".megamenu-column").length>1) {
            jQuery(this).width(998);
            jQuery(this).css({'left': '0'});
        }
    });
    
    //topnavigation left alignment offsets
    jQuery("li[data-pageid='1340'] ul.dropdown-menu").css("left", "-297px");
    jQuery("li[data-pageid='1340'] ul.dropdown-menu").addClass("nav_offset_left");
    jQuery("li[data-pageid='1388'] ul.dropdown-menu").css("left", "-83px");
    jQuery("li[data-pageid='1396'] ul.dropdown-menu").css("left", "-160px");
    
    //add class to homepage news rhs
    jQuery( "#latest_news_frame" ).parent().addClass("news_story");
    
    setTimeout(function(){
      //add a class to have different image on the mobile burger menu
      if (jQuery("li[data-pageid='1340']").hasClass("active")) {
      // Then add class close to trigger div
          jQuery(".mob_pointer_type1").addClass(" active");
      }  
    }, 2000);
    
    // 1.3.2 pull left dropdown submenu in last item in top menu
    if (!jQuery('html').hasClass('ie7')) {
        if (!jQuery('#main_menu_list li.last-child .dropdown-menu').find(".megamenu-column").length) {
            var tmp_width = jQuery('#main_menu_list li.last-child .dropdown-menu').width();
            tmp_parent_width = jQuery('#main_menu_list li.last-child .dropdown-menu').parent().width();
            tmp_left_margin = tmp_width - tmp_parent_width;
            tmp_left_margin += 4;
            tmp_left_margin = '-' + tmp_left_margin + 'px';

            jQuery('#main_menu_list li.last-child .dropdown-menu').css({'margin-left': tmp_left_margin});
        }
    }


// 1.4 home page slider
if (jQuery('#home_banner').length && jQuery('#home_banner_list li').length) {
    var home_banner_arrows_html = '<a id="home_banner_prev" href="#"><span>prev</span></a><a id="home_banner_next" href="#"><span>next</span></a>';
    var home_banner_bullets_html = '<div id="home_banner_nav_bullets_holder"><div class="home_banner_nav_bullets hidden-phone"></div></div>';

    jQuery('#home_banner').prepend(home_banner_bullets_html);

    jQuery('#home_banner').flexslider({
        slideshowSpeed: 6000,
        useCSS: false,
        selector: "#home_banner_list > li",
        controlsContainer: ".home_banner_nav_bullets",
        start: function(slider){
            if (jQuery('#mobile_menu_toggle').is(':visible') && typeof(resize_home_slider) === 'function') {
                // init the height of the first item on start
                resize_home_slider();
                var new_height = slider.slides.eq(0).height();
                slider.height(new_height);
            }

            jQuery("#home_banner").find(".flex-control-nav a").on("click", function(slider){
               if (jQuery(this).hasClass("flex-active")){
                  jQuery("#home_banner").flexslider('pause');
               }
            });
        },
        after: function(slider) {
            if (jQuery('#mobile_menu_toggle').is(':visible') && typeof(resize_home_slider) === 'function') {
                resize_home_slider();
                var new_height = slider.slides.eq(slider.currentSlide).height();
                slider.height(new_height);
            }
            // IE8 Bullets fix for Flexslider
            jQuery(window).resize();
        }
    });
}


    // 1.5 course search select
    if (jQuery('#course_search_category select').length) {
        jQuery('#course_search_category select option').each(function(){
            if (jQuery(this).prop('selected')) {
                tmp_text = jQuery(this).text();
                jQuery('#course_search_category p').text(tmp_text);
            }
        });
    }

    jQuery('#course_search_category_trigger, #course_search_category p').click(function (e) {
        e.preventDefault();
        jQuery(this).parent().find('select').show();
        jQuery(this).parent().find('select').attr('size', "6");
    });

    jQuery('#course_search_category select').click(function () {
        var selected_val = jQuery(this).val();
        var selected_text = jQuery(this).find('option[value="' + selected_val + '"]').text();
        jQuery(this).parent().find('p').text(selected_text);
        jQuery(this).attr('size', "0");
        jQuery(this).removeAttr('size');
        jQuery(this).hide();
    });

    jQuery('#course_search_category select').hover(function () {}, function () {
        jQuery(this).hide();
    });

    // 1.5.1 event search select

    //Fix for sitemorse as it has issue with calendar. Calendar is hidden in CSS by default
    jQuery("#events-mini-calendar").show();

    if (jQuery('#find-event-select option').length) {
        if (getParam(document.location.href, 'meta_d4')) {
            jQuery('#find-event-select').attr('name', 'meta_d4');
            jQuery('#event_search_category p').text('Past events');
            jQuery('#find-event-select option').each(function(){
                if (jQuery(this).text() === 'Past events') {
                    jQuery(this).prop("selected", true);
                }
                else {
                    jQuery(this).prop("selected", false);
                }
            });
        }
        else {
            jQuery('#find-event-select').attr('name', 'meta_d3');
        }
    }

    if (isiPad()) {
        jQuery('body').addClass('ipad_resp');
        //jQuery('#event_search_category').show();
        //jQuery('#event_search_category').css({'position': 'relative'});

        jQuery('#event_search_category_trigger, #event_search_category p').click(function (e) {
            e.preventDefault();
            var tmp_size = jQuery('#find-event-select').find('option').length;
            jQuery('#find-event-select').show();
            //jQuery('#find-event-select').trigger('click');
            jQuery('#find-event-select').attr('size', '2');
        });

        jQuery('#find-event-select').on('change', function () {
            var selected_val = jQuery(this).find('option:selected').index();
            var selected_text = jQuery('#find-event-select option').eq(selected_val).text();
            jQuery(this).parent().find('p').text(selected_text);
            jQuery(this).attr('size', "0");
            jQuery(this).removeAttr('size');
            jQuery(this).hide();

            var tmp_name = jQuery(this).find('option:selected').text();

            switch (tmp_name) {
                case 'Upcoming events' :
                    jQuery('#find-event-select option').parent().attr('name', 'meta_d3');
                    break;
                case 'Past events' :
                    jQuery('#find-event-select option').parent().attr('name', 'meta_d4');
                    break;
                default :
                    break;
            }
        });



    }
    else {
        jQuery('#event_search_category_trigger, #event_search_category p').click(function (e) {
            e.preventDefault();
            var tmp_size = jQuery('#find-event-select').find('option').length;
            jQuery('#find-event-select').show();
            jQuery('#find-event-select').attr('size', tmp_size);
        });

        jQuery('#find-event-select').click(function () {
            var selected_val = jQuery(this).find('option:selected').index();
            var selected_text = jQuery('#find-event-select option').eq(selected_val).text();
            jQuery(this).parent().find('p').text(selected_text);
            jQuery(this).attr('size', "0");
            jQuery(this).removeAttr('size');
            jQuery(this).hide();

            var tmp_name = jQuery(this).find('option:selected').text();

            switch (tmp_name) {
                case 'Upcoming events' :
                    jQuery('#find-event-select option').parent().attr('name', 'meta_d3');
                    break;
                case 'Past events' :
                    jQuery('#find-event-select option').parent().attr('name', 'meta_d4');
                    break;
                default :
                    break;
            }
        });
    }

    jQuery('#find-event-select').hover(function () {}, function () {
        jQuery(this).hide();
    });

    // 1.6 home page tabs
    jQuery("#tabs1 li a").click(function (e) {
        e.preventDefault();
        jQuery("#tabs1 li a").each(function () {
            jQuery(this).parent("li").removeClass("active");
            jQuery(jQuery(this).attr("href")).addClass("hidden");
        });
        jQuery(this).parent("li").addClass("active");
        jQuery(jQuery(this).attr("href")).removeClass("hidden");
    });

    jQuery("#tabs2 li a").click(function (e) {
        e.preventDefault();
        jQuery("#tabs2 li a").each(function () {
            jQuery(this).parent("li").removeClass("active");
            jQuery(jQuery(this).attr("href")).addClass("hidden");
        });
        jQuery(this).parent("li").addClass("active");
        jQuery(jQuery(this).attr("href")).removeClass("hidden");
    });

    // 1.7 home page latest tweets
    if(jQuery('#latest_feeds_twitter_col').length) {
        // console.log("url");
       // console.log(GLOBALS.url);
       // console.log("\n url");
       // console.log(GLOBALS.url["twitter-homepage"]);
        jQuery.ajax({ type: "GET", dataType: "json",
            url: GLOBALS.url["twitter-homepage"],
            success: function(data){
                var exp_create_links = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                var tmp_html = '',
                    count = 4;

                count = count > data.length ? data.length : count;
                for (var i = 0; i < count; i++) {


                    var tweet_text = '',
                        tweet_data = '',
                        tmp_data_str = '';

                    if (data[i]["retweeted_status"] && data[i]["retweeted_status"]["text"]) {
                        tmp_data_str = data[i]["text"];
                        tmp_data_str = tmp_data_str.split(':');
                        tmp_data_str = tmp_data_str[0];
                        tweet_data = tmp_data_str +" "+ data[i]["retweeted_status"]["text"];
                    }
                    else {
                        tweet_data = data[i]["text"];
                    }

                    //var tweet_data = data[i]["text"];
                    tweet_data = tweet_data.replace('\u201c', ''); // "
                    tweet_data = tweet_data.replace('\u201d', ''); // "


//            if ( typeof(data[i]['retweeted_status']) != 'undefined' ) {
//              var tweet_data = data[i]['retweeted_status']["text"];
//            } else {
//              var tweet_data = data[i]["text"];
//            }

                    tweet_text = hashLink(tweet_data);
                    tweet_text = standardLink(tweet_text);
                    tweet_text = standardLinkSecured(tweet_text);
                    tweet_text = atLink(tweet_text);

                    tmp_html += '<div class="latest_news_item">';
                    tmp_html += '<img src="' + data[i]["user"]["profile_image_url"] + '" alt="" class="twitter_thumb" />';
                    tmp_html += '<div class="latest_feed_text pull-right">';
                    tmp_html += '<div class="latest_news_item_header"><a href="https://twitter.com/lsbu"><span>' + data[i]["user"]["name"] + ' <span>@' + data[i]["user"]["screen_name"] + '</span></span></a></div><div class="latest_news_item_intro"><p>' + tweet_text + '</p></div><div class="latest_news_item_twitter_options"><p><a href="https://twitter.com/intent/tweet?in_reply_to=' + data[i]["id_str"] + '"><span>Reply</span></a> . <a href="https://twitter.com/intent/retweet?tweet_id=' + data[i]["id_str"] + '"><span>Retweet</span></a> . <a href="https://twitter.com/intent/favorite?tweet_id=' + data[i]["id_str"] + '"><span>Favourite</span></a></p></div>';
                    tmp_html += '</div><!-- end .latest_feed_text pull-right -->';
                    tmp_html += '<div class="clear"></div>';
                    tmp_html += '</div><!-- end .latest_news_item -->';
                }

                jQuery('#latest_feeds_twitter_col').prepend(tmp_html);
            },
            error: function (jqXHR, status, errorThrown) {
                jQuery('#latest_feeds_twitter_col').prepend('<div class="latest_news_item"><p>Error message.</p></div>');
            }

        });
    }

    // 1.8 latest tweets RHS
    //if(jQuery('#course_page_rhs_twitter_box').length) {
    if(jQuery('#latest_tweets_rhs_box').length) {
        var tmp_twitter_url = '',
            tmp_twitter_id = '';

        if (jQuery('#latest_tweets_rhs_box #metadata_twitter_id').length) {
            if (jQuery('#latest_tweets_rhs_box #metadata_twitter_id').val()) {
                tmp_twitter_id = jQuery('#latest_tweets_rhs_box #metadata_twitter_id').val();
                tmp_twitter_url = GLOBALS.url["twitter-custom"] + '?twitter_id=' + tmp_twitter_id + '';
            }
            else {
                tmp_twitter_url = GLOBALS.url["twitter-homepage"];
            }
        }

        jQuery.ajax({ type: "GET", dataType: "json",
            url: tmp_twitter_url,
            success: function(data){
                var tmp_html = '<div class="header"><span>Twitter</span></div><ul id="latest_tweets_rhs_list" class="rhs_box_list">',
                    count = 4,
                    exp_create_links = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

                count = count > data.length ? data.length : count;
                for (var i = 0; i < count; i++) {
                    var tweet_text = '';
                    if ( typeof(data[i]['retweeted_status']) != 'undefined' ) {
                        var tweet_data = data[i]['retweeted_status']["text"];
                    } else {
                        var tweet_data = data[i]["text"];
                    }

                    tweet_text = hashLink(tweet_data);
                    tweet_text = standardLink(tweet_text);
                    tweet_text = standardLinkSecured(tweet_text);
                    tweet_text = atLink(tweet_text);

                    function parseTwitterDate(str) {
                        var v=str.split(' ');
                        var date = new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
                        return date;
                    }

                    var date_ago = new Date(parseTwitterDate(data[i]["created_at"]));
                    date_ago = jQuery.timeago(date_ago);

                    tmp_html += '<li>';
                    tmp_html += '<div class="rhs_latest_tweets_item">';
                    tmp_html += '<a href="https://twitter.com/' + tmp_twitter_id + '" target="_blank"><span>@' + data[i]["user"]["screen_name"] + '</span></a><div class="clear"></div>';
                    tmp_html += '<p>' + tweet_text + '</p>';
                    tmp_html += '<div class="rhs_latest_tweets_item_options"><ul >';
                    tmp_html += '<li><span>' + date_ago + '</span></li>';
                    tmp_html += '<li><a target="_blank" href="https://twitter.com/intent/tweet?in_reply_to=' + data[i]["id_str"] + '"><span>Reply</span></a></li>';
                    tmp_html += '<li><a target="_blank" href="https://twitter.com/intent/retweet?tweet_id=' + data[i]["id_str"] + '"><span>Retweet</span></a></li>';
                    tmp_html += '</ul><div class="clear"></div></div><!-- end .rhs_latest_tweets_item_options -->';
                    tmp_html += '</div><!-- end .rhs_latest_tweets_item -->';
                    tmp_html += '</li>';
                }

                tmp_html += '</ul>';
                jQuery('#latest_tweets_rhs_box').prepend(tmp_html);

                if (jQuery('#latest_tweets_rhs_list').length && jQuery('#latest_tweets_rhs_list li').eq(1).length) {
                    var next_button = '<div class="rhs_vertical_slider_horizontal_line"><div class="rhs_vertical_slider_horizontal_line_button_holder"><a href="#" id="latest_tweets_down_button" class="slide_down_button"><span>up</span></a></div></div>';

                    jQuery('#latest_tweets_rhs_list').after(next_button);

                    jQuery('#latest_tweets_rhs_list').carouFredSel({
                        auto: {
                            play: false
                        },
                        direction: "up",
                        items: {
                            visible: 2,
                            minimum: 3
                        },
                        next: "#latest_tweets_down_button",
                        scroll: 1
                    });
                }
            }
        });
    }

    // 1.9 Get a Prospectus button - adding user defined design and layout
    if(jQuery(".popup_prospectus").length) {
        jQuery(".popup_prospectus").attr('href', function(){
            return jQuery(".popup_prospectus").attr('href') + '?SQ_DESIGN_NAME=popup&SQ_PAINT_LAYOUT_NAME=blank';
        });
    }



    // 1.10 Get in touch button - News listing page
    var hidden_form_options = {
        target: '#hidden_form', // target element(s) to be updated with server response
        success: hidden_form_showResponse,  // post-submit callback
        url: jQuery('#hidden_form #current_form_url').val()
    };

    jQuery('#hidden_form').find('form').ajaxForm(hidden_form_options);

    // 1.11 colorbox init
    colorbox_set();

    // validate signup form on keyup and submit - form 3092
    jQuery("#form_email_3092").validate({
        rules: {
            "q3092:q1": "required",
            "q3092:q2": "required",

            /* phone number not mandatory
             "q3092:q3": {
             required: true,
             number: true
             },
             */
            "q3092:q5": {
                required: true,
                email: true
            }
        },
        messages: {
            "q3092:q1": '<div class="error-thick"></div> Please enter your firstname',
            "q3092:q2": '<div class="error-thick"></div> Please enter your lastname',
            /*  "q3092:q3": '<div class="error-thick"></div> Please enter your phone number', */
            "q3092:q5": '<div class="error-thick"></div> Please enter a valid email address'
        }
    });

    // validate signup form on keyup and submit - form 16031
    jQuery("#form_email_16031").validate({
        rules: {
            "q16031:q1": "required",
            "q16031:q2": "required",

            /* phone number not mandatory
             "q3092:q3": {
             required: true,
             number: true
             },
             */
            "q16031:q5": {
                required: true,
                email: true
            }
        },
        messages: {
            "q16031:q1": '<div class="error-thick"></div> Please enter your firstname',
            "q16031:q2": '<div class="error-thick"></div> Please enter your lastname',
            /*  "q3092:q3": '<div class="error-thick"></div> Please enter your phone number', */
            "q16031:q5": '<div class="error-thick"></div> Please enter a valid email address'
        }
    });

    // validate signup form on keyup and submit
    jQuery("#form_email_21394").validate({
        rules: {
            "q21394:q1": "required",
            "q21394:q2": "required",
            "q21394:q3": {
                required: true,
                email: true
            },
            "q21394:q5": "required"
        },
        messages: {
            "q21394:q1": '<div class="error-thick"></div> Please enter your firstname',
            "q21394:q2": '<div class="error-thick"></div> Please enter your lastname',
            /*  "q21394:q3": '<div class="error-thick"></div> Please enter your phone number', */
            "q21394:q3": '<div class="error-thick"></div> Please enter a valid email address',
            "q21394:q5": '<div class="error-thick"></div> Please enter your question'
        }
    });

    // validate contact us form on keyup and submit
    jQuery("#form_email_17687").validate({
        rules: {
            "q17687:q1": "required",
            "q17687:q2": "required",
            "q17687:q3": {
                required: true,
                email: true
            }
        },
        messages: {
            "q17687:q1": '<div class="error-thick"></div> Please enter your firstname',
            "q17687:q2": '<div class="error-thick"></div> Please enter your lastname',
            "q17687:q3": '<div class="error-thick"></div> Please enter a valid email address'
        }
    });

    // validate on ' Courses  Â»  Employer sponsored study  Â»  Contact details and enquiry form'
    jQuery("#form_email_19216").validate({
        rules: {
            "q19216:q1": "required",
            "q19216:q2": "required",
            // "q19216:q3": "required",
            "q19216:q4": "required",
            // "q19216:q5": "required",
            "q19216:q6": {
                required: true,
                email: true
            },
            "q19216:q7": "required"
        },
        messages: {
            "q19216:q1": '<div class="error-thick"></div> Please enter title',
            "q19216:q2": '<div class="error-thick"></div> Please enter your name',
            // "q19216:q3": '<div class="error-thick"></div> Please enter your job title',
            "q19216:q4": '<div class="error-thick"></div> Please enter the name of organisation',
            //"q19216:q5": '<div class="error-thick"></div> Please enter your phone number',
            "q19216:q6": '<div class="error-thick"></div> Please enter a valid email address',
            "q19216:q7": '<div class="error-thick"></div> Please enter your question'
        }
    });

    // validate on 'Business & Partners  Â»  Business  Â»  Access our expertise  Â»  Applied Research' form
    jQuery("#form_email_21353").validate({
        rules: {
            "q21353:q1": "required",
            "q21353:q2": "required",
            //"q21353:q3": "required",
            "q21353:q4": "required",
            //"q21353:q5": "required",
            "q21353:q6": {
                required: true,
                email: true
            },
            "q21353:q7": "required"
        },
        messages: {
            "q21353:q1": '<div class="error-thick"></div> Please enter title',
            "q21353:q2": '<div class="error-thick"></div> Please enter your name',
            //"q21353:q3": '<div class="error-thick"></div> Please enter your job title',
            "q21353:q4": '<div class="error-thick"></div> Please enter the name of organisation',
            //"q21353:q5": '<div class="error-thick"></div> Please enter your phone number',
            "q21353:q6": '<div class="error-thick"></div> Please enter a valid email address',
            "q21353:q7": '<div class="error-thick"></div> Please enter your question'
        }
    });


    // 1.13 upcoming events slider
    if (jQuery('#upcoming_events_rhs').length && jQuery('#upcoming_events_rhs ul.upcoming_events li').length) {
        var prev_next_button_upcoming_events = '<div class="rhs_vertical_slider_horizontal_line"><div class="rhs_vertical_slider_horizontal_line_button_holder"><a href="#" id="upcoming_events_up_button" class="slide_up_button"><span>up</span></a><a href="#" id="upcoming_events_down_button" class="slide_down_button"><span>down</span></a></div></div>';

        jQuery('#upcoming_events_rhs ul.upcoming_events').before(prev_next_button_upcoming_events);

        jQuery('ul.upcoming_events').carouFredSel({
            auto: {
                play: false
            },
            direction: "up",
            items: {
                visible: 2,
                minimum: 3
            },
            prev: "#upcoming_events_up_button",
            next: "#upcoming_events_down_button",
            scroll: 1
        });

    }

    jQuery(".rhs_box.related").each(function(){
  if(jQuery(this).find("ul > li").length === 0){
    jQuery(this).hide();
  }
     });


    // 1.14 latest news slider
    if (jQuery('#latest_news_rhs').length && jQuery('#latest_news_rhs ul.latest_news li').length) {
        var prev_next_button_latest_news = '<div class="rhs_vertical_slider_horizontal_line"><div class="rhs_vertical_slider_horizontal_line_button_holder"><a href="#" id="latest_news_up_button" class="slide_up_button"><span>up</span></a><a href="#" id="latest_news_down_button" class="slide_down_button"><span>down</span></a></div></div>';

        jQuery('#latest_news_rhs ul.latest_news').before(prev_next_button_latest_news);

        jQuery('ul.latest_news').carouFredSel({
            auto: {
                play: false
            },
            direction: "up",
            items: {
                minimum: 3,
                visible: function(){
                    if (jQuery('ul.latest_news li').length < 3) {
                        if (jQuery('ul.latest_news li').length == 1) {
                            //jQuery('ul.latest_news li').first().addClass('border_bottom_0');
                            jQuery('ul.latest_news li').first().css({'border-bottom': '0'});
                        }
                        return jQuery('ul.latest_news li').length;
                    }
                    else {
                        return 3;
                    }
                }
            },
            prev: {
                button: "#latest_news_up_button",
                onAfter: function(data){
                    jQuery('ul.latest_news li').css({'border-bottom': '0'});
                    jQuery('ul.latest_news li').eq(0).css({'border-bottom': '1px solid #e7e7e7'});
                    jQuery('ul.latest_news li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
                }
            },
            next: {
                button: "#latest_news_down_button",
                onAfter: function(data){
                    jQuery('ul.latest_news li').css({'border-bottom': '0'});
                    jQuery('ul.latest_news li').eq(0).css({'border-bottom': '1px solid #e7e7e7'});
                    jQuery('ul.latest_news li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
                }
            },
            scroll: 1
        });
//    jQuery(".caroufredsel_wrapper").height(jQuery(".caroufredsel_wrapper").height()-15);//bad fix
        jQuery('ul.latest_news li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
    }
    if (jQuery('#latest_news_rhs ul.latest_news li').length < 3) {
        jQuery('ul.latest_news li').eq(1).css({'border-bottom': '0'});
    }

    // 1.14.1 latest news slider for department
    if (jQuery('#latest_news').length && jQuery('#latest_news ul.latest_news li').length) {
        var prev_next_button_news_slider_dep = '<div class="rhs_vertical_slider_horizontal_line"><div class="rhs_vertical_slider_horizontal_line_button_holder"><a href="#" id="latest_news_up_button" class="slide_up_button"><span>up</span></a><a href="#" id="latest_news_down_button" class="slide_down_button"><span>down</span></a></div></div>';

        jQuery('#latest_news ul.latest_news').before(prev_next_button_news_slider_dep);

        jQuery('ul.latest_news').carouFredSel({
            auto: {
                play: false
            },
            direction: "up",
            items: {
                visible: 3,
                minimum: 3
            },
            prev: {
                button: "#latest_news_up_button",
                onAfter: function(data){
                    jQuery('ul.latest_news li').css({'border-bottom': '0'});
                    jQuery('ul.latest_news li').eq(0).css({'border-bottom': '1px solid #e7e7e7'});
                    jQuery('ul.latest_news li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
                }
            },
            next: {
                button: "#latest_news_down_button",
                onAfter: function(data){
                    jQuery('ul.latest_news li').css({'border-bottom': '0'});
                    jQuery('ul.latest_news li').eq(0).css({'border-bottom': '1px solid #e7e7e7'});
                    jQuery('ul.latest_news li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
                }
            },
            scroll: 1
        });

        jQuery('ul.latest_news li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
    }
    if (jQuery('#latest_news ul.latest_news li').length < 3) {
        jQuery('ul.latest_news li').eq(1).css({'border-bottom': '0'});
    }

    // 1.14.2 upcoming events slider for department
    if (jQuery('#upcoming_events').length && jQuery('#upcoming_events ul.upcoming_events li').length && !jQuery('html').hasClass('ie7')) {
        var prev_next_button_upcoming_events_dep = '<div class="rhs_vertical_slider_horizontal_line"><div class="rhs_vertical_slider_horizontal_line_button_holder"><a href="#" id="upcoming_events_up_button" class="slide_up_button"><span>up</span></a><a href="#" id="upcoming_events_down_button" class="slide_down_button"><span>down</span></a></div></div>';

        jQuery('#upcoming_events ul.upcoming_events').before(prev_next_button_upcoming_events_dep);

        jQuery('ul.upcoming_events').carouFredSel({
            auto: {
                play: false
            },
            direction: "up",
            items: {
                visible: 3,
                minimum: 3
            },
            prev: {
                button: "#upcoming_events_up_button",
                onAfter: function(data){
                    jQuery('ul.upcoming_events li').css({'border-bottom': '0'});
                    jQuery('ul.upcoming_events li').eq(0).css({'border-bottom': '1px solid #e7e7e7'});
                    jQuery('ul.upcoming_events li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
                }
            },
            next: {
                button: "#upcoming_events_down_button",
                onAfter: function(data){
                    jQuery('ul.upcoming_events li').css({'border-bottom': '0'});
                    jQuery('ul.upcoming_events li').eq(0).css({'border-bottom': '1px solid #e7e7e7'});
                    jQuery('ul.upcoming_events li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
                }
            },
            scroll: 1
        });

        jQuery('ul.upcoming_events li').eq(1).css({'border-bottom': '1px solid #e7e7e7'});
    }
    if (jQuery('#upcoming_events ul.upcoming_events li').length < 3) {
        jQuery('ul.upcoming_events li').eq(1).css({'border-bottom': '0'});
    }


    // 1.15 KIS data popup
    if (jQuery('#kis_accordion1 .accordion-group').length) {
        jQuery('#kis_accordion1 .accordion-group').first().find('a.accordion-toggle').addClass('active');
        jQuery('#kis_accordion1 .accordion-group').first().find('div.accordion-body').addClass('in');
    }
    /*
     jQuery('#tab_kis_data a.open_popup').on('click', function (e) {
     e.preventDefault();
     if(jQuery('.kis_popup_wrapper').length) {
     jQuery('.kis_popup_wrapper').show();
     }
     else {
     var kis_url = jQuery('#kis_url_input').val(),
     kis_popup_html = '<div class="kis_popup_wrapper"><div class="kis_popup_holder"><a href="#" class="close_kis_popup_holder"><span>close</span></a><div class="clearfix"></div><div class="header">KIS data</div><div class="kis_popup_content"><div class="accordion" id="kis_accordion1"><div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle active" data-toggle="collapse" data-parent="#kis_accordion1" href="#collapseOne"><span>Full time</span></a></div><div id="collapseOne" class="accordion-body collapse in"><div class="accordion-inner"><iframe scrolling="no" style="overflow: hidden; border: 0px none transparent; width: 611px; height: 150px; position: relative; left: -9px;" src="http://widget.unistats.ac.uk/Widget/10004078/4000A/Horizontal/Small/en-GB" title="Unistats KIS Widget" id="unistats-widget-frame"></iframe></div></div></div><div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#kis_accordion1" href="#collapseTwo"><span>Part time</span></a></div><div id="collapseTwo" class="accordion-body collapse"><div class="accordion-inner"><iframe scrolling="no" style="overflow: hidden; border: 0px none transparent; width: 611px; height: 150px; position: relative; left: -9px;" src="http://widget.unistats.ac.uk/Widget/10004078/4000A/Horizontal/Small/en-GB" title="Unistats KIS Widget" id="unistats-widget-frame"></iframe></div></div></div><div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#kis_accordion1" href="#collapseThree"><span>Short course</span></a></div><div id="collapseThree" class="accordion-body collapse"><div class="accordion-inner"><iframe scrolling="no" style="overflow: hidden; border: 0px none transparent; width: 611px; height: 150px; position: relative; left: -9px;" src="http://widget.unistats.ac.uk/Widget/10004078/4000A/Horizontal/Small/en-GB" title="Unistats KIS Widget" id="unistats-widget-frame"></iframe></div></div></div></div><!-- #end kis_accordion1 --></div></div></div>';
     jQuery('body').prepend(kis_popup_html);

     jQuery('.accordion-heading').on('click', function () {

     //jQuery('.accordion-toggle').not(this).removeClass('active');
     if(jQuery(this).find('.accordion-toggle').hasClass('active')) {
     jQuery(this).find('.accordion-toggle').toggleClass('active');
     }
     else {
     jQuery(this).parents(".accordion").find('.accordion-toggle').removeClass('active');//changed from jQuery(".accordion-toggle").removeClass("active");
     jQuery(this).find('.accordion-toggle').toggleClass('active');
     }
     });

     jQuery('.close_kis_popup_holder').on('click', function(e) {
     e.preventDefault();
     if(jQuery('.kis_popup_wrapper').length) {
     jQuery('.kis_popup_wrapper').fadeOut();
     }
     });
     }
     });


     // 1.16 accordion - add 'active' class in .accordion-heading for selected accordion-group
     jQuery('.accordion-toggle').on("click", function() {
     if(jQuery(this).hasClass('active')) {
     jQuery(this).toggleClass('active');
     jQuery(this).parents('.accordion-group').find('.accordion-heading').toggleClass('active');
     }
     else {
     jQuery(this).parents(".accordion").find('.accordion-toggle').removeClass('active');//changed from jQuery(".accordion-toggle").removeClass("active");
     jQuery(this).toggleClass('active');
     jQuery(this).parents('.accordion-group').find('.accordion-heading').removeClass('active');
     jQuery(this).parents('.accordion-group').find('.accordion-heading').toggleClass('active');
     }
     });
     */
    // 1.17 compare courses - set counter and compare courses; course_comparison_ids cookie will be used to keep the selected courses ids, for example: course_comparison_ids=1234|1235|1236
    // 1.17.1 initialisation - check selected courses
    (function(){
        var courses_array = [],
            courses_array_length = 0,
            tmp_name = '';

        if (docCookies.hasItem('course_comparison_ids') && docCookies.getItem('course_comparison_ids')) {
            courses_array = docCookies.getItem('course_comparison_ids').split('|');
            courses_array_length = courses_array.length;

            for (var i = 0; i < courses_array_length; i++) {
                tmp_name = '#' + courses_array[i];

                if (jQuery(tmp_name).length) {
                    jQuery(tmp_name).parent().addClass('active');
                    jQuery(tmp_name).prop("checked", true);
                }

                jQuery('#compare_courses_counter span').text(courses_array_length);
            }
        }
    }());

    jQuery(document).on('change', '.course_compare_checkbox_holder input', function(){
        var courses_array = [],
            courses_array_length = 0,
            cookie_value = '',
            current_id = jQuery(this).attr('id');

        if (current_id) {
            if (jQuery(this).prop("checked")) {
                if (docCookies.hasItem('course_comparison_ids') && docCookies.getItem('course_comparison_ids')) {
                    courses_array = docCookies.getItem('course_comparison_ids').split('|');
                    courses_array_length = courses_array.length;

                    if (courses_array.indexOf(current_id) < 0) {
                        if (courses_array_length < 4) {
                            courses_array.push(current_id);
                            courses_array_length = courses_array.length;
                            cookie_value = courses_array.join('|');

                            jQuery(this).parent().addClass('active');
                            jQuery(this).prop("checked", true);
                            docCookies.setItem('course_comparison_ids', cookie_value, '', "/");
                            jQuery('#compare_courses_counter span').text(courses_array_length);
                        }
                        else {
                            //alert('Up to four courses can be compared.');
                            var compare_alert_1 = '<div class="compare_courses_alert_box"><p class="margin_top_15">You can only compare up to a maximum of four courses.</p></div>';
                            jQuery.colorbox({
                                width: "auto",
                                html:compare_alert_1,
                                onComplete:function(){
                                    if ((jQuery('body').width() < 900) || jQuery('body').hasClass('ipad_resp')) {
                                        var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                                            tmp_colorbox_width = jQuery('#colorbox').width(),
                                            tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
                                        jQuery('#colorbox').css('left', tmp_left);
                                    }
                                },
                                reposition: false
                            });

                            jQuery(this).parent().removeClass('active');
                            jQuery(this).prop("checked", false);
                        }
                    }
                }
                else {
                    jQuery(this).parent().addClass('active');
                    jQuery(this).prop("checked", true);
                    jQuery('#compare_courses_counter span').text("1");
                    docCookies.setItem('course_comparison_ids', current_id, '', "/");
                }
            }
            else {
                if (docCookies.hasItem('course_comparison_ids') && docCookies.getItem('course_comparison_ids')) {
                    courses_array = docCookies.getItem('course_comparison_ids').split('|');
                    courses_array_length = courses_array.length;

                    jQuery(this).parent().removeClass('active');
                    jQuery(this).prop("checked", false);

                    if (courses_array.indexOf(current_id) < 0) {

                    }
                    else {
                        courses_array = courses_array.filter(function(element){
                            return element !== current_id;
                        });
                        courses_array_length = courses_array.length;
                        cookie_value = courses_array.join('|');
                        docCookies.setItem('course_comparison_ids', cookie_value, '', "/");
                    }

                    jQuery('#compare_courses_counter span').text(courses_array_length);
                }
                else {
                    jQuery(this).parent().removeClass('active');
                    jQuery(this).prop("checked", false);
                    jQuery('#compare_courses_counter span').text("0");
                }
            }
        }
        else {
            
        }
    });

    jQuery(document).on('click', '#button_courses_compare_now', function(e){
        e.preventDefault();

        if (!jQuery(this).hasClass('already_clicked')) {
            jQuery(this).addClass('already_clicked');

            var tmp_url = GLOBALS.url["courses_comparison_table"],
                courses_array = [],
                courses_array_length = 0,
                cookie_value = '',
                current_id = jQuery(this).attr('id'),
                tmp_name = '',
                tmp_url_ids = [];


            if (docCookies.hasItem('course_comparison_ids') && docCookies.getItem('course_comparison_ids')) {
                courses_array = docCookies.getItem('course_comparison_ids').split('|');
                courses_array_length = courses_array.length;

                if (courses_array_length < 2) {
                    var compare_alert_2 = '<div class="compare_courses_alert_box"><p class="margin_top_15">Please select a minimum of two courses to compare</p></div>';
                    jQuery.colorbox({
                        width: "auto",
                        html:compare_alert_2,
                        onComplete:function(){
                            if ((jQuery('body').width() < 900) || jQuery('body').hasClass('ipad_resp')) {
                                var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                                    tmp_colorbox_width = jQuery('#colorbox').width(),
                                    tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
                                jQuery('#colorbox').css('left', tmp_left);
                            }
                        },
                        reposition: false
                    });
                    //alert('Select at least two (and up to four) courses to compare.');
                    jQuery(this).removeClass('already_clicked');
                }
                else {
                    if (courses_array_length > 4) {
                        courses_array_length = 4;// user can only compare up to four courses
                    }
                    for (var i = 0; i < courses_array_length; i++) {
                        tmp_name = courses_array[i].replace('course_', '');
                        tmp_url_ids.push(tmp_name);
                    }

                    tmp_url += '/_nocache';
                    tmp_url = setGetParameter(tmp_url, 'cid', tmp_url_ids.join('_'));

                    jQuery.colorbox({href:tmp_url, open:true, onComplete:function(){
                        if (jQuery('#button_courses_compare_now').length) {
                            jQuery('#button_courses_compare_now').removeClass('already_clicked');
                            var tmp_width = jQuery('.whole_content_holder').first().width();
                            jQuery.colorbox.resize({
                                width: tmp_width
                            });
                        }
                    }, reposition: false});
                }
            }
            else {
                var compare_alert_3 = '<div class="compare_courses_alert_box"><p class="margin_top_15">Please select a minimum of two courses to compare</p></div>';
                jQuery.colorbox({
                    width: "auto",
                    html:compare_alert_3,
                    onComplete:function(){
                        if ((jQuery('body').width() < 900) || jQuery('body').hasClass('ipad_resp')) {
                            var tmp_site_width = jQuery('.whole_content_holder').first().width(),
                                tmp_colorbox_width = jQuery('#colorbox').width(),
                                tmp_left = Math.floor(tmp_site_width / 2) - Math.floor(tmp_colorbox_width / 2);
                            jQuery('#colorbox').css('left', tmp_left);
                        }
                    },
                    reposition: false
                });
                //alert('Select at least two (and up to four) courses to compare.');
                jQuery(this).removeClass('already_clicked');
            }
        }
    });

    jQuery(document).on('click', '.button_clear_all_checkboxes', function(e){
        e.preventDefault();

        if (docCookies.hasItem('course_comparison_ids') && docCookies.getItem('course_comparison_ids')) {
            docCookies.removeItem('course_comparison_ids', "/");
        }

        jQuery('.course_compare_checkbox_holder input').prop("checked", false);
        jQuery('.course_compare_checkbox_holder input').parent().removeClass('active');
        jQuery('#compare_courses_counter span').text("0");
        jQuery('#button_courses_compare_now').removeClass('already_clicked');
    });

    // 1.18 popup controll
    jQuery('.open_in_popup_ajax').on('click', function(e) {
        e.preventDefault();
        var tmp_target = jQuery(this).attr('href'),
            popup_html = '<div class="popup_bg hide"><div class="popup_holder"><a class="popup_close_link" href="#"><span>close</span></a><div class="clearfix"></div></div></div>';

        jQuery('body').prepend(popup_html);

        jQuery.ajax({ type: "GET", dataType: "html",
            url: tmp_target,
            success: function(data){
                jQuery('.popup_bg').fadeIn(function(){
                    jQuery('.popup_holder').append(data);
                });

                jQuery('.popup_close_link').on('click', function(e) {
                    e.preventDefault();
                    jQuery('.popup_bg').fadeOut(function(){
                        jQuery(this).remove();
                    });
                });
            }
        });
    });

    jQuery('.popup_close_link').on('click', function(e) {
        e.preventDefault();
        jQuery('.popup_bg').fadeOut(function(){
            jQuery(this).remove();
        });
    });


    // 1.19 - filter toggle - events listing
    jQuery("#events_filter a").click(function(){
        jQuery(this).next("ul").slideToggle();
        jQuery(this).next("ul").toggleClass("expanded");
        jQuery(this).toggleClass("active");
        return false;
    });

    jQuery("#events_filter label").click(function(){
        jQuery(this).parent().toggleClass("checked");
    });

    // 1.20 top level landing page - odd/even secondary links
    // jQuery('.top_level_landing_page_secondary_links').children('div:even').removeClass('span4').addClass('span5');

    // 1.21 course information page - Course Units - toggle bullets
    jQuery('#tab_modules ul.custom_accordion li strong').hide();
    jQuery('#tab_modules ul.custom_accordion').children('li').on('click', function() {
        var tmp_content = jQuery(this).find('strong').first(),
            tmp_clicked = jQuery(this);
        if(tmp_clicked.find('strong').length) {
            tmp_content.slideToggle('fast');
            tmp_clicked.toggleClass('active');
        }
    });

    //1.22 case studies page - slider
    if(jQuery("#case_studies_slides").length) {
        if(jQuery("#case_studies_slides").children('li').length) {
            var tmp_slider_nav_html = '' +
                '<div id="case_studies_slider_nav" class="slider_nav_type2">' +
                '<ul class="case_studies_slider_nav_list">' +
                '<li><a class="slider_prev" id="case_studies_slider_prev" href="#"><span>prev</span></a></li>' +
                '<li><div class="slider_pagination" id="case_studies_slider_pagination"></div></li>' +
                '<li><a class="slider_next" id="case_studies_slider_next" href="#"><span>next</span></a></li>' +
                '</ul>' +
                '<div class="clearfix"></div>' +
                '</div>';

            jQuery('#case_studies_slider').after(tmp_slider_nav_html);
        }

        jQuery("#case_studies_slides").carouFredSel({
            circular: false,
            infinite: false,
            auto: false,
            prev: {
                button: "#case_studies_slider_prev",
                key: "left"
            },
            next: {
                button: "#case_studies_slider_next",
                key: "right"
            },
            pagination: "#case_studies_slider_pagination",
            items: {
                visible: 3
            }
        });
    }

    // 1.23 Course Finder Page - mark active letter in A-Z filter
    if(jQuery('.az_pagination').length) {
        var split = location.search.replace('?', '').split('&').map(function(val){
            return val.split('=');
        });

        var tmp_length = split.length,
            item = null;
        for (var i=0; i < tmp_length; i++) {
            item = split[i];
            if(item[0] == 'letter') {
                var tmp_query = ".az_pagination li span:contains('" + item[1].toUpperCase() + "')";
                jQuery(tmp_query).parents('li').addClass('active');
                break;
            }
        }
    }

    // 1.25 Javascript to enable link to tab
    var hash = document.location.hash;
    var prefix = "course_";
    if (hash && jQuery('.nav-tabs').length > 0) {
        jQuery('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
    }
    // Change hash for page-reload
    jQuery('.nav-tabs a').on('shown', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });

    // 1.26 campus map configuration
    if(jQuery('#campus_map_tab_content').length) {
        // uncheck the checkboxes within the filter list
        jQuery('#collapse_Buildings_Southwark input, #collapse_Buildings_Havering input').prop('checked', false);

        jQuery.ajax({ type: "GET", dataType: "json",
            url: GLOBALS.url["campus_map_buildings"],
            success: function(data){
                var icon_image = GLOBALS.url["map_marker_blue"],
                    tmp_directions_southwark = '',
                    tmp_directions_havering = '',
                    southwark_map = {},
                // southwark_map_center = new google.maps.LatLng(51.499593, -0.102718),
                    southwark_map_center = new google.maps.LatLng(51.496280, -0.101130),
                    southwark = data['buildings'].filter(getSouthwark),
                    southwark_initialised = 0,
                    havering_map = {},
                    havering_map_center = new google.maps.LatLng(51.592629, 0.224833),
                    havering = data['buildings'].filter(getHavering),
                    havering_initialised = 0;

                function getSouthwark(item) {
                    return item['campus'] === 'Southwark';
                }

                function getHavering(item) {
                    return item['campus'] === 'Havering';
                }

                // southwark map initialisation
                if (jQuery('#Southwark_tab').hasClass('active')) {
                    southwark_map = campusMapInit(southwark, icon_image, 'southwark_campus_map_holder', southwark_map_center, 'lhs_Southwark_campus_filter');
                    southwark_initialised = 1;
                }

                // havering map initialisation
                if (jQuery('#Havering_tab').hasClass('active')) {
                    havering_map = campusMapInit(havering, icon_image, 'havering_campus_map_holder', havering_map_center, 'lhs_Havering_campus_filter');
                    havering_initialised = 1;
                }

                jQuery('#campus_map_tab_nav > li > a').on('click', function(){
                    if (jQuery(this).attr('href') == '#Havering_tab' && !havering_initialised) {
                        havering_map = campusMapInit(havering, icon_image, 'havering_campus_map_holder', havering_map_center, 'lhs_Havering_campus_filter');
                        havering_initialised = 1;
                        google.maps.event.addListenerOnce(havering_map, 'idle', function(){
                            google.maps.event.trigger(havering_map, 'resize');
                            havering_map.setCenter(havering_map_center);
                        });
                    }
                    else if (jQuery(this).attr('href') == '#Southwark_tab' && !southwark_initialised) {
                        southwark_map = campusMapInit(southwark, icon_image, 'southwark_campus_map_holder', southwark_map_center, 'lhs_Southwark_campus_filter');
                        southwark_initialised = 1;
                        google.maps.event.addListenerOnce(southwark_map, 'idle', function(){
                            google.maps.event.trigger(southwark_map, 'resize');
                            southwark_map.setCenter(southwark_map_center);
                        });
                    }
                });

                /*
                 tmp_directions_southwark = jQuery('#campus_map_directions_tabs').html();
                 tmp_directions_havering = jQuery('#campus_map_directions_tabs').html().replace(/southwark_directions/g, 'havering_directions');
                 */

                tmp_directions_southwark = jQuery('#campus_map_directions_tabs').html();
                tmp_directions_havering = jQuery('#campus_map_directions_tabs_havering').html();
                jQuery('#southwark_campus_map_holder').after(tmp_directions_southwark);
                jQuery('#havering_campus_map_holder').after(tmp_directions_havering);

            }
        });
    }

    // 1.27 youtube video in colorbox iframe
    // http://www.youtube.com/watch?v=zRQxWBYnOHM
    jQuery('a.youtube, a.iframe').attr('href', function() {
        return jQuery(this).attr('href').replace(/watch\?v=/g, 'embed/').replace(/youtu\.be\//g, 'www.youtube.com/embed/').replace(/&.*/g, '').replace(/\.vimeo.com\//g, 'player.vimeo.com/video/').replace(/\/vimeo.com\//g, '/player.vimeo.com/video/');
    });

    // 1.28 campaign landing page slider
    if (jQuery('#campaign_landing_page_slider').length && jQuery('#campaign_landing_page_slider_list li').length) {
        var slider_arrows_html = '<a id="slider_prev" href="#"><span>prev</span></a><a id="slider_next" href="#"><span>next</span></a>';
        var slider_bullets_html = '<div id="slider_nav_bullets_holder"><div class="slider_nav_bullets hidden-phone"></div></div>';

        jQuery('#campaign_landing_page_slider').prepend(slider_bullets_html);

        jQuery('#campaign_landing_page_slider').flexslider({
            slideshowSpeed: 6000,
            start: function(slider){
                if (jQuery('#mobile_menu_toggle').is(':visible') && typeof(resize_campaign_slider) === 'function') {
                    // init the height of the first item on start
                    resize_campaign_slider();
                    var new_height = slider.slides.eq(0).height();
                    slider.height(new_height);
                }
            },
            after: function(slider) {
                if (jQuery('#mobile_menu_toggle').is(':visible') && typeof(resize_campaign_slider) === 'function') {
                    resize_campaign_slider();
                    var new_height = slider.slides.eq(slider.currentSlide).height();
                    slider.animate({ height: new_height  }, 250);
                }
            }
        });

        jQuery('#slider_nav_bullets_holder .slider_nav_bullets').prepend(jQuery('#campaign_landing_page_slider .flex-control-nav'));
    }

    // 1.29 international landing page - hide country results when no letter selected
    if (jQuery('.international_selected_countries').length) {
        var tmp_url = document.location.href;
        if(!tmp_url.match('_result_page=')) {
            jQuery('.international_selected_countries').hide();
        }
        else {
            var tmp_index = tmp_url.indexOf('_result_page='),
                tmp_letter = '';
            tmp_index += 13;
            tmp_letter = tmp_url[tmp_index];
            jQuery('.letters a').each(function(){
                if(jQuery(this).text() === tmp_letter) {
                    jQuery(this).addClass('active');
                }
            });
        }
    }

    // 1.30 international landing page - mark selected region on the map
    if (jQuery('#international_list_by_region').length) {
        var tmp_param = getParam(document.location.href, 'region');
        if (tmp_param && jQuery('#' + tmp_param).length) {
            jQuery('#' + tmp_param).addClass('active');
        }
    }

    // 1.31 events listing page - past GET parameter on select change
    /*
     if (jQuery('#find-event-select option').length) {
     (function(){
     var tmp_name = jQuery('#find-event-select option').first().text();

     switch (tmp_name) {
     case 'Upcoming events' :
     jQuery('#find-event-select option').parent().attr('name', 'meta_d3');
     break;
     case 'Past events' :
     jQuery('#find-event-select option').parent().attr('name', 'meta_d4');
     break;
     default :
     break;
     }
     }());


     jQuery('#find-event-select option').on('click', function(){
     var tmp_name = jQuery(this).text();

     switch (tmp_name) {
     case 'Upcoming events' :
     jQuery('#find-event-select').attr('name', 'meta_d3');
     break;
     case 'Past events' :
     jQuery('#find-event-select').attr('name', 'meta_d4');
     break;
     default :
     break;
     }
     });
     }
     */

    // 1.32 add 'checked' class to the checked input's labels
    if (jQuery('#case_study_filter input').length) {
        jQuery('#case_study_filter input').each(function(){
            if (jQuery(this).is(':checked')) {
                jQuery(this).parents('li').addClass('checked');
                jQuery(this).parents('li').find('label').addClass('label-checked');
            }
        });
    }
    
    if (jQuery('.checkbox_filters_list input').length) {
        jQuery('.checkbox_filters_list input').each(function(){
            if (jQuery(this).is(':checked')) {
                jQuery(this).parents('li').find('label').addClass('label-checked');
            }
        });
    }

    // 1.33 fees widget filters
    jQuery('.fees_filter_header input').on('change', function(){
        var tmp_class = '.' + jQuery(this).val();
        jQuery(this).parent().next('.fees_mode_filters').find('input').each(function(){
            jQuery(this).removeAttr('checked').parent().removeClass('checked');
        });
        if (jQuery(this).is(':checked')) {
            jQuery(this).parent().addClass('checked');
            jQuery('#fees_list').find(tmp_class).each(function(){
                if (jQuery(this).is(':hidden')) {
                    jQuery(this).slideDown();
                }
            });
        }
        else {
            jQuery(this).parent().removeClass('checked');
            jQuery('#fees_list').find(tmp_class).each(function(){
                if (jQuery(this).is(':visible')) {
                    jQuery(this).slideUp();
                }
            });
        }
    });
    
    // 1.34 course information page - add hover on mouse enter in LHS nav
    jQuery(document).on({
        click: function () {
            var obj = jQuery(this);
            obj.addClass("hover");
            setTimeout(function(){ obj.removeClass("hover"); }, 200);
        }
    }, 'ul#course_information_page_lhs_tabs li');

    var feesAccordions = function () {
        jQuery('.fees_mode_filters input').on('change', function(){
            var tmp_class_array = jQuery(this).val().split(' '),
                tmp_class_array_length = tmp_class_array.length,
                tmp_mode = jQuery(this).attr('id').split('___')[0],
                tmp_id = '#' + tmp_mode;

            var self = jQuery(this);

            if (!self.hasClass('in_progress')) {
                self.addClass('in_progress');

                jQuery(tmp_id).removeAttr('checked').parent().removeClass('checked');

                if (self.is(':checked')) {
                    self.parent().addClass('checked');
                }
                else {
                    self.parent().removeClass('checked');
                }

                var count_checked = jQuery('.fees_mode_filters input:checked').length,
                    count_all = jQuery('.fees_mode_filters input').length,
                    i = 0,
                    j = 1;

                jQuery('.fees_mode_filters input').each(function(){
                    var tmp_class_array2 = jQuery(this).val().split(' '),
                        tmp_class_string = '#fees_list .' + tmp_class_array2.join('.');

                    if (jQuery(this).is(':checked')) {
                        jQuery(tmp_class_string).slideDown(10, function() {
                            if (count_all === j) {
                                // Last accordion has been displayed
                                self.removeClass('in_progress');
                            }
                            j++;
                        });
                    }
                    else {
                        if (jQuery(tmp_class_string).find('.accordion-body').hasClass('in')) {
                            jQuery(tmp_class_string).find('.accordion-heading').first().toggleClass('active');
                            //jQuery(tmp_class_string).find('.accordion-body').first().removeClass('in').css({'height': 0});
                        }

                        jQuery(tmp_class_string).slideUp(10, function() {
                            if (count_all === j) {
                                // Last accordion has been displayed
                                self.removeClass('in_progress');
                            }
                            j++;
                        });
                    }
                });
            }
        });
        function _openedByDefault () {
            var $firstAccordions = jQuery('#fees_list .accordion-group').first(),
                $accordionBody = $firstAccordions.find('.accordion-body');
            jQuery('#fees_list .accordion-group').first().find('.accordion-heading').addClass('active');
            $accordionBody.addClass('active').height('auto');
        }
        _openedByDefault();
    };
    feesAccordions();


    // 1.35 Course Finder Page - mark checked subject
    (function ($) {
        jQuery(document).on('change', ".lhs_accordion input[type='checkbox']", function(){
            if (!jQuery('body').hasClass('course_finder') || (jQuery('body').hasClass('course_finder') && !GLOBALS.url["funnelback_rest_course_finder"])) {
                $(this).addClass('checkbox-checked');
                $(this).parents('li').find('label').addClass('label-checked');
                jQuery(".lhs_accordion").parents("form").submit();
            }
        });
    })(jQuery);

    // Accordions
    var accordion = (function ($) {
        try {
            var config = {
                openAll: null,
                accordion: '.accordion',
                lhsAccordionClass: 'lhs_accordion',
                accordionWrapper: '.accordion-group',
                accordionHeading: '.accordion-toggle',
                accordionToggle: '.accordion-toggle',
                accordionBody: '.accordion-body',
                accordionContent: '.accordion-inner',
                activeClass: 'active'
            };
            // Initiates the accordion functionality
            // Selects headings and bodies for different sections passed in by section argument.
            // OpenAll argument defines the accordion behaviour per section. Can open all (true), or only one at once. (false)
            // Calls function to bind click event, and expands accordion with input checked by default.
            //
            function init() {
                var $accordion = $(config.accordion);
                // If the accordion is a LHS accordion, change to open all behaviour
                if ($accordion.length > 0) {
                    $accordion.each(function() {
                        var $this = $(this);
                        config.openAll = $this.hasClass(config.lhsAccordionClass);
                        $this.find(config.accordionWrapper).each(function () {
                            var $this = $(this),
                                $accordionHeading = $this.find(config.accordionHeading),
                                $accordionToggle = $this.find(config.accordionToggle),
                                $accordionBody = $this.find(config.accordionBody);
                            //Prevent conflict with bootstrap accordion plugin
                            if (!$accordionToggle.data('toggle')) {
                                _bindClick($accordionHeading, $accordionBody);
                                _openedByDefault($accordionHeading, $accordionBody);
                            }
                        });
                    });
                }
            }
            // Checks if any of the filter option is checked to open the accordion by default
            function _openedByDefault ($accordionHeading, $accordionBody) {
                if ($accordionBody.find('input:checked').length > 0) {
                    _toggle($accordionHeading, $accordionBody);
                }
            }
            // Resets all accordions to closed
            function _resetAccordions ($accordionHeading) {
                $accordionHeading.closest(config.accordion).find(config.accordionWrapper).each(function(){
                    var $this = $(this),
                        $accordionBody = $this.find(config.accordionBody);
                    $this.find(config.accordionHeading).removeClass(config.activeClass);
                    $this.find(config.accordionHeading).parent().removeClass(config.activeClass);
                    if ($accordionBody[0].style.height === 'auto') { // CSS animations don't work when height is set to auto
                        $accordionBody[0].style.height = $accordionBody.css('height');
                    }
                    $accordionBody.removeClass(config.activeClass).height('0');
                });
            }
            // Binds the click event on the accordion headings
            // Using 2 separate binds for performance reasons
            function _bindClick ($accordionHeading, $accordionBody) {
                if (config.openAll) {
                    $accordionHeading.on('click', function (e) {
                        e.preventDefault();
                        _toggle($accordionHeading, $accordionBody);
                    });
                } else {
                    $accordionHeading.on('click', function (e) {
                        e.preventDefault();
                        if ($accordionBody.hasClass(config.activeClass)) {
                            _resetAccordions($accordionHeading);
                        } else {
                            _resetAccordions($accordionHeading);
                            _toggle($accordionHeading, $accordionBody);
                        }
                    });
                }
            }
            // Toggles the accordion bodies. Gets the height from the inner body and applies it to the parent
            function _toggle ($accordionHeading, $accordionBody) {
                $accordionHeading.toggleClass(config.activeClass);
                $accordionHeading.parent().toggleClass(config.activeClass);
                $accordionBody.toggleClass(config.activeClass);
                var accordionBodyHeight = $accordionBody.find(config.accordionContent).outerHeight(true),
                    contentHeight = $accordionBody.hasClass(config.activeClass) ? accordionBodyHeight : '0';
                $accordionBody.height(contentHeight);
            }
            return {
                init: init
            }
        } catch (e) {
            throw new Error(e);
        }
    }) (jQuery || {});

    accordion.init();

    //KIS accordion
    if (jQuery('#kis_accordion2').length>0) {
        jQuery('#kis_accordion2 .accordion-group').first().find('.accordion-heading a').addClass('active');
        jQuery('#kis_accordion2 .accordion-group').first().find('.accordion-body').addClass('active');
        jQuery('#kis_accordion2 .accordion-group').first().find('.accordion-body').height(548);
    }


    // 1.36 Big thumb transparent overlay box ipad fix
    if (jQuery("#main_content_main_column .big-thumb .overlay-table").length>0 && navigator.userAgent.match(/iPad/i) != null) {
        jQuery("#main_content_main_column .big-thumb .overlay-table").css("width", "430px");
    }
    // 1.37 Sorting accordion - publications
    var sort_order=new Object();
    sort_order['Authored books']=1;
    sort_order['Edited books']=2;
    sort_order['Chapter in book']=3;
    sort_order['Scholarly edition']=4;
    sort_order['Journal articles']=5;
    sort_order['Conference contribution']=6;
    sort_order['Working paper']=7;
    sort_order['Other forms of research outputs']=8;
    jQuery("#inner_tab_Publications .accordion-group").each(function(){
        sort_order[jQuery(this).find(".accordion-toggle span").text()];
        jQuery(this).attr("id", "accordion-"+sort_order[jQuery(this).find(".accordion-toggle span").text()]);
    });

    jQuery("#inner_tab_Publications .accordion-group").detach().sort(function(a,b){
        var anum=jQuery(a).attr("id").replace("accordion-", "");
        var bnum=jQuery(b).attr("id").replace("accordion-", "");
        if(anum>bnum) return 1;
        else if(anum<bnum) return -1;
        else return 0;
    }).appendTo("#inner_tab_Publications .accordion");

// 1.38 Courses accordion - move to the top
    jQuery(document).on({
        click: function (e) {
            e.preventDefault();
            setTimeout(function(){
                jQuery('html, body').animate({
                    scrollTop: jQuery('#course_listing_page_filter').offset().top
                }, 0);
            }, 0);

        }
    }, '.side_filter_box #course_listing_page_filter #lhs_courses_filter a');

// People finder accordion - move to the top
    jQuery(document).on({
        click: function (e) {
            e.preventDefault();
            setTimeout(function(){
                jQuery('html, body').animate({
                    scrollTop: jQuery('#people_listing_page_filter').offset().top
                }, 0);
            }, 0);

        }
    }, '.side_filter_box #people_listing_page_filter #lhs_people_filter a');

// 1.39 Iframe youtube fix for safari wmode=transparent
    jQuery("iframe").each(function() {
        var iframe_url = jQuery(this).attr('src');
        if (iframe_url.indexOf("youtube") >= 0) {
            var new_yt_url = iframe_url + "?wmode=transparent";
            jQuery(this).attr('src', new_yt_url);
        }
    });

// 1.40 Add body class if ipad
    function isiPad(){ return ( (navigator.userAgent.match(/iPad/i) != null) ); }
    if (isiPad()) {
        jQuery('body').addClass('ipad_resp');
        //jQuery('meta[name=viewport]').attr('initial-scale', '1.0').attr('minimum-scale', '1.0').attr('maximum-scale', '1.0');
        //jQuery('meta[name=viewport]').remove();
    }

    jQuery("#case_study_filter .option-list input[type='checkbox']").change(function(){
        jQuery("#case_study_filter").submit();
    });

// 1.41 Add 'Course finder' link into breadcrumbs on Course Information Pages
//course_breadcrumbs();


// 1.42 Events calendar - change links to act as fb filter
    if (jQuery('#calendarTable').length > 0 ) { checkCalendar(); }

    jQuery(document).on({
        click: function (event) {
            event.preventDefault();
            var url_ = jQuery(this).attr('href');
            jQuery.ajax({ url: url_, cache: false }).done(function(data) {
                jQuery('#events-mini-calendar').html(data);
                checkCalendar();
            });
        }
    }, '.calendarNavLink');

// 1.43 Get in touch - validation
    jQuery('#sq_accessible_validation_link').click(function(){
        if ( jQuery('#sq_security_key').is(':visible') ) {
            jQuery('#sq_regen_captcha').hide();
        } else {
            jQuery('#sq_regen_captcha').show();
        }
    });

// 1.44 Search query + lhs filters - correct parameters

// Course finder & News finder
    if (jQuery('course_finder_form').length > 0) {
        jQuery(".side_filter_box input").each(function(){
            if (jQuery(this).is(':checked') ) {
                var input_add = "<input type='hidden' value='"+jQuery(this).val()+"'name='"+jQuery(this).attr('name')+"' />"; }
            jQuery('course_finder_form').after().prepend(input_add);
        });
    }


// People finder
    if (jQuery('people_finder_form').length > 0) {
        jQuery(".side_filter_box input").each(function(){
            if (jQuery(this).is(':checked') ) {
                var input_add = "<input type='hidden' value='"+jQuery(this).val()+"'name='"+jQuery(this).attr('name')+"' />"; }
            jQuery('people_finder_form').after().prepend(input_add);
        });
    }

// Events finder
    if (jQuery('form #find-event').length > 0) {
        jQuery(".side_filter_box input").each(function(){
            if (jQuery(this).is(':checked') ) {
                var input_add = "<input type='hidden' value='"+jQuery(this).val()+"'name='"+jQuery(this).attr('name')+"' />"; }
            jQuery('form #find-event').parent().prepend(input_add);
        });

        if (jQuery('#calendarTable').length > 0 ) {
            var regexS = "[\\?&]" + "SQ_CALENDAR_DATE" + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(location.href);
            if (results !== null) {
                var input_add = "<input type='hidden' value='"+results[1]+"' name='SQ_CALENDAR_DATE' />";
                jQuery('form #find-event').parent().append(input_add);
            }
        }
    }

//1.45 remove 'most_recent' class from <li> on news finder and case studies finder page if some query was detected in url
//    remove_class_if_query('#news_listing li', 'most_recent');
    if (document.location.href.indexOf("?") != -1) {
        jQuery('#news_listing li').removeClass('most_recent');
        if ((document.location.href.indexOf("&start_rank=1") >= 0) && (document.location.href.indexOf("&start_rank=11") == -1)) {
          jQuery('#news_listing li:first').addClass('most_recent');
        }
    }

// 1.46 home page - show end date of event if not equal to start date on open days tab
    jQuery('.latest_news_item_date').each(function(){
        if (jQuery(this).find('.home_page_open_days_end_date').text() !== jQuery(this).find('.home_page_open_days_start_date').text()) {
            jQuery(this).find('span').each(function(){
                jQuery(this).removeClass('hidden');
            });
        }
    });

// 1.47 site wide search page - add to main form inputs informing about checked filters
    if (jQuery('#site_wide_search_main_form').length) {
        var tmp_add_inputs_html = '';

        jQuery('#site_wide_search_filter input[name="clive"]').each(function(){
            if (jQuery(this).prop('checked')) {
                tmp_add_inputs_html += '<input id="' + 'new_' + jQuery(this).attr('id') + '" type="hidden" value="' + jQuery(this).val() + '" name="clive">';
            }
        });

        if (tmp_add_inputs_html !== '') {
            jQuery('#site_wide_search_main_form fieldset').append(tmp_add_inputs_html);
        }
    }

//  1.49 remove border from the last contact information box (css cosmetic fix for browsers that do not support :last-of-type
    jQuery('#main_content_right_column .course_enquiries:last').addClass('last');

// 1.50 form-standard behaviour
    if ( jQuery('.form-standard .no_style_list input[type="radio"]').length ) {
        jQuery('.form-standard .no_style_list input[type="radio"]').parents('.no_style_list').each(function(){
            var obj = jQuery(this);

            obj.find('input[type="radio"]:checked').parent().find('label').addClass('active');

            jQuery(this).find('label').click(function(){
                obj.find('label').removeClass('active');
                jQuery(this).addClass('active');
            });
        });
    }

//1.51 Javascript to enable lightbox
    //initialise lightbox if they exist
    if(jQuery('.lightbox').length > 0) {
        jQuery('.lightbox').each(function() {
            jQuery(this).colorbox({
                iframe:true,
                innerWidth:parseInt(jQuery(this).attr('data-width')),
                innerHeight:parseInt(jQuery(this).attr('data-height'))
            });
        });
    }


// 1.52 Course Finder - Ajax
// in point 1.16 - jQuery(document).on("click", '.accordion-toggle' function() {... was changed to: jQuery(document).on("click", '.accordion-toggle' function() {...
if (GLOBALS.url["funnelback_rest_course_finder"] && jQuery('body').hasClass('course_finder')) {
    //Check if a hash exists
    if(location.hash !== "") {
        var course_finder_results_url = GLOBALS.url["funnelback_rest_course_finder"],
            error_message_html = '<div class="ajax-loader-full-screen-message"><p>Could not load the search results. Please try again later.</p></div>';
        jQuery('body').addClass('in_progress');
        jQuery('body').prepend('<div class="ajax-loader-full-screen"></div>');
        var hash = location.hash;
        hash = hash.split('#').pop();
        params = '?' + hash;
        tmp_course_finder_results_url = course_finder_results_url + params;
        jQuery.ajax({
            type: "GET",
            dataType: "html",
            url: tmp_course_finder_results_url,
            success: function(data){
                jQuery('#main_content_main_column .row').replaceWith(data);
            },
            error: function (jqXHR, status, errorThrown) {
                jQuery('.ajax-loader-full-screen').append(error_message_html);
            },
            complete: function() {
                jQuery('body').removeClass('in_progress');
                markActiveLetter(params);
                jQuery(".checkbox_filters_list input:checked").siblings("label").addClass("checkbox_checked");
                jQuery(".checkbox_filters_list input:checked").parents("li").find("label").addClass("label-checked");
                courseComparisonInit();

                jQuery("#course_finder_search_input, #course_finder_search_input_mobile").fbcompletion({
                    'enabled'    : 'enabled',
                    'collection' : 'lsbu-courses',
                    'program'    : '//lsbu.funnelback.co.uk/s/suggest.json',
                    'format'     : 'extended',
                    'alpha'      : '.5',
                    'show'       : '5',
                    'sort'       : '0', 
                    'length'     : '3',
                    'delay'      : '500',
                    'profile'    : '_default'
                });

                jQuery('.ajax-loader-full-screen').fadeOut('slow', function(){
                    jQuery(this).remove();
                });

                accordion.init();
                srollToMainContent();
            }
        });
    }
    jQuery(document).on('change', ".course_finder .lhs_accordion input[type='checkbox']", function(){
        var course_finder_results_url = GLOBALS.url["funnelback_rest_course_finder"],
            error_message_html = '<div class="ajax-loader-full-screen-message"><p>Could not load the search results. Please try again later.</p></div>';

        if (jQuery('body').hasClass('in_progress')) {
            return;
        }
        else {
            var hash = getParamsFromFilters()
            var params = '?' + hash,
                tmp_course_finder_results_url = '';

            jQuery('body').addClass('in_progress');
            jQuery('body').prepend('<div class="ajax-loader-full-screen"></div>');

            tmp_course_finder_results_url = course_finder_results_url + params;

            //add query from form - with checking if this is a mobile or desktop version
            if (jQuery('#course_finder_search_input_mobile').is(':visible')) {
                if (jQuery('#course_finder_search_input_mobile').val()) {
                    var temp = '&query=' + jQuery('#course_finder_search_input_mobile').val().replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F')
                    hash += temp;
                    tmp_course_finder_results_url += temp;
                }
            }
            else {
                if (jQuery('#course_finder_search_input').val()) {
                    var temp = 'query=' + jQuery('#course_finder_search_input').val().replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F');
                    hash += temp;
                    tmp_course_finder_results_url += temp;
                }
            }

            jQuery.ajax({
                type: "GET",
                dataType: "html",
                url: tmp_course_finder_results_url,
                success: function(data){
                    jQuery('#main_content_main_column .row').replaceWith(data);
                },
                error: function (jqXHR, status, errorThrown) {
                    jQuery('.ajax-loader-full-screen').append(error_message_html);
                },
                complete: function() {
                    jQuery('body').removeClass('in_progress');
                    markActiveLetter(params);
                    jQuery(".checkbox_filters_list input:checked").siblings("label").addClass("checkbox_checked label-checked");
jQuery(".checkbox_filters_list input:checked").parents("li").find("label").addClass("label-checked");
                    courseComparisonInit();
                    changeCourseHash(hash);

                    jQuery("#course_finder_search_input, #course_finder_search_input_mobile").fbcompletion({
                        'enabled'    : 'enabled',
                        'collection' : 'lsbu-courses',
                        'program'    : '//lsbu.funnelback.co.uk/s/suggest.json',
                        'format'     : 'simple',
                        'alpha'      : '.5',
                        'show'       : '5',
                        'sort'       : '0', 
                        'length'     : '3',
                        'delay'      : '500',
                        'profile'    : '_default'
                    });

                    jQuery('.ajax-loader-full-screen').fadeOut('slow', function(){
                        jQuery(this).remove();
                    });

                    accordion.init();
                    srollToMainContent();
                }
            });
        }
    });
 jQuery(document).on('click', ".course_finder .spellingSuggestionFB", function(event) {
     var course_finder_results_url = GLOBALS.url["funnelback_rest_course_finder"],
         error_message_html = '<div class="ajax-loader-full-screen-message"><p>Could not load the search results. Please try again later.</p></div>';
     if (jQuery('body').hasClass('in_progress')) {
         return;
     } else {
         event.preventDefault();
         var params = '',
             tmp_course_finder_results_url = '';
         jQuery('body').addClass('in_progress');
         jQuery('body').prepend('<div class="ajax-loader-full-screen"></div>');
         params += "query="+jQuery(this).find("span").text();
         params = params.replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F');
         var hash = params;
         params = '?' + params;
         tmp_course_finder_results_url = course_finder_results_url + params;
         jQuery.ajax({
             type: "GET",
             dataType: "html",
             url: tmp_course_finder_results_url,
             success: function(data) {
                 jQuery('#main_content_main_column .row').replaceWith(data);
             },
             error: function(jqXHR, status, errorThrown) {
                 jQuery('.ajax-loader-full-screen').append(error_message_html);
             },
             complete: function() {
                 jQuery('body').removeClass('in_progress');
                 markActiveLetter(params);
                 jQuery(".checkbox_filters_list input:checked").siblings("label").addClass("checkbox_checked");
                 jQuery(".checkbox_filters_list input:checked").parents("li").find("label").addClass("label-checked");
                 courseComparisonInit();
                 changeCourseHash(hash);
                 jQuery("#course_finder_search_input, #course_finder_search_input_mobile").fbcompletion({
                     'enabled': 'enabled',
                     'collection': 'lsbu-courses',
                     'program': '//lsbu.funnelback.co.uk/s/suggest.json',
                     'format': 'simple',
                     'alpha': '.5',
                     'show': '5',
                     'sort': '0',
                     'length': '3',
                     'delay': '500',
                     'profile': '_default'
                 });
                 jQuery('.ajax-loader-full-screen').fadeOut('slow', function() {
                     jQuery(this).remove();
                 });
                 accordion.init();
                 srollToMainContent();
             }
         });
     }
 });
    jQuery(document).on('click', ".course_finder #course_finder_search_submit, .course_finder .course_finder_search_submit", function(e){
        e.preventDefault();
        
        var course_finder_results_url = GLOBALS.url["funnelback_rest_course_finder"],
            error_message_html = '<div class="ajax-loader-full-screen-message"><p>Could not load the search results. Please try again later.</p></div>';

        if (jQuery('body').hasClass('in_progress')) {
            return;
        }
        else {
            var hash = getParamsFromFilters();
            var params = '?' + hash,
                tmp_course_finder_results_url = '';

            jQuery('body').addClass('in_progress');
            jQuery('body').prepend('<div class="ajax-loader-full-screen"></div>');

            tmp_course_finder_results_url = course_finder_results_url + params;

            //add query from form - with checking if this is a mobile or desktop version
            if (jQuery('#course_finder_search_input_mobile').is(':visible')) {
                if (jQuery('#course_finder_search_input_mobile').val()) {
                    var temp = '&query=' + jQuery('#course_finder_search_input_mobile').val().replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F');
                    hash += temp;
                    tmp_course_finder_results_url += temp;
                }
            }
            else {
                if (jQuery('#course_finder_search_input').val()) {
                    var temp = 'query=' + jQuery('#course_finder_search_input').val().replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F');
                    hash += temp;
                    tmp_course_finder_results_url += temp;
                }
            }

            jQuery.ajax({
                type: "GET",
                dataType: "html",
                url: tmp_course_finder_results_url,
                success: function(data){
                    jQuery('#main_content_main_column .row').replaceWith(data);
                },
                error: function (jqXHR, status, errorThrown) {
                    jQuery('.ajax-loader-full-screen').append(error_message_html);
                },
                complete: function() {
                    jQuery('body').removeClass('in_progress');
                    markActiveLetter(params);
                    jQuery(".checkbox_filters_list input:checked").siblings("label").addClass("checkbox_checked");
                    jQuery(".checkbox_filters_list input:checked").parents("li").find("label").addClass("label-checked");
                    courseComparisonInit();
                    changeCourseHash(hash);

                    jQuery("#course_finder_search_input, #course_finder_search_input_mobile").fbcompletion({
                        'enabled'    : 'enabled',
                        'collection' : 'lsbu-courses',
                        'program'    : '//lsbu.funnelback.co.uk/s/suggest.json',
                        'format'     : 'simple',
                        'alpha'      : '.5',
                        'show'       : '5',
                        'sort'       : '0', 
                        'length'     : '3',
                        'delay'      : '500',
                        'profile'    : '_default'
                    });

                    jQuery('.ajax-loader-full-screen').fadeOut('slow', function(){
                        jQuery(this).remove();
                    });

                    accordion.init();
                    srollToMainContent();
                }
            });
        }
    });

    jQuery(document).on('click', ".course_finder .pagination a, .course_finder .az_pagination a", function(event){
        var course_finder_results_url = GLOBALS.url["funnelback_rest_course_finder"],
            error_message_html = '<div class="ajax-loader-full-screen-message"><p>Could not load the search results. Please try again later.</p></div>';

        if (jQuery('body').hasClass('in_progress')) {
            return;
        }
        else {
            event.preventDefault();

            var params = '?',
                tmp_course_finder_results_url = '';

            jQuery('body').addClass('in_progress');
            jQuery('body').prepend('<div class="ajax-loader-full-screen"></div>');
            params += jQuery(this).attr('href').split('?').pop();
            params = params.replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F');
            var hash = params;
            tmp_course_finder_results_url = course_finder_results_url + params;

            jQuery.ajax({
                type: "GET",
                dataType: "html",
                url: tmp_course_finder_results_url,
                success: function(data){
                    jQuery('#main_content_main_column .row').replaceWith(data);
                },
                error: function (jqXHR, status, errorThrown) {
                    jQuery('.ajax-loader-full-screen').append(error_message_html);
                },
                complete: function() {
                    jQuery('body').removeClass('in_progress');
                    markActiveLetter(params);
                    jQuery(".checkbox_filters_list input:checked").siblings("label").addClass("checkbox_checked");
                    jQuery(".checkbox_filters_list input:checked").parents("li").find("label").addClass("label-checked");
                    courseComparisonInit();
                    changeCourseHash(hash);

                    jQuery("#course_finder_search_input, #course_finder_search_input_mobile").fbcompletion({
                        'enabled'    : 'enabled',
                        'collection' : 'lsbu-courses',
                        'program'    : '//lsbu.funnelback.co.uk/s/suggest.json',
                        'format'     : 'simple',
                        'alpha'      : '.5',
                        'show'       : '5',
                        'sort'       : '0', 
                        'length'     : '3',
                        'delay'      : '500',
                        'profile'    : '_default'
                    });

                    jQuery('.ajax-loader-full-screen').fadeOut('slow', function(){
                        jQuery(this).remove();
                    });

                    accordion.init();
                    srollToMainContent();
                }
            });
        }
    });
}



});
// end document.ready()


// 2.1 response function for #hidden_form
function hidden_form_showResponse(responseText, statusText, xhr, $form, new_options)  {
    responseText;

    var hidden_form_options = {
        target: '#hidden_form', // target element(s) to be updated with server response
        success: hidden_form_showResponse,  // post-submit callback
        url: jQuery('#hidden_form #current_form_url').val()
    };

    jQuery('#sq_regen_captcha a').trigger('click');

    jQuery('#hidden_form').find('form').ajaxForm(hidden_form_options);
}

// 2.2 campus map initialisation
function campus_map_init(map_var, map_id, map_options, map_markersArray, map_infoWindow) {
    map_var = new google.maps.Map(document.getElementById(map_id),
        map_options);
    if (map_markersArray) {
        for (i in map_markersArray) {
            map_markersArray[i].setMap(map_var);

            google.maps.event.addListener(map_markersArray[i], 'click', function() {
                map_infoWindow.open(map_var, this);
            });
        }
    }
}

// 2.3 function getParam - get parameter from 'source' by 'name'
function getParam(source, name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( source );
    if( results === null ) {
        return null;
    }
    else {
        return results[1];
    }
}

// 2.4 function setGetParameter - set parameter in url
function setGetParameter(paramUrl, paramName, paramValue)
{
    var url = paramUrl;
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName)).substring(url.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
        if (url.indexOf("?") < 0) {
            url += "?" + paramName + "=" + paramValue;
        }
        else {
            url += "&" + paramName + "=" + paramValue;
        }
    }
    return url;
}

// 2.5 function removeVariableFromURL - remove parameter from url
function removeVariableFromURL(url_string, variable_name) {
    var URL = String(url_string);
    var regex = new RegExp( "\\?" + variable_name + "=[^&]*&?", "gi");
    URL = URL.replace(regex,'?');
    regex = new RegExp( "\\&" + variable_name + "=[^&]*&?", "gi");
    URL = URL.replace(regex,'&');
    URL = URL.replace(/(\?|&)$/,'');
    regex = null;
    return URL;
}

// 2.6 campus map initialisation;
//    vLocationsArray - reference to array of locations (taken from json)
//    vIconUrl - url of icon image
//    vMapHolderId - id of an allement where the map will be initialised
//    vMapCenter - the center point in the map (type of google.maps.LatLng)
//    vFilterHolderId - the id of element containing filters
function campusMapInit(vLocationsArray, vIconUrl, vMapHolderId, vMapCenter, vFilterHolderId) {
    var tmp_MarkersArray = [],
        tmp_MarkersArrayLength = 0,
        vLocationsArrayLength = vLocationsArray.length,
        tmp_content_string = '',
        tmp_map_options = {
            center: vMapCenter,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            }
        },
        tmp_map = new google.maps.Map(document.getElementById(vMapHolderId), tmp_map_options),
        tmp_infowindow = new google.maps.InfoWindow({});

    for (var i = 0; i < vLocationsArrayLength; i ++) {
        if (vLocationsArray[i]['Lat'] && vLocationsArray[i]['Lng']) {
            var tmp_marker = new google.maps.Marker({});
            tmp_content_string = '' +
                '<div class="info_window">' +
                '<div class="info_window_header"><span>' + vLocationsArray[i]['asset_name'] + '</span></div>' +
                '<div class="info_window_body">';
            if (vLocationsArray[i]['image_url']) {
                tmp_content_string += '' +
                    '<img src="' + vLocationsArray[i]['image_url'] + '" alt="LSBU">';
            }
            tmp_content_string += '' +
                '<p>' + vLocationsArray[i]['short_description'] + '</p>' +
                '<div class="clearfix"></div>';
            if (vLocationsArray[i]['facilities']) {
                tmp_content_string += '' +
                    '<div class="info_window_header2"><span>Facilities</span></div>' +
                    '<div class="info_window_facilities_body">' + vLocationsArray[i]['facilities'] + '</div>' +
                    '</div>';
            }
            tmp_content_string += '' +
                '</div>';
            tmp_marker.setPosition(new google.maps.LatLng(vLocationsArray[i]['Lat'], vLocationsArray[i]['Lng']));
            tmp_marker.setTitle(vLocationsArray[i]['asset_name']);
            tmp_marker.setAnimation(google.maps.Animation.DROP);
            tmp_marker.setMap(tmp_map);
            tmp_marker.setIcon(vIconUrl);
            tmp_marker.marker_id = 'location_' + vLocationsArray[i]['asset_id'];
            tmp_marker.info_content = tmp_content_string;

            google.maps.event.addListener(tmp_marker, 'click', function() {
                tmp_infowindow.setContent(this.info_content);
                tmp_infowindow.open(tmp_map, this);
                jQuery('.info_window').parent().css('overflow', 'hidden');
            });
        }
        tmp_MarkersArray.push(tmp_marker);
    }

    jQuery('#' + vFilterHolderId + ' input[type="checkbox"]').on('change', function(){
        var tmp_marker_id = jQuery(this).attr('id'),
            tmp_MarkersArrayLength = tmp_MarkersArray.length,
            checked_elements = jQuery('#' + vFilterHolderId + ' input[type="checkbox"]:checked').length;

        if (checked_elements < 1) {
            for (var j in tmp_MarkersArray) {
                tmp_MarkersArray[j].setMap(tmp_map);
            }
        }
        else {
            jQuery('#' + vFilterHolderId + ' input[type="checkbox"]').each(function(){
                var tmp_this = jQuery(this),
                    result = jQuery.grep(tmp_MarkersArray, function(e) {
                        return e.marker_id == tmp_this.attr('id');
                    });
                if (jQuery(this).is(':checked')) {
                    if (result[0]) {
                        result[0].setMap(tmp_map);
                    }
                }
                else {
                    if (result[0]) {
                        result[0].setMap(null);
                    }
                }
            });
        }
    });
    return tmp_map;
}

// 2.7 Twitter functionalities
// 2.7.1 hashLink(tweet)
function hashLink(tweet) {
    return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
        return before + '<a class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
    });
}
// 2.7.2 standardLink(tweet)
function standardLink(tweet) {
    return tweet.replace(/\b(((http\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
        var http = m2.match(/w/) ? 'http://' : '';
        return '<a class="twtr-hyperlink" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
    });
}
// 2.7.2.2 standardLinkSecured(tweet)
function standardLinkSecured(tweet) {
    return tweet.replace(/\b(((https\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
        var https = m2.match(/w/) ? 'https://' : '';
        return '<a class="twtr-hyperlink" href="' + https + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
    });
}
// 2.7.3 atLink(tweet)
function atLink(tweet) {
    return tweet.replace(/\B[@]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
        return '<a class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
    });
}

// 2.8 course_breadcrumbs()
function course_breadcrumbs() {
    if (jQuery('body').hasClass('course_information_page')) {
        jQuery('#breadcrumbs span:last').before('<span><a href="' + GLOBALS.url["course_finder"] + '">Course finder</a></span>&nbsp;&nbsp;Â»&nbsp;');
    }
}

// 2.9 remove 'most_recent' class from <li> on news finder and case studies finder page if some query was detected in url
// var_source - the selector showing where the class should be removed from
// var_class - name of class to remove
function remove_class_if_query(var_source, var_class) {
    if (document.location.href.indexOf("?") >= 0) {
        jQuery(var_source).removeClass(var_class);
    }
}

// 2.10 Course finder - mark active letter if selected (based on provided url)
function markActiveLetter(url_string) {
    if (url_string.match('letter=') && jQuery('.az_pagination').length) {
        var letter = null,
            tmp_query = '';

        if (letter = url_string.split('letter=').pop().charAt(0)) {
            tmp_query = ".az_pagination li span:contains('" + letter.toUpperCase() + "')";
            jQuery(tmp_query).parents('li').addClass('active');
        }
    }
}

// 2.11 Course comparison initialisation
function courseComparisonInit() {
    var courses_array = [],
        courses_array_length = 0,
        tmp_name = '',
        courseComparisonDocCookies = {
            getItem: function (sKey) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                        case Number:
                            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                            break;
                        case String:
                            sExpires = "; expires=" + vEnd;
                            break;
                        case Date:
                            sExpires = "; expires=" + vEnd.toUTCString();
                            break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },


            removeItem: function (sKey, sPath, sDomain) {
                if (!sKey || !this.hasItem(sKey)) { return false; }
                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
                return true;
            },
            hasItem: function (sKey) {
                return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            },
            keys: /* optional method: you can safely remove it! */ function () {
                var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
                return aKeys;
            }
        };

    if (courseComparisonDocCookies.hasItem('course_comparison_ids') && courseComparisonDocCookies.getItem('course_comparison_ids')) {
        courses_array = courseComparisonDocCookies.getItem('course_comparison_ids').split('|');
        courses_array_length = courses_array.length;

        for (var i = 0; i < courses_array_length; i++) {
            tmp_name = '#' + courses_array[i];

            if (jQuery(tmp_name).length) {
                jQuery(tmp_name).parent().addClass('active');
                jQuery(tmp_name).prop("checked", true);
            }

            jQuery('#compare_courses_counter span').text(courses_array_length);
        }
    }
}

// 2.12 getParamsFromFilters
function getParamsFromFilters() {
    var params = '',
        tmp_param_value = '';

    if (jQuery(".lhs_accordion").length && jQuery(".lhs_accordion input[type='checkbox']").length) {
        jQuery(".lhs_accordion input[type='checkbox']").each(function(){
            if (jQuery(this).prop('checked')) {
                tmp_param_value = jQuery(this).val();
                tmp_param_value = tmp_param_value.replace(/ /g, '+').replace(/,/g, '%2C').replace(/\//g, '%2F');
                params += jQuery(this).attr('name') + '=' + tmp_param_value + '&';
            }
        });
    }

    return params;
}

// 2.13 srollToMainContent
function srollToMainContent() {
    setTimeout(function(){
      jQuery('html, body').animate({
        scrollTop: jQuery('#main_content_main_column_PL').offset().top
      }, 0);
    }, 500);
}

//2.14 Change Course Finder Hash
function changeCourseHash(hash) {
    var origHash = location.hash;
    var newHash = hash;
    if(origHash !== '#' + hash) {
        location.hash = newHash;
    }
}

// 1.42 Events calendar - change links to act as fb filter
function parseISO8601(dateStringInRange) {
    var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
        date = new Date(NaN), month,
        parts = isoExp.exec(dateStringInRange);

    if(parts) {
        month = +parts[2];
        date.setFullYear(parts[1], month - 1, parts[3]);
        if(month != date.getMonth() + 1) {
            date.setTime(NaN);
        }
    }
    return date;
}

function checkCalendar() {

// unlink days with no events
    jQuery('#calendarTable table td:not(".eventDate"):has("a")').each(function() { jQuery(this).text(jQuery(this).find('a').text()); } );

// change url to act as fb filter
    jQuery('#calendarTable td.eventDate a.dateLink').each(function() {
        var tmp_href_base = location.href,
            tmp_href_base_zero = location.href,
            tmp_href = jQuery(this).attr('href'),
            tmp_date = getParam(tmp_href, 'SQ_CALENDAR_DATE'),
            tmp_meta_O = tmp_date.replace(/-/g, '');

        if (tmp_date) {
            tmp_href_base = tmp_href_base.split('?');
            tmp_href_base_zero = tmp_href_base[0];
            tmp_href_base = tmp_href_base[0];
            tmp_href = tmp_href.split('?');
            tmp_href = tmp_href[0];
            tmp_href_base = tmp_href_base + '?meta_O=' + tmp_meta_O + '&SQ_CALENDAR_DATE=' + tmp_date;
            jQuery(this).attr('href', tmp_href_base);
        }

        var url_current = jQuery(this).attr('href');
        if (location.href == url_current) {
            jQuery(this).parent().addClass('active_cal');
            jQuery(this).attr('href', tmp_href_base_zero);
        }
    });
}


// 3 new menu width adjusting
function adjustNav() {
    jQuery("#main_menu_list > li").css("display", "block").css("float", "left");
    jQuery("#main_menu_list > li > a").css("padding", "9px 0");

    var niwidth = jQuery("#main_menu_list").width();
    var twidth = 0;
    jQuery("#main_menu_list > li").each(function () {
        twidth += jQuery(this).width();
    });
    var diff = niwidth - twidth;
    var newpadding = Math.floor(parseInt(jQuery("#main_menu_list > li > a").css("padding-left")) + diff / 2 / jQuery("#main_menu_list > li").length);
    jQuery("#main_menu_list > li > a").css("padding-left", newpadding).css("padding-right", newpadding);
    niwidth = jQuery("#main_menu_list").width();
    twidth = 0;
    jQuery("#main_menu_list > li").each(function () {
        twidth += jQuery(this).width();
    });
    diff = niwidth - twidth;
    if (diff % 2) {
        diff--;
    }
    for (var i = 0; i < diff / 2 - 1; i++) {
        jQuery("#main_menu_list > li > a:eq(" + i + ")").css("padding-left", newpadding + 1).css("padding-right", newpadding + 1);
    }

}


// 4.1 Campaign Page - form anchor link
var CampaignFormAnchor = {
   anchor: "#campaign-form",
   init: function(){
     if (jQuery("#campaign-form").length > 0){
       var campaignForm = jQuery("#campaign-form").closest("form");
       if (campaignForm.attr("action").indexOf("#") === -1){
         campaignForm.attr("action", campaignForm.attr("action") + CampaignFormAnchor.anchor);
       }
     }
   }
};

// 4.2 Nest additional Form
var nestAdditionalForm = function(dest, source_url) {
  /*
  dest - selector, place where the data from response should be attached
  source_url - url address for ajax request
  */
  if (source_url) {
    var t = new Date().getTime(),
        attrAction = document.location.href;

    if (source_url.indexOf('?') < 0) {
      source_url += '?SQ_DESIGN_NAME=blank&SQ_PAINT_NAME=blank&t=' + t;
    }
    else {
      source_url += '&SQ_DESIGN_NAME=blank&SQ_PAINT_NAME=blank&t=' + t;
    }

    if (dest && jQuery(dest).length) {
      jQuery.ajax({
        type: "GET",
        dataType: "html",
        url: source_url,
        beforeSend: function(data) {
          if (!jQuery('.ajax-loader-fit-wrapper', dest).length) {
            jQuery(dest).html('<div class="ajax-loader-fit-wrapper"><div class="ajax-loader-fit"></div></div>');
          }
        },
        success: function(data){
          jQuery(dest).html(data);
        },
        error: function (jqXHR, status, errorThrown) {
            jQuery('.ajax-loader-fit-wrapper', dest).remove();
        },
        complete: function() {
          jQuery('#sq_regen_captcha a').trigger('click');
        }
      });

      var formObject = jQuery('form', dest),
          formSelector = dest + ' form';

      jQuery(document).on('submit', formSelector, function(e) {
        var self = jQuery(formSelector),
            submitButton = self.find('input[type="submit"]').first();
            serializedData = self.serializeArray();

        serializedData.push({name: submitButton.attr('id'), value: submitButton.val()});

        // Send AJAX
        jQuery.ajax({
            type: 'POST',
            data: serializedData,
            url: self.attr('action'),
            beforeSend: function(data) {
              if (!jQuery('.ajax-loader', dest).length) {
                jQuery(dest).html('<div class="ajax-loader"></div>');
                jQuery('.ajax-loader', dest).show();
              }
            },
            success: function(data)
            {
                jQuery(dest).html(data);
            },
            error: function() {},
            complete: function() {
              jQuery('#sq_regen_captcha a').trigger('click');
            }
        });

        return false;
      });

    }
    else {
      return 0;
    }
  }
  else {
    return 0;
  }
};

jQuery(document).ready(function(){
    nestAdditionalForm('.nested_form_placeholder', jQuery('.nested_form_placeholder').data('nested_form_url'));
    CampaignFormAnchor.init();
jQuery('.social_media_share_page').children('span').removeAttr("displaytext");
});


jQuery(function() {

  if (jQuery(".course_information_page")[0]){
    var r = jQuery('[name="Courses.Entry.Requirements.Summary"]').attr("content");
    var l = jQuery('[name="Courses.Course.level"]').attr("content");
    var w = jQuery('[name="Courses.Name"]').attr("content");
    var a = jQuery('[name="Courses.Course.award"]').attr("content");
    var s = jQuery('[name="School.Global"]').attr("content");
    var d = jQuery('[name="Division.Global"]').attr("content");
    var loc = jQuery('[name="Courses.Location"]').attr("content");
    var sub = jQuery('[name="Courses.Subject"]').attr("content");
    var sum = jQuery('[name="Courses.Summary"]').attr("content");
    var t = jQuery('[name="Courses.Timetable"]').attr("content");
    var utm = jQuery.cookie("lsbu_utm");
    console.log(utm);
    //var u = jQuery(location).attr('href');
    var cookie = jQuery.cookie('ref_page_name', w, { path:'/'});
    var addData = '?webpage=' + w + '&award=' + a + '&school=' + s + '&division=' + d + '&requirements=' + r + '&level=' + l + '&location=' + loc + '&websubject=' + sub + '&summary=' + sum + '&timetable=' + t + '&' + utm

    jQuery('#gecko-btn').attr('data-target', addData);
      var search = window.location.search;
      var data = jQuery('#gecko-btn').data("target");
      jQuery("#gecko-btn").attr("href", jQuery("#gecko-btn").attr("href")+search +data);

  } else {


    jQuery(function() {
        if (jQuery("#gecko")[0]){
          var search = window.location.search;
          var utm = jQuery.cookie("lsbu_utm");
        console.log(utm);
        jQuery("#gecko").attr("src", jQuery("#gecko").attr("src")+search);
        } else {
      }
    });

    jQuery(function() {
    if (window.location.href.indexOf("undergraduate") > -1) {
          var search = window.location.search;
          var data = '?level=Undergraduate'
          console.log('testing')
          jQuery("#gecko-btn").attr("href", jQuery("#gecko-btn").attr("href")+search +data);
    }
    });

    jQuery(function() {
    if (window.location.href.indexOf("postgraduate") > -1) {
          var search = window.location.search;
          var data = '?level=Postgraduate'
          console.log('testing')
          jQuery("#gecko-btn").attr("href", jQuery("#gecko-btn").attr("href")+search +data);
    }
    });
  }
});

jQuery(function() {
    if (window.location.href.indexOf("?") > 0) {
        var queryString = window.location.search.replace('?', '');;
        console.log(queryString);

        var utmcookie = jQuery.cookie('lsbu_utm', queryString, { path:'/'});
    }
});

var timetable = jQuery('#tab_timetable');
timetable.addClass(timetable.height() > 40 ? "tall" : "no_print");

var _prum = [['id', '53301554abe53d4a10b4f868'],
             ['mark', 'firstbyte', (new Date()).getTime()]];
(function() {
    var s = document.getElementsByTagName('script')[0]
      , p = document.createElement('script');
    p.async = 'async';
    p.src = '//rum-static.pingdom.net/prum.min.js';
    s.parentNode.insertBefore(p, s);
})();

//4.3 if the height of the content is lower than the viewport hide the back to top button
jQuery(function() {
  var div = jQuery("#main_content_main_column").height();
  var win = jQuery(window).height();

  if (div < win ) {
      jQuery("#top_of_page_link").css('display', 'none');
  }
});

//4.4 removing Href from the main slide
//setTimeout(function(){
//  jQuery("a.home_banner_image_title").removeAttr("href");
//}, 2000);

//4.5 temporary removing href from Whats on date as it should not be there
jQuery(function ()
{
    if (jQuery('body.whats_on_page').length > 0)
    {
        jQuery( ".bar-mini, .date" ).parents().removeAttr('href').css({ 'color' : '#231f20', 'cursor' : 'default'});
    }
});

//4.6 Equalising feeds height

jQuery(document).ready(function() {
  if (jQuery('.home_page').length > 0)  {
    jQuery('.home_page .news_story').each(function(){
         var columns = jQuery('.span6',this);
         var maxHeight = Math.max.apply(Math, columns.map(function(){
             return jQuery(this).height();
         }).get());
         jQuery (columns.height(maxHeight));
    });
  }
});

//4.7 Switch tab from the url on click from content
window.addEventListener("hashchange",function() {
    var idFromHash = window.location.hash;
    var element = jQuery('li a[href="' + idFromHash + '"]');
    if (element.length) {
      jQuery('.nav-tabs li, .tab-pane').removeClass('active');
      element.parent().addClass('active');
      jQuery(idFromHash).addClass('active');
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
}, false);