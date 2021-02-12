const Step3 = (props) => {
  const {info, setInfo} = props
  function handleApproval() {
    alert(JSON.stringify(info))
    setInfo({...info, step: 2})
  }
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setInfo({...info, step: 2})}>&times;</span>
          <div className="section_header">Онлайн-запись на приём – Подтверждение записи</div>
          <div className="label">Ваш врач:</div>
          <div className="doc_name">Маллаев Руслан Шахбанович</div>
          <div className="datetime">вторник 17 августа, в 09:30</div>
          <div className="label">Ваш номер ОМС или ДМС</div>
          <input type="text" placeholder="Номер полиса"></input>
          <div className="label">Телефон</div>
          <input type="text" placeholder="Телефон"></input>
          <a href="" className="address"><img src="./img/place_mark.svg" alt="" className="place_mark"></img>Адрес и режим работы</a>
          <div className="cntnr">
            <span className="txt">Стоимость приема:</span>
            <span className="price">2500 рублей</span>
          </div>
          <div className="modal_footer">
            <span className="txt">Не забудьте взять паспорт</span>
            <button className="btn crimson_button sign_appointment" onClick={() => handleApproval()}>Записаться на прием</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal {
          display: block;
          /* Hidden by default */
          position: fixed;
          /* Stay in place */
          z-index: 100;
          /* Sit on top */
          padding-top: 100px;
          /* Location of the box */
          left: 0;
          top: 0;
          width: 100%;
          /* Full width */
          height: 100%;
          /* Full height */
          overflow: auto;
          /* Enable scroll if needed */
          background-color: rgb(0, 0, 0);
          /* Fallback color */
          background-color: rgba(0, 0, 0, 0.4);
          /* Black w/ opacity */
        }
      
        /* Modal Content */
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 3%;
          border: 1px solid #888;
          width: 80%;
          max-width: 860px;
          border-radius: 16px;
          position: relative;
        }
      
        /* The Close Button */
        .close {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          /* font-weight: bold; */
        }
      
        .close:hover,
        .close:focus {
          color: #B43778;
          text-decoration: none;
          cursor: pointer;
        }
        /* -------------------- */
        .label {
          font-size: 16px;
          /* line-height: 24px; */
          color: #333333;
          opacity: 0.6;
          margin-top: 5%;
          margin-bottom: 2%;
        }
        .doc_name, .datetime {
          font-size: 24px;
          line-height: 32px;
          color: #333333;
          display: inline-block;
          margin-right: 3%;
        }
        input {
          background: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 1.8rem;
          width: 50%;
          border: none;
          outline: none;
          padding: 0.5rem;
          padding-left: 0.8rem;
          color: rgba(51, 51, 51, 0.5);
        }
        .input::placeholder {
          font-size: 18px;
          line-height: 24px;
          color: rgba(51, 51, 51, 0.5);
        }      
        .place_mark {
          margin-right: 11px;
        }
        .address {
          display: block;
          text-decoration: underline;
          color: #2A37AB;
          font-size: 14px;
          line-height: 16px;
          margin-top: 5%;
        }
        .sign_appointment {
          padding: 40px;
          padding: 0.8rem 3.2rem !important;
          float: right;
        }
        .txt {
          font-size: 16px;
          line-height: 24px;
          color: #333333;
        }
        .price {
          color: #2A37AB;
          font-size: 16px;
          line-height: 32px;
          margin-left: 30px;
        }
        .cntnr {
          margin-top: 5%;
        }
        .modal_footer {
          margin-bottom: 2%;
        }
      `}</style>
    </>
  )
}

export default Step3;