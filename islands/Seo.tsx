/** @jsx h */
import { h, Fragment } from "preact";

interface SeoProps {
  title: string;
}

const Seo = (props: SeoProps) => {
  const { title } = props;

  return (
    <Fragment>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A website for deno experiment" />
      <meta name="keywords" content="deno, fresh, frontend-mentor" />
      <meta name="author" content="Ditya Athallah" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" value="notranslate" />
      <meta name="google-site-verification" content="Q_Q_Q_Q" />
      <meta name="msvalidate.01" content="Q_Q_Q_Q" />
    </Fragment>
  );
};

export default Seo;
