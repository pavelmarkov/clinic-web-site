import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <ul className="header_links">
          <li>
            <Link href="/">
              <img src="./img/emblem.svg" alt="АКРОПОЛЬ" className="emblem"></img>
            </Link>
          </li>
          <li>
            <a href=""><img src="./img/place_mark.svg" alt="" className="place_mark"></img>Адрес и режим работы</a>
          </li>
          <li><a href="">COVID-19</a></li>
        </ul>
        <div className="header_actions">
          <Link href="/appointment"><button className="header_button green_button">Записаться на прием</button></Link>
          <button className="header_button crimson_button">Вызвать медсестру на дом</button>
        </div>
        <div className="header_info">
          <ul>
            <li>
              <a >Обратный звонок</a>
            </li>
            <li className="header_phone_number">+7 (988) 655-13-13</li>
            <li className="header_phone_number">+7 (8722) 55-13-13</li>
          </ul>
        </div>
      </header>
      <nav className="header_menu">
        <ul>
          <li><a href="">О клинике</a></li>
          <li><a href="">Информация по ОМС</a></li>
          <li><a href="">Платные услуги</a></li>
          <li><a href="">Врачи</a></li>
          <li><a href="">Отзывы о нас</a></li>
          <li><a href=""><img src="./img/search.svg" alt="" className="search_icon"></img></a></li>
        </ul>
        <a className="blind_version_link"><img src="./img/red_eye.svg" alt="" className="red_eye_icon"></img>Версия для слабовидящих</a>
        <Link href="/login">
          <a className="signin_link">
            <img src="./img/signin.svg" alt="" className="signin_icon"></img>
            Войти
          </a>
        </Link>
      </nav>
      <style jsx>{`
        .header {
          position: absolute;
          max-width: 1439px;
          height: 88px;
          left: 0px;
          top: 0px;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          /* White */
          background: #ffffff;
          padding: 8px 63px;
          /* 
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;*/
          /* background-color: chocolate; */
          display: flex;

          justify-content: space-between;
          /* flex-wrap: wrap; */
          z-index: 30;
        }
        .header_links > li {
          display: inline-block;
        }
        .header_links,
        .header_actions,
        .header_info {
          /* background-color: bisque; */
          /* border-style: solid; */
          /* border-color: blueviolet; */
          /* border-width: 2px; */
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .header_links {
          justify-content: flex-start;
          align-items: center;
        }
        .header_links > li {
          padding-right: 32px;
        }
        .header_info > ul > li {
          text-align: right;
        }
        .header_info > ul > li:first-child {
          margin-bottom: 8px;
          text-decoration: underline;
          color: #2a37ab;
          cursor: pointer;
        }
        .header_info > ul > li > a {
          color: #2a37ab;
        }
        .header_links > li > a {
          text-decoration: underline;
          color: #2a37ab;
          cursor: pointer;
        }

        .header_button {
          text-align: center;
          padding: 8px 16px;
          /* Color / Violet */
          border-radius: 50px;
          color: #ffffff;
          border: none;
          margin-left: 13px;
          cursor: pointer;
        }

        .header_phone_number {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 100;
          font-size: 18px;
          line-height: 24px;
          /* identical to box height, or 133% */
          /* Text */
          color: #333333;
        }
        .emblem {
          /* width: 157px;
          height: 32px; */
          width: 15vw;
          height: 3vw;
        }
        .place_mark {
          margin-right: 11px;
        }
        .header_menu {
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          top: 88px;
          width: 95%;
          max-width: 1360px;
          height: 56px;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          display: grid;
          grid-template-columns: 4fr 1fr 1fr;
          background-color: #ffffff;
          /* background-color: yellowgreen; */
          padding-left: 24px;
          padding-right: 24px;
          align-items: center;
          z-index: 30;
        }
        .header_menu > ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          column-gap: 3.8em;

          font-family: "Roboto";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
        }
        .blind_version_link {
          text-align: center;
          margin-right: 18px;
          /*background-color: turquoise;*/
          text-decoration: underline;
          cursor: pointer;
        }
        .search_icon {
          color: #333333;
        }
        .signin_link {
          justify-self: end;
        }
        .signin_icon {
          width: 32px;
          height: 32px;
          vertical-align: middle;
          margin-right: 5px;
        }
        .red_eye_icon {
          vertical-align: middle;
          margin-right: 5px;
        }

        @media (min-width: 950px) {
        }
        @media (max-width: 1335px) {
          * {
            font-size: 12px;
            line-height: 14px;
          }
          .header_menu > ul {
            column-gap: 1.8em;
            font-size: 12px;
            line-height: 24px;
          }
          .header {
            padding: 8px 32px;
            grid-template-columns: 3fr 2fr 1.2fr;
          }
          .header_links {
            display: flex;
            justify-content: right;
          }
          .header_links > li {
            padding-right: 26px;
            justify-content: start;
          }
        }
        @media (max-width: 1050px) {
          * {
            font-size: 12px;
            line-height: 14px;
          }
          .header_menu > ul {
            column-gap: 1.8em;
            font-size: 12px;
            line-height: 24px;
          }
          .header {
            padding: 8px 32px;
            grid-template-columns: 3fr 2fr 1.2fr;
          }
          .header_links {
            display: flex;
            justify-content: right;
          }
          .header_links > li {
            padding-right: 26px;
            justify-content: start;
          }
          .header_phone_number {
            font-size: 12px;
            line-height: 12px;
          }
          .header_info > ul > li:first-child {
            margin-bottom: 2px;
          }
          .header_actions {
            flex-direction: column;
            justify-content: space-evenly;
          }
          .header_button {
            line-height: 10px;
          }
        }
        @media (max-width: 780px) {
          .header_button {
            font-size: 10px;
            padding: 5px 10px;
          }
          .header_links > li {
            padding-right: 15px;
          }
        }
        @media (max-width: 858px) {
          .header_menu {
            grid-template-columns: 8fr 2fr 1fr;
            padding-right: 12px;
            padding-left: 12px;
          }
          .blind_version_link {
            margin-right: 0px;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar;
