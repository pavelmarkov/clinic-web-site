
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <title>Akropol</title>
      <link rel="icon" href="img/logo_.png" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
    <Footer/>
    <style jsx global>{`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
          }
          body {
            background-color: #f8f8f8;
          }
          .bold {
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            color: #333333;
          }
          .section {
            width: 100%;
            padding: 64px;
            max-width: 1440px !important;
            margin: 0 auto;
          }
          ul {
            list-style-type: none;
          }
          a {
            text-decoration: none;
            color: black;
          }
          .btn {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: #14b48c;
            border-radius: 50px;
            border: none;
            color: white;
            margin: auto 1rem;
            cursor: pointer;
          }
          .action_button {
            text-align: center;
            padding: 8px 16px;
            /* Color / Violet */
            border-radius: 50px;
            color: #ffffff;
            border: none;
            margin-left: 13px;
            cursor: pointer;
          }
          .green_button {
            background: #14b48c;
          }
          .crimson_button {
            background: #b43778;
          }
          .section_header_container {
            display: flex;

            align-items: flex-start;
            flex-direction: row;
          }
          .section_header {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: 48px;
            color: #333333;
          }
          .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
      `}</style>
  </div>
);

export default Layout;