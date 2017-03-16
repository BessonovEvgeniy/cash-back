'use strict';
const
    logger = require('./../../config/log'),
    config = require('./../../config/config'),
    CreditService = require('./service'),
    path = 'credits';
module.exports = [
    {
        method: 'POST',
        path: `/${path}/id`,
        config: {
            auth: false,
            plugins: {
                joinTarget: 'Credit'
            }
        },
        handler: (request, reply)=> {
            let {id} = request.payload,
                {include} =request;
            CreditService.getById({id, include})
                .then(reply)
                .catch(err=> {
                    logger.warn(`Failed to fetch Credit [${id}]`, err);
                    reply(err);
                });
        }
    },
    {
        method: 'POST',
        path: `/${path}/set/id`,
        config: {
            auth: false,
            plugins: {
                joinTarget: 'Credit'
            }
        },
        handler: (request, reply)=> {
            let {id, bid} = request.payload,
                {include} =request;
            CreditService.setBidByClientId({id, bid, include})
                .then(reply)
                .catch(err=> {
                    logger.warn(`Failed to fetch Credit [${id}]`, err);
                    reply(err);
                });
        }
    },
    {
        method: 'GET',
        path: `/${path}`,
        config: {
            auth: false,
            plugins: {
                joinTarget: 'Credit'
            }
        },
        handler: (request, reply)=> {

            CreditService.getAll()
                .then(reply)
                .catch(err=> {
                    logger.warn(`Failed to fetch Credit [${id}]`, err);
                    reply(err);
                });
        }
    },
    {
        method: 'POST',
        path: `/${path}/set/status`,
        config: {
            auth: false,
            plugins: {
                joinTarget: 'Credit'
            }
        },
        handler: (request, reply)=> {
            let {id, approved} = request.payload;
            CreditService.setCreditStatus({id, approved})
                .then(reply)
                .catch(err=> {
                    logger.warn(`Failed to fetch Credit [${id}]`, err);
                    reply(err);
                });
        }
    }
];