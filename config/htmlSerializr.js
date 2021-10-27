import  * as prismicH from "@prismicio/helpers";
// const Elements = prismicH.RichText.Elements


const htmlSerializer = (type, element, content, children) => {
    // console.log("in HTML serializer", element);
  switch(type) {

    // Add a class to paragraph elements
    case element.paragraph:
      return '<p class="paragraph-class">' + children.join('') + '</p>';

    // Don't wrap images in a <p> tag
    case element.image:
      return '<img src="' + element.url + '" alt="' + element.alt + '">';

    // Add a class to hyperlinks
    case element.hyperlink:
      var target = element.data.target ? 'target="' + element.data.target + '" rel="noopener"' : '';
      var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
      return '<a class="some-link"' + target + ' href="' + linkUrl + '">' + content + '</a>';

    // Return null to stick with the default behavior for all other elements
    default:
      return null;
  }
};
export default htmlSerializer;