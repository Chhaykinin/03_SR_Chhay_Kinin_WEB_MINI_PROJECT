import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOption={
    providers:[
        // login by email and password
        CredentialsProvider({
            async authorize(userInfo){
                //define
                const newUserInfo={
                    email:userInfo.email,
                    password:userInfo.password,
                };
                const login =await loginService(newUserInfo);
                console.log("login:",login);
                // console.log("user info in next auth",userInfo);
                //call login services
            },
        }),
       
    ],
   
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token }) {
        session.user = token;
        return session;
      },
    },

};
const handler= nextAuth(authOption);
export {handler as GET, handler as POST};
