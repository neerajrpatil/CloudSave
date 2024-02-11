// this is tyescript
// pasted below a=code form docs
// so wht it does is protcets evrything 

import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes : ["/"],
    // so this punlicroutes will make the homepage tht is '/' as the pubic and accessible to everyone over there in net 
    // all pages like dashboard (only 1 page for us) are ehch arent mentioned above will be needing the AUTH
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
