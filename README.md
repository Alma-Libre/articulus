# Articulus

[![HitCount](http://hits.dwyl.io/Alma-Libre/articulus.svg)](http://hits.dwyl.io/Alma-Libre/articulus)

Write and read articles.

## To Build

1. Install dependencies using `npm install` and `npm run client-install`.
2. Use `npm run dev` to start both react and node dev servers together.
3. React server is on port 5000 while node server is on port 3000 (localhost).

## Keys

Add keys in "./config/credentials.js" and export them

```javascript
module.exports = {
  mongoURI: "mongodb://<dbuser>:<dbpassword>@ds127646.mlab.com:27646/articulus",
  secretOrKey: "secretkey"
};
```
