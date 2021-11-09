
// // -- Links resolution rules
// // This function will be used to generate links to Prismic.io documents
// // As your project grows, you should update this function according to your routes
// const linkResolver = (doc) => {
//   if (doc.type == "blog_homepage") {
//     // If you have a singleton 'homepage' document, you return the root
//     return `/`;
//   } 
//   if (doc.type === "post") {
//     // For a 'post', you could use the post's Unique ID (UID)
//     return `/${doc.uid}`;
//   }
//   else {
//     return '/';
//   }
// }
// export default linkResolver;

