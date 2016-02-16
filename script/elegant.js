(function($) {
    $.fn.elegant = function(opt) {
        var options = $.extend(true, {
            
            //animations
            showEffect: "fade",
            showOptions: [],
            showDuration: 400,
            showComplete: null,
            hideEffect: "fade",
            hideOptions: [],
            hideDuration: 400,
            hideComplete: null,
                        
            //config
            newTab: true,
            clickNextToClose: true,
            showCross: true,
            
            //layout
            background: "black",
            color: "white",
            crossSize: 2,
            iconSize: 2,
            
            //social
            facebook: {
                id: null,
                faIcon: "facebook",
                color: "#3b5998",
                url: "https://www.facebook.com/",
                target: null},
                
            twitter: {
                id: null,
                faIcon: "twitter",
                color: "#00aced",
                url: "https://twitter.com/",
                target: null},
                
            linkedin: {
                id: null,
                faIcon: "linkedin",
                color: "#007bb6",
                url: "https://www.linkedin.com/in/",
                target: null},
                
            github: {
                id: null,
                faIcon: "github",
                color: "#9C7A5B",
                url: "https://github.com/",
                target: null},
                
            vk: {
                id: null,
                faIcon: "vk",
                color: "#45668e",
                url: "https://vk.com/",
                target: null},
                
            mail: {
                id: null,
                faIcon: "envelope",
                color: "#52941E",
                url: "mailto:",
                target: null},
                
            website: {
                id: null,
                faIcon: "link",
                color: "#002cff",
                url: "",
                target: null},
                
            instagram: {
                id: null,
                faIcon: "instagram",
                color: "#517fa4",
                url: "https://instagram.com/",
                target: null},
                
            flickr: {
                id: null,
                faIcon: "flickr",
                color: "#ff0084",
                url: "https://www.flickr.com/photos/",
                target: null},
                
            googleplus: {
                id: null,
                faIcon: "google-plus",
                color: "#dd4b39",
                url: "https://plus.google.com/",
                target: null},
            
            youtube: {
                id: null,
                faIcon: "youtube-play",
                color: "#bb0000",
                url: "https://youtube.com/",
                target: null},
            
            pinterest: {
                id: null,
                faIcon: "pinterest-p",
                color: "#bd081c",
                url: "https://www.pinterest.com/",
                target: null},
                
            skype: {
                id: null,
                faIcon: "skype",
                color: "#12A5F4",
                url: "skype:",
                target: null},
                
            jsfindle: {
                id: null,
                faIcon: "jsfindle",
                color: "#efefe7",
                url: "https://jsfindle.net/",
                target: null},
            
            git: {
                id: null,
                faIcon: "git",
                color: "#efefe7",
                url: "",
                target: null},
                
            vine: {
                id: null,
                faIcon: "vine",
                color: "#02a379",
                url: "https://vine.co/v/",
                target: null},
            
            tel: {
                id: null,
                faIcon: "phone",
                color: "#008080",
                url: "tel:",
                target: null},
            
            vimeo: {
                id: null,
                faIcon: "vimeo",
                color: "#44bbff",
                url: "https://vimeo.com/",
                target: null},
            
            wordpress: {
                id: null,
                faIcon: "wordpress",
                color: "#999999",
                url: "",
                target: null},
            
            soundcloud: {
                id: null,
                faIcon: "soundcloud",
                color: "#ff5500",
                url: "https://soundcloud.com/",
                target: null},
            
            steam: {
                id: null,
                faIcon: "steam",
                color: "#171a21",
                url: "steam:",
                target: null},
            
            codepen: {
                id: null,
                faIcon: "codepen",
                color: "#000000",
                url: "http://codepen.io/",
                target: null},
            
            bitcoin: {
                id: null,
                faIcon: "btc",
                color: "#f7931a",
                url: "bitcoin:",
                target: null},
            
            paypal: {
                id: null,
                faIcon: "paypal",
                color: "#053385",
                url: "https://paypal.me/",
                target: null},
            
            joomla: {
                id: null,
                faIcon: "joomla",
                color: "#7cbf4b",
                url: "",
                target: null},
            
            behance: {
                id: null,
                faIcon: "behance",
                color: "#0075ff",
                url: "https://www.behance.net/",
                target: null},
                
            bitbucket: {
                id: null,
                faIcon: "bitbucket",
                color: "#205081",
                url: "https://bitbucket.org/",
                target: null},
                
            spotify: {
                id: null,
                faIcon: "spotify",
                color: "#2ebd59",
                url: "https://open.spotify.com/user/",
                target: null},
                
            trello: {
                id: null,
                faIcon: "trello",
                color: "#026aa7",
                url: "https://trello.com/",
                target: null},
            
            twitch: {
                id: null,
                faIcon: "twitch",
                color: "#6441a5",
                url: "http://www.twitch.tv/",
                target: null},
            
        }, opt);
        
        function getNetworks() {
            var list = "";
            
            for (var i = 0; i < socials.length; i++) {
                if (options[socials[i]].id != null) {
                    var target = null;
                    
                    if (options.newTab == true) {
                        target = ' target="_blank"';
                    } else if (option[socials[i]].target != null) {
                        target = ' target="' + target + '"';
                    }
                    
                    list += 
                        '<li class="elg-network" id="elg-' + socials[i] + '">' +
                        '    <a class="elg-network-link" href="' + options[socials[i]].url + options[socials[i]].id + '"' + target + ' style="color: ' + options.color + '" onMouseOver="this.style.backgroundColor=\'' + options[socials[i]].color + '\'" onMouseOut="this.style.backgroundColor=\'transparent\'">' +
                        '        <i class="fa fa-' + options[socials[i]].faIcon + ' fa-' + options.iconSize + 'x"></i>' +
                        '    </a>' +
                        '</li>';
                }
            }
            
            return list;
        }
        
        function getElegant() {
            var cross = null;
            if (options.showCross) {
                cross = '<span id="elg-cross"><i class="fa fa-times fa-' + options.crossSize + 'x" style="color: ' + options.color + ';"></i></span>';    
            }
            
            var elegantBody = 
                '<div id="elg-parent" class="elg-fa-size-' + options.iconSize + '" style="display: none; background-color: ' + options.background + ';">' +
                '    <div id="elg-model">' +
                '        ' + cross +
                '        <div id="elg-social">' +
                '            <ul id="elg-list">' +
                '                ' + getNetworks() +
                '            </ul>' +
                '        </div>' +
                '    </div>' +
                '</div>';
            
            return elegantBody;
        }
                
        var socials = ["facebook", "twitter", "linkedin", "github", "vk", "mail", "website", "instagram", "flickr", "googleplus", "youtube", "pinterest", "skype", "jsfindle", "git", "vine", "tel", "vimeo", "wordpress", "soundcloud", "steam", "codepen", "bitcoin", "paypal", "joomla", "behance", "bitbucket", "spotify", "trello", "twitch"];
        this.parent().append(getElegant());

        //event listener
        if (options.clickNextToClose) {
            $("#elg-parent").click(function(){
                if ($(".elg-network-link:hover").length == 0) {
                    $("#elg-parent").hide(options.hideEffect, options.hideOptions, options.hideDuration, options.hideComplete);
                }
            });
        }
        
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                $("#elg-parent").hide(options.hideEffect, options.hideOptions, options.hideDuration, options.hideComplete);
            }
        });
        
        if (options.showCross) {
            $("#elg-cross").click(function() {
                if ($("#elg-parent").css("display") == "block") {
                    $("#elg-parent").hide(options.hideEffect, options.hideOptions, options.hideDuration, options.hideComplete);
                }
            });
        }
        
        $(this).click(function() {
            if ($("#elg-parent").css("display") == "none") {
                $("#elg-parent").show(options.showEffect, options.showOptions, options.showDuration, options.showComplete);
            }
        });
    };
})(jQuery);
