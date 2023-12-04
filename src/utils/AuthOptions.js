import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
      CredentialsProvider({
        name: "OSYMAUTH",
      
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          

          const url = 'https://kokpit.smartlimon.com/auth/login'

          const resp = await fetch(url,{
            method:'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body : JSON.stringify({
              email: credentials.username,
              password: credentials.password
            })
           
          }).then(resp=>{ 
            console.log(resp)
            return resp.json()
          
          } ).then(resp=>{
            console.log(resp)
            if (resp.errors){
              return errors
            } else {
              return resp.data
            }
          }).catch(err=>{
            console.log('B',err)
          })
  
        
          if (resp){
            return { 
              id: "1", 
              name: "Volkan Şengül",
              email: "volkan@eduventy.com",
              extra: resp,
              department: 'ABC'
             }
          } 
          return null
        }
      })
    ],
    callbacks: {
      async jwt({token, user }){
        if (user){
          token.name = user?.name
          token.department = user?.department
          token.extra = user?.extra
        }
        return token
      },
      async session({ session, token, user }) {
        if (token) {
          session.user = token;
        }
        return {session, token, user}
      }
  }
  }

  export default authOptions