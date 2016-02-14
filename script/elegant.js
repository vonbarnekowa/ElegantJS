(function($){
    $.fn.elegant = function(opt){
        var options = $.extend(true, {
            
            //config
            newTab: true,
            
            //layout
            background: 'black',
            color: 'green',
            crossSize: 5,
            iconSize: 1,
            
            //social
            facebook: {
                id: null,
                faIcon: 'facebook',
                color: '',
                url: 'https://www.facebook.com/',
                target: null},
                
            twitter: {
                id: null,
                faIcon: 'twitter',
                color: '',
                url: 'https://twitter.com/',
                target: null},
                
            linkedin: {
                id: null,
                faIcon: 'linkedin',
                color: '',
                url: 'https://www.linkedin.com/in/',
                target: null},
                
            github: {
                id: null,
                faIcon: 'github',
                color: '',
                url: 'https://github.com/',
                target: null},
                
            vk: {
                id: null,
                faIcon: 'vk',
                color: '',
                url: 'https://vk.com/',
                target: null},
                
            mail: {
                id: null,
                faIcon: 'envelope',
                color: '',
                url: 'mailto:',
                target: null},
                
            website: {
                id: null,
                faIcon: 'link',
                color: '',
                url: '',
                target: null},
                
            instagram: {
                id: null,
                faIcon: 'instagram',
                color: '',
                url: 'https://instagram.com/',
                target: null},
                
            flickr: {
                id: null,
                faIcon: 'flickr',
                color: '',
                url: 'https://www.flickr.com/photos/',
                target: null},
            googleplus: {
                id: null,
                faIcon: 'google-plus',
                color: '',
                url: 'https://plus.google.com/',
                target: null},
            
            youtube: {
                id: null,
                faIcon: 'youtube-play',
                color: '',
                url: 'https://youtube.com/',
                target: null}
            
        }, opt);
        
        var socials = ['facebook', 'twitter', 'linkedin', 'github', 'vk', 'mail', 'website', 'instagram', 'flickr', 'googleplus', 'youtube'];        
        
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
                    list += '<li id="elg-network elg-' + socials[i] + '">' +
                            '    <a href="https://www.facebook.com/' + options[socials[i]].id + '"' + target + '>' +
                            '        <i class="fa fa-' + options[socials[i]].faIcon + ' fa-' + options.iconSize + 'x"></i>' +
                            '    </a>' +
                            '</li>';
                }
            }
            
            return list;
        }
        
        var elegantBody = 
            '<div id="elg-parent" style="color: ' + options.color + ';">' +
            '    <div id="elg-model">' +
            '        <span id="elg-cross"><i class="fa fa-times fa-' + options.crossSize + 'x"></i></span>' +
            '        <div id="elg-social">' +
            '            <ul id="elg-list">' +
            '                ' + getNetworks() +
            '            </ul>' +
            '        </div>' +
            '    </div>' +
            '</div>';
            
        this.parent().append(elegantBody);
    };
})(jQuery);
