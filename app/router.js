'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,middleware,passport} = app

  // app.passport.mount('github')
  const github = app.passport.authenticate('github', {})
  //转到第三方登陆页面
  router.get('/api/github/login', github)
  //鉴权成功后的回调页面,passport内部会将code传给github获取用户信息，然后进入app.js中的app.passport.verify进行保存user到数据库操作
  // router.get('/api/github/callback', github)
  router.get('/api/github/callback', passport.authenticate('github', { successRedirect: 'http://localhost:8080/' }),
  function(req, res) {
    debugger
    // Successful authentication, redirect home.
    res.redirect('http://localhost:8080/');
  });
  
  // 渲染登录页面，用户输入账号密码(原第三方提供,因为egg不做页面，所以需要前端做)
  // router.get('/login', controller.home.login);
  // 登录校验(原第三方提供)，会进入passport.authenticate
  router.post('/api/local/login', passport.authenticate('local', { successRedirect: '/api/local/callback' }));
  // 鉴权成功后的回调页面,也就是上一行的参数 successRedirect ，此处egg是接口不自带页面，所以省去
  router.get('/api/local/callback', controller.login.localAuthCallback);
  router.post('/logout', controller.login.logout)


  router.get('/api/getUserInfo', middleware.authLogin(),controller.user.getUserInfo)

  router.get('/message/count', controller.data.messageCount)
}
