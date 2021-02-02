
const Servs = () => {
  return (
      <div className="section">
        <div className="section_header_container">
          <div className="section_header">Мы предлагаем</div>
          <button className="btn">Смотреть все</button>
        </div>
        <div className="container">
          <div className="serv">
            <img src="img/servs/034-heart 1.svg" alt=""></img>
            <div className="serv_signature">Кардиология</div>
          </div>
          <div className="serv">
            <img src="img/servs/032-kidneys 1.svg" alt=""></img>
            <div className="serv_signature">Урология</div>
          </div>
          <div className="serv">
            <img src="img/servs/036-womb 1.svg" alt=""></img>
            <div className="serv_signature">Гинекология</div>
          </div><div className="serv">
            <img src="img/servs/003-stethoscope 1.svg" alt=""></img>
            <div className="serv_signature">Терапевт</div>
          </div>
          <div className="serv">
            <img src="img/servs/026-test tube 1.svg" alt=""></img>
            <div className="serv_signature">Лаборатория</div>
          </div>
          <div className="serv">
            <img src="img/servs/007-electrocardiogram 1.svg" alt=""></img>
            <div className="serv_signature">УЗИ</div>
          </div>
        </div>
        <div className="serv_description">
          <img src="/img/servs/desc_photo_cardio.png" alt="" className="serv_desc_image"></img>
          <div className="serv_desc_container">
            <div className="desc_header">Кардиология</div>
            <ul className="desc_list">
              <li className="desc_list_item">Диагностика</li>
              <li className="desc_list_item">Первичная и вторичная профилактика СС3</li>
              <li className="desc_list_item">Коррекция образа жизни</li>
              <li className="desc_list_item">Медикаментозная терапия</li>
            </ul>
            <div className="serv_doc_container">
              <img src="/img/servs/doc1.png" alt=""></img>
              <div className="doc_desc">
                <div className="doc_spec">Врач-кардиолог</div>
                <div className="doc_name">Меджидова Асият Темирболатовна</div>
              </div>
            </div>
            <div className="serv_desc_buttons">
              <button className="btn violet_btn">Записаться на прием</button>
              <button className="btn transparent_btn">Цены</button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .serv {
            margin: 1rem;
            background: #ffffff;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            padding: 1rem;
            font-size: 18px;
            line-height: 24px;
            text-align: center;
            color: #333333;
          }
          .serv > img {
            margin-bottom: 0.15rem;
          }
          .serv_description {
            display: flex;
            background: #ffffff;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
            border-radius: 0px;
          }
          .serv_desc_image {
            width: 50%;
          }
          .serv_desc_container {
            width: 50%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .desc_header {
            font-weight: 500;
            font-size: 32px;
            line-height: 48px;
            color: #111111;
          }
          .desc_list {
            list-style-type: none;
            list-style-position: inside;
            color: #333333;
          }
          .desc_list_item {
            padding: 0.25rem;
          }
          .desc_list_item:before {
            display: inline-block;
            content: "-";
            width: 0.5em;
            margin-left: -0.25em;
          }
          .doc_desc {
            margin: 2rem;
          }
          .doc_spec {
            font-size: 14px;
            line-height: 24px;
            color: #555555;
          }
          .doc_name {
            font-size: 16px;
            line-height: 24px;
            color: #000000;
          }
          .serv_doc_container {
            display: flex;
            justify-content: start;
            align-items: center;
          }
          .violet_btn {
            background: #b43778;
          }
          .transparent_btn {
            background: #ffffff;
            border: 1px solid #0f8764;
            box-sizing: border-box;
            color: #0f8764;
          }
          .serv_desc_buttons > button {
            padding: 0.8rem 2.8rem;
          }
        `}</style>
      </div>
  )
}

export default Servs;