import React from 'react';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next';

import '../styles/globals.scss';

import Head from 'next/head';

import useGtag from 'hooks/useGtag';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';
import Footer from 'features/Footer';
import Header from 'features/Header';
import FormOverflow from 'features/FormOverflow';
import Script from 'features/Script';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { title: string; description?: string };
};

const defaultDescription =
  'Discover your presence in Web the way you want. Trimsy has developers to help you achieve anything in the world of Web.';

export default function App({ Component, pageProps }: CustomAppProps) {
  const [formOpen, setFormOpen] = React.useState<boolean>(false);

  const handleFormOverflowChange = () => setFormOpen(!formOpen);

  useHideScrollOnTrue(formOpen);
  useGtag();

  return (
    <>
      <Script />
      <Head>
        <meta charSet="UTF-8" />
        <title>{Component.title + ' - Trimsy'}</title>
        <meta name="description" content={Component.description || defaultDescription} />
        <meta content={Component.title} property={'og:title'} />
        <meta content={Component.description || defaultDescription} property={'og:description'} />
        <meta content={'https://trimsy.org/images/mini-logo.png'} property="og:image" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header handleFormChange={handleFormOverflowChange} />

      <Component {...pageProps} />
      <Footer />

      <FormOverflow open={formOpen} handleOpen={handleFormOverflowChange} />
    </>
  );
}
