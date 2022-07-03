/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import Seo from "../islands/Seo.tsx";
import Form from "../islands/Form.tsx";

const Home = () => {
  return (
    <Fragment>
      <Seo title="Home" />
      <main
        class={tw`mx-auto py-20 px-10 max-w-screen-md sm:max-w-none md:px-40 font-poppins bg-primary-red xs:h-screen lg:flex items-center lg:max-w-screen-7xl xl:px-40 2xl:px-60 lg:px-20 relative bg-mobile-pattern lg:bg-desktop-pattern`}
      >
        <div>
          <h1
            class={tw`text-center text-white font-bold text-3xl md:text-5xl lg:text-4xl lg:text-left lg:w-3/4 2xl:text-6xl`}
          >
            Learn to code by watching others
          </h1>
          <p
            class={tw`text-white font-medium mt-7 mb-10 text-center text-sm lg:text-md lg:text-left lg:w-3/4 2xl:text-lg`}
          >
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
        <div class={tw`flex flex-col gap-8 lg:w-1/2 xl:w-3/4 xl:gap-5`}>
          <div
            class={tw`w-full py-3 px-8 text-white rounded-lg bg-accent-blue text-center shadow-xl xl:py-5`}
          >
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </div>
          <section class={tw`bg-white rounded-lg p-6 shadow-xl xl:p-8`}>
            <Form />
            <p
              class={tw`font-medium text-neutral-grayishBlue text-xs mt-4 text-center`}
            >
              By clicking the button, you are agreeing to our{" "}
              <span class={tw`text-primary-red`}>Terms and Services</span>
            </p>
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
