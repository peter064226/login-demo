'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async localAuthCallback() {
        //返回接口重定向不行,因为来源是一个ajax请求，无法重定向，只能发个消息让前端自己做重定向
        // this.ctx.redirect('/#/')
        this.ctx.body = { success: true }
    }
    async logout() {
        this.ctx.session.user = null;
        this.ctx.body = { success: true }
    }
}

module.exports = LoginController;
