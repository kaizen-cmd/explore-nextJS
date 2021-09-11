import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="keywords"
          content="codestrike, competitive programming, coding, hackerrank, contest, recruitment, technology, kickstart"
        />
        <meta
          name="google-site-verification"
          content="IhXOHLrIIqBUyYgV1CklI9WGqrMmPrF-WnvQJ39dnfM"
        />
        <link rel="manifest" href="/manifest.json" />
        <link href="/ico.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/ico.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/ico.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DSHM5W45FF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DSHM5W45FF');
              `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/604ce556f7ce1827092fbfd1/1f0m5vn7i';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
          `,
          }}
        />
        <script
          data-ad-client="ca-pub-7061616100866138"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="d-flex justify-content-center align-items-center w-100 flex-column"
        style={{ height: "100vh" }}
      >
        <div className="text-center mb-5">
          <h1>Site under maintenance, will be back up soon :)</h1>
          <p>Chat with us for support in the bottom right corner</p>
        </div>
        <div>
          <img
            src="/maintenancemodeerror.png"
            alt="maintainance"
            className="mw-100"
          />
        </div>
      </div>
    </>
  );
}
