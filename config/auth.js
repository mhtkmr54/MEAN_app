// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '382535351940328', // your App ID
        'clientSecret'    : 'b942e13f73908f4e46701d8957b924d2', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '656664762527-rsbnefpo76euqtl8i4vpcfvd8fspp10b.apps.googleusercontent.com',
        'clientSecret'     : 'hGwLF47FnQHso4Rxz81Xh8-v',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
