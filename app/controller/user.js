'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserInfo() {
        const user = this.ctx.user || {}

        this.ctx.body = {
            code: 0,
            msg: '查询成功',
            data: { user }
        }
    }
}

module.exports = UserController;
