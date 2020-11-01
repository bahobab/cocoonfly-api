require('dotenv').config();

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3f0fb7c6fab04d8443ce0ef447e7469e'),
    },
  },
});
