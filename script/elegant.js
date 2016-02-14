(function($) {
    $.fn.elegant = function(opt) {
        var options = $.extend(true, {
            
            //animations
            showEffect: 'fade',
            showOptions: [],
            showDuration: 400,
            showComplete: null,
            hideEffect: 'fade',
            hideOptions: [],
            hideDuration: 400,
            hideComplete: null,
                        
            //config
            newTab: true,
            clickNextToClose: false,
            showCross: true,
            
            //layout
            background: 'black',
            color: 'white',
            crossSize: 5,
            iconSize: 2,
            
            //social
            facebook: {
                id: null,
                faIcon: 'facebook',
                color: '#3b5998',
                url: 'https://www.facebook.com/',
                target: null},
                
            twitter: {
                id: null,
                faIcon: 'twitter',
                color: '#00aced',
                url: 'https://twitter.com/',
                target: null},
                
            linkedin: {
                id: null,
                faIcon: 'linkedin',
                color: '#007bb6',
                url: 'https://www.linkedin.com/in/',
                target: null},
                
            github: {
                id: null,
                faIcon: 'github',
                color: '#9C7A5B',
                url: 'https://github.com/',
                target: null},
                
            vk: {
                id: null,
                faIcon: 'vk',
                color: '#45668e',
                url: 'https://vk.com/',
                target: null},
                
            mail: {
                id: null,
                faIcon: 'envelope',
                color: '#52941E',
                url: 'mailto:',
                target: null},
                
            website: {
                id: null,
                faIcon: 'link',
                color: '#002cff',
                url: '',
                target: null},
                
            instagram: {
                id: null,
                faIcon: 'instagram',
                color: '#517fa4',
                url: 'https://instagram.com/',
                target: null},
                
            flickr: {
                id: null,
                faIcon: 'flickr',
                color: '#ff0084',
                url: 'https://www.flickr.com/photos/',
                target: null},
            googleplus: {
                id: null,
                faIcon: 'google-plus',
                color: '#dd4b39',
                url: 'https://plus.google.com/',
                target: null},
            
            youtube: {
                id: null,
                faIcon: 'youtube-play',
                color: '#bb0000',
                url: 'https://youtube.com/',
                target: null}
            
        }, opt);
        
        function getNetworks() {
            var list = '';
            for (var i = 0; i < socials.length; i++) {
                if(options[socials[i]].id != null) {
                    var target = null;
                    
                    if(options.newTab == true) {
                        target = ' target="_blank"';
                    } else if(option[socials[i]].target != null) {
                        target = ' target="' + target + '"';
                    }
                    
                    list += 
                        '<li class="elg-network" id="elg-' + socials[i] + '">' +
                        '    <a class="elg-network-link" href="https://www.facebook.com/' + options[socials[i]].id + '"' + target + ' style="color: ' + options.color + '" onMouseOver="this.style.backgroundColor=\'' + options[socials[i]].color + '\'" onMouseOut="this.style.backgroundColor=\'transparent\'">' +
                        '        <i class="fa fa-' + options[socials[i]].faIcon + ' fa-' + options.iconSize + 'x"></i>' +
                        '    </a>' +
                        '</li>';
                }
            }
            
            return list;
        }
        
        function getElegant() {
            var cross = null;
            if(options.showCross) {
                cross = '<span id="elg-cross"><i class="fa fa-times fa-' + options.crossSize + 'x" style="color: ' + options.color + ';"></i></span>';    
            }
            
            var elegantBody = 
                '<div id="elg-parent" style="display: none; background-color: ' + options.background + ';">' +
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
                
        var socials = ['facebook', 'twitter', 'linkedin', 'github', 'vk', 'mail', 'website', 'instagram', 'flickr', 'googleplus', 'youtube'];
        this.parent().append(getElegant());

        //event listener
        if(options.clickNextToClose) {
            $('#elg-parent').click(function(){
                if(!$('#elg-list').is(':hover')) {
                    $("#elg-parent").hide(options.hideEffect, options.hideOptions, options.hideDuration, options.hideComplete);
                }
            });
        }
        
        if(options.showCross) {
            $('#elg-cross').click(function() {
                if($('#elg-parent').css('display') == 'block') {
                    $('#elg-parent').hide(options.hideEffect, options.hideOptions, options.hideDuration, options.hideComplete);
                }
            });
        }
        
        $(this).click(function() {
            if($('#elg-parent').css('display') == 'none') {
                $('#elg-parent').show(options.showEffect, options.showOptions, options.showDuration, options.showComplete);
            }
        });
    };
})(jQuery);
