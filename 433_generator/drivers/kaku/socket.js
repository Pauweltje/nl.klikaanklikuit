'use strict';

const Kaku = require('./kaku');
const Toggle = require('../../../drivers/lib/drivers/toggle');

module.exports = class Socket extends mix(Kaku).with(Toggle) {
};
