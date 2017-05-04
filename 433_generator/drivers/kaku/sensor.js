'use strict';

const Kaku = require('./kaku');
const Sensor = require('../../../drivers/lib/drivers/sensor');

module.exports = class KakuSensor extends mix(Kaku).with(Sensor) {
};
