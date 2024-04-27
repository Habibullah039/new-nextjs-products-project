import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })

        ,

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { },
                password: { }
            },
            async authorize(credentials) {

                // console.log({credentials});
                // return null
                try {

                    const res = await fetch(`${process.env.BACKEND_URL}/login`, {

                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        cache: "no-store",


                    });

                    const user = await res.json();

                    

                    console.log(user);

                    return user;

                    

                }

                catch (error) {

                    throw new Error("Failed To login")

                }

            }
        }),


    ],

    callbacks: {
        async jwt({ token, user }) {
            
            if(user) {
                token.name=user.name ,
                token.email=user.email,
                token.id = user.id
            }

            // console.log(token);
            // console.log(user);
            return token;
            
        },

        async session({ token  , session }) {

            if(token) {
                
                session.user = token
                
            }

            //    console.log(session);
            return session;       
        
        },
    },



    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,

}





