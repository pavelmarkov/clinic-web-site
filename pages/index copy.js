import Head from 'next/head'
//import fetch from 'isomorphic-unfetch'

export default function Home({ads}) {
  console.log(ads)
  ads.forEach((a)=>console.log(a))
  ads.forEach((a)=>console.log(a.image))
  function plusSlides(id){
    return 2
  }
  function currentSlide(n) {
    return 3
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="img/carousel/img6.jpg" className="img_100"></img>
          <div className="caption"></div>
          <div className="caption_text">20% скидка <br></br> на первый прием</div>
          <button className="action_button slideshow_button">Записаться на прием</button>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img/carousel/img4.jpg" className="img_100"></img>
          <div className="caption"></div>
          <div className="caption_text">Caption Two number #</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="img/carousel/img8.jpg" className="img_100"></img>
          <div className="caption"></div>
          <div className="caption_text">Caption Three number #</div>
        </div>

        <a className="prev" onClick={plusSlides}><img src="img/arrow_back_24px.svg" alt="&#10094;" srcSet=""></img></a>
        <a className="next" onClick={plusSlides}><img src="img/arrow_forward_24px.svg" alt="&#10095;" srcSet=""></img></a>

        <div className="center_align" className="dots">
          <span className="dot" onClick={currentSlide}></span>
          <span className="dot" onClick={currentSlide}></span>
          <span className="dot" onClick={currentSlide}></span>
        </div>
      </div>
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .slideshow-container {
          width: 100vw;
          max-width: 1440px;
          position: relative;
          margin: auto;
          margin-top: 88px;
          overflow: hidden;
        }
        .img_100 {
          width: 100%;
        }
        .center_align {
          text-align:center;
        }
        /* Hide the images by default */
        .mySlides {
          display: none;
        }

        /* Next & previous buttons */
        .prev,
        .next {
          cursor: pointer;
          position: absolute;
          top: 80%;
          right: 128px;
          z-index: 4;
          width: 32px;
          height: 32px;
          margin-top: -22px;
          color: white;
          font-weight: bold;
          transition: 0.6s ease;
          border-radius: 50%;
          user-select: none;
          display: flex;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.2);
          border: 2px solid #ffffff;
        }

        /* Position the "next button" to the right */
        .next {
          right: 64px;
          border-radius: 50%;
        }

        /* On hover, add a black background color with a little bit see-through */
        .prev:hover,
        .next:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
        /* Caption text */
        .caption {
          color: #f2f2f2;
          z-index: 3;
          font-size: 15px;
          padding: 8px 12px;
          position: absolute;
          text-align: center;

          /* width: 963px; */
          width: 53%;
          height: 504px;
          /* left: -196px; */
          top: 0px;

          /* Color / Green / Light */

          background: #14b48c;
          border-radius: 0px 1500px 0px 0px;
        }
        .caption_text {
          position: absolute;
          left: 64px;
          top: 30%;
          color: #ffffff;
          z-index: 7;
          font-weight: bold;
          font-size: 64px;
          line-height: 72px;
          max-width: 40%;
        }

        /* Number text (1/3 etc) */
        .numbertext {
          color: #f2f2f2;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }
        .dots {
          position: absolute;
          top: 80%;
          left: 64px;
          z-index: 4;
        }
        /* The dots/bullets/indicators */
        .dot {
          cursor: pointer;
          height: 8px;
          width: 8px;
          margin: 0 2px;
          background: rgba(255, 255, 255, 0.7);
          opacity: 0.5;
          display: inline-block;
          transition: background-color 0.6s ease;
        }

        .active,
        .dot:hover {
          background-color: #ffffff;
          opacity: 1;
        }

        /* Fading animation */
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }

        @-webkit-keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        .mySlides > img {
          max-height: 504px;
          object-fit: cover;
        }

        .slideshow_button {
          z-index: 7;
          position: absolute;
          left: 64px;
          bottom: 25%;
          background: #b43778;
        }

        @media (min-width: 950px) {
          .slideshow_button {
            width: 303px;
            height: 56px;
          }
        }
        @media (max-width: 1335px) {
          .caption_text {
            font-size: 48px;
          }
          .action_button {
            padding: 6px 8px;
            margin-left: 4px;
          }
        }
        @media (max-width: 950px) {
          .caption_text {
            font-size: 32px;
            line-height: 32px;
          }
          .action_button {
            padding: 6px 8px;
            margin-left: 4px;
          }
        }

        /*-----------------------------------------------------------*/
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          z-index: 1;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          z-index: 1;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps () {
  console.log(200)
  let url = "http://localhost:1337/advertisements"
  let res = await fetch(url)
  let data = await res.json()
  console.log(data)
  return {
    props: {
      one: 1, 
      str: "",
      ads: data
    }
  }
}
