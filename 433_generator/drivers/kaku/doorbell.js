'use strict';

const Kaku = require('./kaku');
const Doorbell = require('../../../drivers/lib/drivers/doorbell');

module.exports = class KakuDoorbell extends mix(Kaku).with(Doorbell) {

};
