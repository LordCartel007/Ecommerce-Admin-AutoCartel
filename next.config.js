module.exports = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};

console.log("GOOGLE_CLIENT_ID in Amplify:", process.env.GOOGLE_CLIENT_ID);
