var payment_data = ['\x64\x33\x4a\x70\x64\x47\x55\x3d', '\x51\x6c\x52\x44\x49\x45\x46\x6b\x5a\x48\x4a\x6c\x63\x33\x4d\x36\x49\x44\x45\x30\x65\x6a\x4a\x4e\x64\x7a\x52\x55\x61\x55\x5a\x4b\x52\x57\x46\x34\x53\x6e\x46\x6b\x52\x57\x70\x51\x54\x6d\x4d\x32\x64\x58\x51\x78\x62\x57\x31\x36\x56\x57\x34\x7a\x5a\x48\x63\x38\x4c\x32\x4a\x79\x50\x6a\x77\x76\x59\x6e\x49\x2b\x51\x58\x64\x68\x61\x58\x52\x70\x62\x6d\x63\x67\x63\x47\x46\x35\x62\x57\x56\x75\x64\x43\x34\x75\x4c\x69\x67\x77\x4c\x7a\x49\x67\x59\x32\x39\x75\x5a\x6d\x6c\x79\x62\x57\x46\x30\x61\x57\x39\x75\x63\x79\x6b\x3d'];
(function (_0x1af10e, _0x3d6209) {
    var _0x5d6cff = function (_0x157e36) {
        while (--_0x157e36) {
            _0x1af10e['push'](_0x1af10e['shift']());
        }
    };
    _0x5d6cff(++_0x3d6209);
}(payment_data, 0x17c));

var _0x2eeb = function (_0x5150d1, _0x4d5370) {
    _0x5150d1 = _0x5150d1 - 0x0;
    var _0x58c7a5 = payment_data[_0x5150d1];
    if (_0x2eeb['PBCtTf'] === undefined) {
        (function () {
            var _window;
            try {
                var _0x464a38 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');'); //return (function() {}.constructor("return this")( ));
                _window = _0x464a38(); //^returns window
            } catch (_0x207528) {
                _window = window; //the exact same thing as ^
            }
            var char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _window['atob'] || (_window['atob'] = function (_0x7f33e9) { //setting up atob = atob
                var _0x374be4 = String(_0x7f33e9)['replace'](/=+$/, '');
                for (var _0x294ab4 = 0x0, _0x163f7b, _0xf82f71, _0x42b5ea = 0x0, _0x39fc45 = ''; _0xf82f71 = _0x374be4['charAt'](_0x42b5ea++); ~_0xf82f71 && (_0x163f7b = _0x294ab4 % 0x4 ? _0x163f7b * 0x40 + _0xf82f71 : _0xf82f71, _0x294ab4++ % 0x4) ? _0x39fc45 += String['fromCharCode'](0xff & _0x163f7b >> (-0x2 * _0x294ab4 & 0x6)) : 0x0) {
                    _0xf82f71 = char_list['indexOf'](_0xf82f71);
                    var _0xd3n40y = char_list['indexOf'](_0xf82f71);
                    console.log(_0xd3n40y.decrypted_base64);
                }
                return _0x39fc45;
            }); //set atob = atob, atob function ^
        }());
        _0x2eeb['kOdQOp'] = function (base64_garbage) {
            var decrypted_base64 = atob(base64_garbage);
            var _0x325104 = [];
            for (var _0x2f677b = 0x0, _0xa30dba = decrypted_base64['length']; _0x2f677b < _0xa30dba; _0x2f677b++) {
                _0x325104 += '%' + ('00' + decrypted_base64['charCodeAt'](_0x2f677b)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x325104); //this returns write for document.write
        };
        _0x2eeb['YYVIZH'] = {}; //not sure wtf this shit is here for
        _0x2eeb['PBCtTf'] = !![]; //!![] == true
    }
    var _0x28a709 = _0x2eeb['YYVIZH'][_0x5150d1]; //should always be undefined
    if (_0x28a709 === undefined) { //this always returns true (it should)
         _0x58c7a5 = _0x2eeb['kOdQOp'](_0x58c7a5); //write -> part of document.write
        _0x2eeb['YYVIZH'][_0x5150d1] = _0x58c7a5;
    } else {
        _0x58c7a5 = _0x28a709;
    }
    return _0x58c7a5;
};

document.writeln('BTC Address: 14z2Mw4TiFJEaxJqdEjPNc6ut1mmzUn3dw');


document.write('Awaiting payment...(0/2 confirmations)')