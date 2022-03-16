
const Footer = () => {
  return (
    <>
      <div className="section footer_section">
        <div className="footer">
          <div className="footer_left">
            <ul>
              <li><a href="">О клинике</a></li>
              <li><a href="">Врачи</a></li>
              <li><a href="">Платные услуги</a></li>
            </ul>
            <ul>
              <li><a href="">Информация по ОМС</a></li>
              <li><a href="">COVID-19</a></li>
            </ul>
          </div>
          <div className="footer_right">
            <div className="footer_buttons">
              <button className="action_button green_button">Записаться на прием</button>
              <button className="action_button crimson_button">Вызвать медсестру на дом</button>
            </div>
            <div className="contacts">
              <ul>
                <li className="header_phone_number">+7 (988) 555-35-55</li>
                <li className="header_phone_number">+7 (8722) 555-35-55</li>
                <li className="email">clinic@mail.ru</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer_section {
          background-color: white;
        }
        .footer,
        .footer_left,
        .footer_right {
          display: flex;
          flex-flow: row wrap;
        }
        .footer {
          justify-content: space-between;
        }
        .footer_left,
        .footer_right {
          justify-content: space-around;
          width: 40%;
        }
        .footer_left > ul > li {
          margin-bottom: 15px;
        }
        .footer_buttons > * {
          display: block;
          margin-bottom: 15px;
        }
        @media (max-width: 600px) { 
          .footer_buttons > button {
            padding: 5px 3px;
            margin: 8px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  )
}

export default Footer;