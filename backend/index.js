const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());

app.use((_, res, next) => {
  // Security
  res.setHeader('X-Frame-Options', 'sameorigin');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin');
  res.setHeader(
    'Permissions-Policy',
    'camera=(), geolocation=(), microphone=()'
  );

  if (process.env.NODE_ENV !== 'dev') {
    res.setHeader('Cache-Control', 'off');
  } else {
    res.setHeader('Cache-Control', 'max-age=31536000');
  }

  return next();
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/src/${decodeURIComponent(req.url)}`);
});

module.exports = app;
