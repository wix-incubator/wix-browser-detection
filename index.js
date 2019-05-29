(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.wixBrowserDetection = factory());
}(this, function () { 'use strict';

    /*!
     * Based on Zepto's detect module - https://github.com/madrobby/zepto/blob/master/src/detect.js#files
     * Zepto.js may be freely distributed under the MIT license. See: https://github.com/madrobby/zepto/blob/master/MIT-LICENSE
     *
     * note - MS Edge detection was added here, which Zepto does not have.
     */
    function detect(ua) {
      var os = {};
      var browser = {};

      if (!ua) {
        return {
          browser: browser,
          os: os
        };
      }

      var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
      var osx = !!ua.match(/\(Macintosh\; Intel /);
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
      var webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
      var wp = ua.match(/Windows Phone ([\d.]+)/);
      var touchpad = webos && ua.match(/TouchPad/);
      var kindle = ua.match(/Kindle\/([\d.]+)/);
      var silk = ua.match(/Silk\/([\d._]+)/);
      var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
      var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
      var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
      var playbook = ua.match(/PlayBook/);
      var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
      var firefox = ua.match(/Firefox\/([\d.]+)/);
      var ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
      var webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
      var safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
      var edge = ua.match(/Edge\/(\d{2,}\.[\d\w]+)$/);
      var operaMini = ua.match(/Opera Mini/);
      browser.webkit = webkit && !edge;

      if (browser.webkit) {
        browser.version = webkit[1];
      }

      if (android) {
        os.android = true;
        os.version = android[2];
      }

      if (iphone && !ipod) {
        os.ios = os.iphone = true;
        os.version = iphone[2].replace(/_/g, '.');
      }

      if (ipad) {
        os.ios = os.ipad = true;
        os.version = ipad[2].replace(/_/g, '.');
      }

      if (ipod) {
        os.ios = os.ipod = true;
        os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      }

      if (wp) {
        os.wp = true;
        os.version = wp[1];
      }

      if (webos) {
        os.webos = true;
        os.version = webos[2];
      }

      if (touchpad) {
        os.touchpad = true;
      }

      if (blackberry) {
        os.blackberry = true;
        os.version = blackberry[2];
      }

      if (bb10) {
        os.bb10 = true;
        os.version = bb10[2];
      }

      if (rimtabletos) {
        os.rimtabletos = true;
        os.version = rimtabletos[2];
      }

      if (playbook) {
        browser.playbook = true;
      }

      if (kindle) {
        os.kindle = true;
        os.version = kindle[1];
      }

      if (silk) {
        browser.silk = true;
        browser.version = silk[1];
      }

      if (!silk && os.android && ua.match(/Kindle Fire/)) {
        browser.silk = true;
      }

      if (chrome && !edge) {
        browser.chrome = true;
        browser.version = chrome[1];
      }

      if (firefox && !edge) {
        browser.firefox = true;
        browser.version = firefox[1];
      }

      if (ie) {
        browser.ie = true;
        browser.version = ie[1];
      }

      if (safari && (osx || os.ios)) {
        browser.safari = true;

        if (osx) {
          browser.version = safari[1];
        }
      }

      if (webview) {
        browser.webview = true;
      }

      if (edge) {
        browser.edge = true;
        browser.version = edge[1];
      }

      if (operaMini) {
        browser.operaMini = true;
      }
      /*eslint no-extra-parens:0*/


      os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || (ie || edge) && !ua.match(/Phone/) && ua.match(/Touch/));
      os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));
      os.mac = osx;
      os.googleBot = !!ua.match(/Googlebot\/2.1/);
      return {
        browser: browser,
        os: os
      };
    }

    return detect;

}));
