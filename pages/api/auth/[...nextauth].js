import nextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Player from "../../../models/playerModel";
import connectMongo from "../../../util/connectMongo";
import bcrypt from "bcrypt";

connectMongo();

export default nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials.username;
        const password = credentials.password;
        const player = await Player.findOne({ username, password });
        if (!player) {
          throw new Error(
            "You haven't registered yet or Username/Password not correct"
          );
        }
        if (player) {
          return player;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  database: process.env.MONGODB_URI,
});

// const signInPlayer = async ({ password, player }) => {
//   if (!password) {
//     throw new Error("Please enter password");
//   }
//   const isMatch = await bcrypt.compare(password, player.password);
//   if (!isMatch) {
//     throw new Error("Email / Password not correct");
//   }
//   return player;
// };
