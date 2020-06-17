'use strict';

const Controller = require('egg').Controller;

class DataController extends Controller {
    async messageCount() {
        const user = this.ctx.user || {}

        this.ctx.body = {
            code: 0,
            msg: '查询成功',
            data: { user }
        }
    }
}

module.exports = DataController;
