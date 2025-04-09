import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="IJETP, International Journal of Educational Trends and Practices , Educational Trends & Practices, Journal & Performance research papers ,Educational Trends" />
      <meta name="description" content="The International Journal of Educational Trends and Practices (IJETP) is a peer-reviewed academic journal focused on innovative research, practices, and developments in the field of education. It publishes original research articles, reviews, and case studies to advance knowledge in teaching, learning, and educational policy." />
      <meta name="author" content="IJETP Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Journal of Educational Trends and Practices" />
      <meta property="og:description" content="The International Journal of Educational Trends and Practices (IJETP) is a peer-reviewed academic journal focused on innovative research, practices, and developments in the field of education. It publishes original research articles, reviews, and case studies to advance knowledge in teaching, learning, and educational policy." />
      <meta property="og:url" content="https://www.ijetp.com/" />
      <meta property="og:image" content="https://www.ijetp.com/assets/images/oj.png" />

      <link rel="icon" type="image/png" href="" />
      {/* <link rel="icon" type="image/png" href="https://www.ijetp.com/assets/Fav Icon.png" /> */}
    </Helmet>
  );
};

export default HelmetComponent;