module.exports = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_ID,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
};

console.log("GOOGLE_CLIENT_ID in Amplify:", process.env.GOOGLE_CLIENT_ID);
