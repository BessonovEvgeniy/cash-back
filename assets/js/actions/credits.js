'use strict';
import RefluxActionsCrud from "../utils/reflux_actions_crud";
import Promise from "bluebird";

export default Promise.promisifyAll(RefluxActionsCrud(
    {
        'getByClientId': {method: 'post', url: '/api/credits/id'},
        'getAll': '/api/credits/',
        'setBidByClientId': {method: 'post', url: '/api/credits/set/id'},
        'setCreditStatus':{method: 'post', url: '/api/credits/set/status'},
    }
));