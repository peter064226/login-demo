module.exports = app => {

    const LocalStrategy = require('passport-local').Strategy;
    // 挂载 strategy
    app.passport.use(new LocalStrategy({
        passReqToCallback: true,
    }, async (req, username, password, done) => {

        const user = await req.ctx.service.user.getUser({ username })
        // if (err) { return done(err); }
        if (!user) {
            const newUser = await req.ctx.service.user.addUser({ oauthName:'local', username, password })
            return done(null, newUser); 
        }
        if (user.password!=password) { return done(null, false); }
        return done(null, user);

    }));

    app.passport.verify(async (ctx, providerUser) => {
        
        // 从数据库中查找用户信息
 
        console.log('providerUser:' + providerUser)
        // assert(providerUser.provider, 'providerUser.provider should exists')
        // assert(providerUser.id, 'providerUser.id should exists')
        const oauthName = providerUser.provider
        const oauthId = providerUser.id
        const existsUser = await ctx.service.user.getUser({ oauthName, oauthId })
        if (existsUser) {
            return existsUser;
        }

        const newUser = await ctx.service.user.addUser({ oauthName, oauthId, username: providerUser.name, avatar: providerUser.photo })
        return newUser
        // return 的user就是下面传入的那个User
    })

     app.passport.serializeUser(async (ctx, user) => {
         
        console.log('serializeUser')
        return user;
    });

     app.passport.deserializeUser(async (ctx, user) => {
         console.log('deserializeUser')
        return user;
    });

}