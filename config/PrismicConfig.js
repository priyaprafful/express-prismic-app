
  
 import fetch from "node-fetch";                                               
 import * as prismic from "@prismicio/client";
 
 const repoName = `my-express-website`;
  // If your repo is private, add an access token
 const accessToken = ``;
 const endpoint = prismic.getEndpoint(repoName);
  
// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: "blog_homepage",
    path: "/"
  },
  {
    type: "post",
    path: "/:uid"
  },

]
 const createClient = (req) => {
    const client = prismic.createClient(endpoint, { fetch, accessToken, req, routes})
    return client
  }

export default createClient;
