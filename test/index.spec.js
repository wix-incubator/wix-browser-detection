'use strict';

const browserDetection = require('../index');

describe('UA tests', () => {
    const UA = {
        Safari_OSX_7_0_1: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.73.11 (KHTML, like Gecko) Version/7.0.1 Safari/537.73.11',
        Safari_OSX_7_0: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71',
        Safari_OSX_6_0: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25',
        Safari_Windows_NT: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27',

        WebOS_1_4_0_Pre: 'Mozilla/5.0 (webOS/1.4.0; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.1',
        WebOS_1_4_0_Pixi: 'Mozilla/5.0 (webOS/1.4.0; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pixi/1.1',
        WebOS_1_2_9_Pixi: 'Mozilla/5.0 (webOS/Palm webOS 1.2.9; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.0',
        WebOS_3_0_0_TouchPad: 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',

        iOS_3_0_iPhone: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/1A542a Safari/419.3',
        iOS_4_0_iPhone: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
        iOS_3_1_1_iPod: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C145',
        iOS_3_2_iPad: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10',
        iOS_4_2_iPad: 'Mozilla/5.0 (iPad; U; CPU OS 4_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C134 Safari/6533.18.5',
        iOS_4_3_iPhone_Simulator: 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
        iOS_5_0_iPhone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
        iOS_5_1_iPad_webView: 'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/98176',
        iOS_6_0_iPad_mini: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A406 Safari/8536.25',
        iOS_6_1_iPhone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B143 Safari/8536.25',

        iOS_3_2_iPad_2: 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10',

        iOS_7_0_iPhone: 'Mozilla 5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KTHML, like Gecko) Version/7.0 Mobile/11A449d Safari/9537.53',
        iOS_7_0_iPhone_Chrome: 'Mozilla 5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/536.26 (KHTM, like Gecko) CriOS/28.0.1500.17 Mobile/11A4449d Safari/8536.25',

        Android_1_5: 'Mozilla/5.0 (Linux; U; Android 1.5; de-; HTC Magic Build/PLAT-RC33) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
        Android_2_1: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Nexus One Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17 Chrome/4.1.249.1025',
        Android_2_3: 'Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/GRK39F) AppleWebKit/533.1 (KTHML, like Gecko) Version/4.0 Mobile Safari/533.1',
        Android_2_3_Lenovo_A750: 'Lenovo-A750/S102 Linux/2.6.35.7 Android/2.3 Release/12.12.2011 Browser AppleWebkit533.1 Profile/ Configuration/',
        Android_4_1_1: 'Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03O) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
        Android_4_1_1_Tablet: 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03S) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
        Android_4_3: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 4 Build/JWR66Y) AppleWebKit/537.36 (KTHML, like Gecko) Chrome/29.0.1547.59 Mobile Safari/537.36',

        BlackBerry_6_0_0_141: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-GB) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+',
        PlayBook_1_0_0: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+',
        PlayBook_2_1_0: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+',
        BB10: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',

        Opera_11_51: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.7.1; U; en) Presto/2.9.168 Version/11.51',
        Opera_Mobile_Simulator: 'Opera/9.80 (Macintosh; Intel Mac OS X; Opera Mobi/[BUILD_NR]; U; en) Presto/2.7.81 Version/11.00',
        Opera_Mini_11: 'Opera/9.80 (iPhone; Opera Mini/8.0.0/34.2336; U; en) Presto/2.8.119 Version/11.10',

        Kindle: 'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate)',
        Silk_1_0_accel: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.328_10008910) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true',
        Silk_1_0: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

        Chrome_Android_18_0: 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
        Chrome_iOS_19_0: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
        Chrome_OSX_24_0: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.56 Safari/537.17',

        Firefox_13_Tablet: 'Mozilla/5.0 (Android; Tablet; rv:13.0) Gecko/13.0 Firefox/13.0',
        Firefox_13_Phone: 'Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0',
        Firefox_6_0_2: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:6.0.2) Gecko/20100101 Firefox/6.0.2',
        Firefox_Mobile_Simulator: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:2.1.1) Gecko/ Firefox/4.0.2pre Fennec/4.0.1',
        Firefox_Os_Phone: 'Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0',
        Firefox_Os_Tablet: 'Mozilla/5.0 (Tablet; rv:18.0) Gecko/18.0 Firefox/18.0',

        Windows_IE_9: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
        Windows_IE_9_Compat: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0)',
        Windows_IE_10: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
        Windows_IE_11: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
        Windows_RT_Surface: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0; Touch)',
        Windows_Phone_8: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8X by HTC)',
        Windows_Edge_18: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763',

        Google_Bot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    };

    function detect (ua, platform, callback) {
        if (!callback) {
            callback = platform;
            platform = '';
        }
        const obj = browserDetection(ua);
        callback.call(null, obj.os, obj.browser);
    }

    describe('DetectTest', () => {
        it('testSafariOSX', () => {
            detect(UA.Safari_OSX_7_0_1, (os, browser) => {
                expect(os.osx).toBeUndefined();
                expect(!os.ipad).toBeDefined();
                expect(browser.webkit).toBeTruthy();
                expect(browser.safari).toBeTruthy();
                expect(!!browser.chrome).toBeFalsy();
                expect('7.0.1').toEqual(browser.version);
                expect(os.googleBot).toBeFalsy();
            });
            detect(UA.Safari_OSX_7_0, (os, browser) => {
                expect(!os.ipad).toBeDefined();
                expect(browser.webkit).toBeTruthy();
                expect(browser.safari).toBeTruthy();
                expect(!!browser.chrome).toBeFalsy();
                expect('7.0').toEqual(browser.version);
            });
            detect(UA.Safari_OSX_6_0, (os, browser) => {
                expect(!os.ipad).toBeDefined();
                expect(browser.webkit).toBeTruthy();
                expect(browser.safari).toBeTruthy();
                expect(!!browser.chrome).toBeFalsy();
                expect('6.0').toEqual(browser.version);
            });
        });

        // We don't support Safari on Windows and don't test for it
        //
        // it('testSafariWindows', () => {
        //     detect(UA.Safari_Windows_NT, 'Windows', (os, browser) => {
        //         expect(os.osx).toBeUndefined()
        //         expect(os.ios).toBeUndefined()
        //         expect(os.wp).toBeUndefined()
        //         expect(browser.webkit).toBeTruthy()
        //         expect(browser.safari).toBeTruthy()
        //         expect(!!browser.chrome).toBeFalsy()
        //         expect('5.0.4').toEqual(browser.version)
        //     })
        // })

        it('testWebOS', () => {
            detect(UA.WebOS_1_4_0_Pre, (os, browser) => {
                expect(os.webos).toBeTruthy();
                expect(!os.touchpad).toBeDefined();
                expect(browser.webkit).toBeTruthy();
                expect('1.4.0').toEqual(os.version);
            });
            detect(UA.WebOS_1_4_0_Pixi, os => {
                expect(os.webos).toBeTruthy();
                expect('1.4.0').toEqual(os.version);
            });
            detect(UA.WebOS_1_2_9_Pixi, os => {
                expect(os.webos).toBeTruthy();
                expect('1.2.9').toEqual(os.version);
            });
            detect(UA.WebOS_3_0_0_TouchPad, os => {
                expect(os.webos).toBeTruthy();
                expect(os.touchpad).toBeTruthy();
                expect('3.0.0').toEqual(os.version);
            });
        });

        it('testAndroid', () => {
            detect(UA.Android_1_5, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('1.5').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(!!browser.safari).toBeFalsy();
            });
            detect(UA.Android_2_1, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('2.1').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(!!browser.safari).toBeFalsy();
            });
            detect(UA.Android_2_3, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('2.3.7').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(!!browser.safari).toBeFalsy();
            });
            detect(UA.Android_2_3_Lenovo_A750, (os, browser) => {
                expect(os.android, 'Expected Android').toBeTruthy();
                expect(browser.webkit, 'Expected WebKit').toBeTruthy();
                expect('2.3').toEqual(os.version);
                // FIXME: Unfortunately we can't detect if it's a phone, as there's
                // no "mobile" in the UA string.
                // expect(os.phone, 'Expected phone').toBeTruthy()
                expect(!!browser.safari, 'Expected browser to not be Safari').toBeFalsy();
            });
            detect(UA.Android_4_1_1, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(!!os.ios).toBeFalsy();
                expect('4.1.1').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(!!os.iphone).toBeFalsy();
                expect(browser.chrome).toBeTruthy();
                expect(!!browser.safari).toBeFalsy();
            });
            detect(UA.Android_4_1_1_Tablet, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('4.1.1').toEqual(os.version);
                expect(os.tablet).toBeTruthy();
                expect(browser.chrome).toBeTruthy();
                expect(!!browser.safari).toBeFalsy();
            });
            detect(UA.Android_4_3, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(!!os.ios).toBeFalsy();
                expect('4.3').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(!!os.iphone).toBeFalsy();
                expect(browser.chrome).toBeTruthy();
                expect(!!browser.safari).toBeFalsy();
                expect(os.googleBot).toBeFalsy();
            });
        });

        it('testIOS', () => {
            detect(UA.iOS_3_0_iPhone, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.iphone).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('3.0').toEqual(os.version);
                expect('420.1').toEqual(browser.version);
                expect(os.phone).toBeTruthy();
                expect(browser.safari).toBeTruthy();
                expect(!!os.android).toBeFalsy();
                expect(!!browser.ie).toBeFalsy();
                expect(!!browser.firefox).toBeFalsy();
                expect(!!browser.silk).toBeFalsy();
                expect(!!browser.chrome).toBeFalsy();
                expect(!!browser.playbook).toBeFalsy();
            });
            detect(UA.iOS_3_1_1_iPod, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.iphone).toBeUndefined();
                expect(os.ipod).toBeTruthy();
                expect('3.1.1').toEqual(os.version);
                expect(!!os.phone).toBeFalsy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_3_2_iPad, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.ipad).toBeTruthy();
                expect(!!os.iphone).toBeFalsy();
                expect('3.2').toEqual(os.version);
                expect(os.tablet).toBeTruthy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_3_2_iPad_2, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.ipad).toBeTruthy();
                expect(!os.iphone).toBeDefined();
                expect('3.2').toEqual(os.version);
                expect(os.tablet).toBeTruthy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_4_0_iPhone, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.iphone).toBeTruthy();
                expect(!os.ipad).toBeDefined();
                expect('4.0').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_4_2_iPad, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.ipad).toBeTruthy();
                expect('4.2').toEqual(os.version);
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeTruthy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_4_3_iPhone_Simulator, (os, browser) => {
                expect(os.ios).toBeTruthy();
                expect(os.iphone).toBeTruthy();
                expect('4.3').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_5_0_iPhone, (os, browser) => {
                expect(os.ios).toBeDefined();
                expect(os.iphone).toBeDefined();
                expect('5.0').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_5_1_iPad_webView, (os, browser) => {
                expect(os.ios).toBeDefined();
                expect(os.ipad).toBeDefined();
                expect('5.1').toEqual(os.version);
                expect(browser.webview).toBeTruthy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_6_1_iPhone, (os, browser) => {
                expect(os.ios).toBeDefined();
                expect(os.iphone).toBeDefined();
                expect('6.1').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(browser.safari).toBeTruthy();
                expect(!!browser.webview).toBeFalsy();
                expect(!!browser.chrome).toBeFalsy();
                expect(!!browser.firefox).toBeFalsy();
            });
            detect(UA.iOS_6_0_iPad_mini, (os, browser) => {
                expect(os.ios).toBeDefined();
                expect(os.ipad).toBeDefined();
                expect('6.0').toEqual(os.version);
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeTruthy();
                expect(browser.safari).toBeTruthy();
            });
            detect(UA.iOS_7_0_iPhone, (os, browser) => {
                expect(os.ios).toBeDefined();
                expect(os.iphone).toBeDefined();
                expect('7.0').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(browser.safari).toBeTruthy();
                expect(!!browser.chrome).toBeFalsy();
                expect(!!browser.firefox).toBeFalsy();
            });
            detect(UA.iOS_7_0_iPhone_Chrome, (os, browser) => {
                expect(os.ios).toBeDefined();
                expect(os.iphone).toBeDefined();
                expect('7.0').toEqual(os.version);
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(!!browser.safari).toBeFalsy();
                expect(browser.chrome).toBeTruthy();
                expect(!!browser.firefox).toBeFalsy();
                expect(!!browser.webview).toBeFalsy();
                expect(os.googleBot).toBeFalsy();
            });
        });

        it('testBlackBerry', () => {
            detect(UA.BlackBerry_6_0_0_141, (os, browser) => {
                expect(os.blackberry).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('6.0.0.141').toEqual(os.version);
            });
            detect(UA.PlayBook_1_0_0, (os, browser) => {
                expect(os.rimtabletos).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(os.tablet).toBeTruthy();
                expect('1.0.0').toEqual(os.version);
            });
            detect(UA.PlayBook_2_1_0, (os, browser) => {
                expect(os.rimtabletos).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(os.tablet).toBeTruthy();
                expect('2.1.0').toEqual(os.version);
            });
            detect(UA.BB10, (os, browser) => {
                expect(os.bb10).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(os.phone).toBeTruthy();
                expect('10.0.0.1337').toEqual(os.version);
            });
        });

        it('testKindle', () => {
            detect(UA.Kindle, (os, browser) => {
                expect(os.kindle).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect('3.0').toEqual(os.version);
            });

            detect(UA.Silk_1_0, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(browser.silk).toBeTruthy();
                expect('2.3.4').toEqual(os.version);
            });

            detect(UA.Silk_1_0_accel, (os, browser) => {
                expect(!os.android).toBeDefined();
                expect(browser.webkit).toBeTruthy();
                expect(browser.silk).toBeTruthy();
                expect('1.0.13.328_10008910').toEqual(browser.version);
            });
        });

        it('testFirefox', () => {
            detect(UA.Firefox_6_0_2, (os, browser) => {
                expect(browser.webkit).toBeFalsy();
                expect('6.0.2').toEqual(browser.version);

                expect(browser.firefox).toBeTruthy();
                expect(!!os.firefoxos).toBeFalsy();
            });

            detect(UA.Firefox_13_Tablet, (os, browser) => {
                expect(browser.firefox).toBeTruthy();
                expect(browser.webkit).toBeFalsy();
                expect(os.android).toBeTruthy();
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeTruthy();
                expect(!!os.firefoxos).toBeFalsy();
            });

            detect(UA.Firefox_13_Phone, (os, browser) => {
                expect(browser.firefox).toBeTruthy();
                expect(browser.webkit).toBeFalsy();
                expect(os.android).toBeTruthy();
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(!!os.firefoxos).toBeFalsy();
                expect(os.googleBot).toBeFalsy();
            });

            // We don't support Firefox OS and don't test for it
            //
            // detect(UA.Firefox_Os_Phone, (os, browser) => {
            //     expect(browser.firefox).toBeTruthy()
            //     expect(browser.webkit).toBeFalsy()
            //     expect(os.firefoxos).toBeTruthy()
            //     expect(os.phone).toBeTruthy()
            //     expect(os.tablet).toBeFalsy()
            //     expect('18.0').toEqual(os.version)
            // })

            // detect(UA.Firefox_Os_Tablet, (os, browser) => {
            //     expect(browser.firefox).toBeTruthy()
            //     expect(browser.webkit).toBeFalsy()
            //     expect(os.firefoxos).toBeTruthy()
            //     expect(os.tablet).toBeTruthy()
            //     expect(os.phone).toBeFalsy()
            //     expect('18.0').toEqual(os.version)
            // })
        });

        it('testOpera', () => {
            detect(UA.Opera_11_51, (os, browser) => {
                expect(browser.webkit).toBeFalsy();
                expect(browser.version).toBeUndefined();
            });
        });

        it('testChrome', () => {
            detect(UA.Chrome_Android_18_0, (os, browser) => {
                expect(os.android).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(browser.chrome).toBeTruthy();
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect('18.0.1025.133').toEqual(browser.version);
            });

            detect(UA.Chrome_iOS_19_0, (os, browser) => {
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(os.ios).toBeTruthy();
                expect(browser.webkit).toBeTruthy();
                expect(browser.chrome).toBeTruthy();
                expect('19.0.1084.60').toEqual(browser.version);
            });

            detect(UA.Chrome_OSX_24_0, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeFalsy();
                expect(browser.chrome).toBeTruthy();
                expect(os.googleBot).toBeFalsy();
            });
        });

        it('testIE', () => {
            detect(UA.Windows_IE_11, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeFalsy();
                expect(browser.ie).toBeTruthy();
                expect('11').toEqual(browser.version);
                expect(os.googleBot).toBeFalsy();
            });

            detect(UA.Windows_IE_10, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeFalsy();
                expect(browser.ie).toBeTruthy();
                expect('10.0').toEqual(browser.version);
            });

            detect(UA.Windows_RT_Surface, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeTruthy();
                expect(browser.ie).toBeTruthy();
                expect('10.0').toEqual(browser.version);
            });

            detect(UA.Windows_Phone_8, (os, browser) => {
                expect(os.wp).toBeTruthy();
                expect(os.phone).toBeTruthy();
                expect(os.tablet).toBeFalsy();
                expect(browser.ie).toBeTruthy();
                expect('10.0').toEqual(browser.version);
            });

            detect(UA.Windows_IE_9, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeFalsy();
                expect(browser.ie).toBeTruthy();
                expect('9.0').toEqual(browser.version);
            });

            detect(UA.Windows_IE_9_Compat, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeFalsy();
                expect(browser.ie).toBeTruthy();
                expect('7.0').toEqual(browser.version);
            });
        });

        it('testEdge', () => {
            detect(UA.Windows_Edge_18, (os, browser) => {
                expect(os.phone).toBeFalsy();
                expect(os.tablet).toBeFalsy();
                expect(browser.edge).toBeTruthy();
                expect('18.17763').toEqual(browser.version);
            });
        });

        it('testUndefined', () => {
            detect(undefined, (os, browser) => {
                expect(browser).toEqual({});
                expect(os).toEqual({});
            });
        });

        it('testOperaMini', () => {
            detect(UA.Opera_Mini_11, (os, browser) => {
                expect(browser.operaMini).toBeTruthy();
            });
        });

        describe('testGoogleBot', () => {
            it('testGoogleBot', () => {
                detect(UA.Google_Bot, os => {
                    expect(os.googleBot).toBeTruthy();
                });
            });
        });
    });
});
