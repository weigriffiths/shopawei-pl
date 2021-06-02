import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import StickyForm from 'components/sticky-form';
import Banner from 'sections/banner';
import Promises from 'sections/promises';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import WorkFlow from 'sections/workflow';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <StickyForm />
          <SEO title="Shopawei - Zrób zakupy online" />
          <Banner />
          <Promises />
          <CoreFeature />
          <Feature />
          <WorkFlow />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
