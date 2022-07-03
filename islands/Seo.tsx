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
      <meta name="description" content="A website for deno experiment" />
    </Fragment>
  );
};

export default Seo;
