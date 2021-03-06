import { Link } from 'gatsby';
import React from 'react';

import Element from '../components/Element/Element';
import Footer from '../components/Footer/Footer';
import Layout from '../components/layout';
import SEO from '../components/seo';

const FAQ = () => (
  <Layout>
    <SEO title="FAQ" />

    <Element className="container spacing--large spacing--after">
      <h1>Hi from the FAQ page</h1>

      <Link to="/">Go back to the homepage</Link>
    </Element>

    <Footer />
  </Layout>
);

export default FAQ;
