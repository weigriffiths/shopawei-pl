import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import Privacy from 'components/policies/privacy/Privacy'

export default function PrivacyPage() {
  return (
    <ThemeProvider theme={theme}>
      {/* Add sticky header with just logo */}
      <Privacy />
    </ThemeProvider>
  );
}
