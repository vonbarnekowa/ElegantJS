(function($){
    $.fn.elegant = function(opt){
        var options = $.extend({
            
            //config
            newTab: true,
            
            //layout
            background: 'black',
            color: 'green',
            crossSize: 5,
            iconSize: 1,
            
            //social
            facebook: null,
            twitter: null,
            linkedin: null,
            github: null,
            vk: null,
            mail: null,
            website: null,
            instagram: null,
            flickr: null,
            googleplus: null,
            youtube: null
            
        }, opt);
        

        function getNetworks() {
            var list = "";
            if(options.newTab) {
                var target = 'target="_blank"';
            }
            
            if(options.facebook != null) {
                list += '<li id="elg-network elg-facebook"><a href="https://www.facebook.com/' + options.facebook + '" ' + target + '><i class="fa fa-facebook fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.twitter != null) {
                list += '<li id="elg-network elg-twitter"><a href="https://twitter.com/' + options.twitter + '" ' + target + '><i class="fa fa-twitter fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.linkedin != null) {
                list += '<li id="elg-network elg-linkedin"><a href="https://www.linkedin.com/in/' + options.linkedin + '" ' + target + '><i class="fa fa-linkedin fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.github != null) {
                list += '<li id="elg-network elg-github"><a href="https://github.com/' + options.github + '" ' + target + '><i class="fa fa-github fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.vk != null) {
                list += '<li id="elg-network elg-vk"><a href="https://vk.com/' + options.vk + '" ' + target + '><i class="fa fa-vk fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.mail != null) {
                list += '<li id="elg-network elg-mail"><a href="mailto:' + options.mail + '" ' + target + '><i class="fa fa-envelopegi fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.website != null) {
                list += '<li id="elg-network elg-website"><a href="' + options.website + '" ' + target + '><i class="fa fa-link fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.instagram != null) {
                list += '<li id="elg-network elg-instagram"><a href="https://instagram.com/' + options.instagram + '" ' + target + '><i class="fa fa-instagram fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.flickr != null) {
                list += '<li id="elg-network elg-flickr"><a href="https://www.flickr.com/photos/' + options.flickr + '" ' + target + '><i class="fa fa-flickr fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.googleplus != null) {
                list += '<li id="elg-network elg-googleplus"><a href="https://plus.google.com/' + options.googleplus + '" ' + target + '><i class="fa fa-google-plus fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            if(options.youtube != null) {
                list += '<li id="elg-network elg-youtube"><a href="https://youtube.com/' + options.youtube + '" ' + target + '><i class="fa fa-youtube-play fa-' + options.iconSize + 'x"></i></a></li>';
            }
            
            return list
        }
        
        var elegantBody = 
            '<div id="elg-parent" style="color: ' + options.color + ';">' +
            '    <div id="elg-model">' +
            '        <span id="elg-cross"><i class="fa fa-times fa-' + options.crossSize + 'x"></i></span>' +
            '        <div id="elg-social">' +
            '        ' + getNetworks() +
            '        </div>' +
            '    </div>' +
            '</div>';
        this.parent().append(elegantBody);
    };
})(jQuery);
