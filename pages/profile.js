import Layout from '../components/Layout'
import { useContext } from 'react';
import UserContext from '../contexts/user';
const Profile = () => {
  const [userData, setUser] = useContext(UserContext);
  return (
    <Layout>
      <div className="section profile_container">
        <div className="user_info">
          <img src="./img/profile/profile_photo.jpg" alt="" onClick={() => {setUser({})}}></img>
          <div className="info">
            <div className="personal_info">
              <div className="name">Иванов Иван Иванович ({userData.identifier})</div>
              <div className="birth">12 октября 1984 г.</div>
            </div>
            <div className="contacts">
              <div className="contacts_header">Контакты:</div>
              <div className="phone">+7 (999) 123-45-67</div>
              <div className="email">pacient123@mail.ru</div>
            </div>
          </div>
        </div>
        <div className="tabs">
          <button className="tab_button tab_button_active">Заказанные услуги</button>
          <button className="tab_button">Заказанные документы</button>
        </div>
        <table>
          <tbody>
            <tr>
              <td>12.08.2020</td>
              <td>Биохимия расширенная мк</td>
              <td className="td_doc">Смирнов Иван Васильевич</td>
              <td>1 шт.</td>
              <td>3400 руб.</td>
            </tr>
            <tr>
              <td>12.08.2020</td>
              <td>Взятие биоматериаоа (кровь венозная)</td>
              <td className="td_doc">Рабаданова Хадижат Магомедовна</td>
              <td>1 шт.</td>
              <td>3400 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .profile_container {
          margin-top: 10%;
        }
        /*------ User Info ------*/
        .user_info {
          display: flex;
        }
        .user_info > img {
          border-radius: 50%;
          border: 3px solid #0F8764;
          width: 192px;
          height: auto;
        }
        .info {
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .info {
          color: #111111;
        }
        .name {
          font-size: 24px;
          line-height: 32px;
        }
        .contacts_header {
          color: #333333;
          font-size: 14px;
          line-height: 24px;
        }
        .phone, .email {
          font-size: 16px;
          line-height: 24px;
        }
        /*-------- Tabs (buttons) ---------*/
        .tabs {
          margin-top: 40px;
        }
        .tab_button {
          padding: 8px 16px;
          border: 1px solid #14B48C;
          box-sizing: border-box;
          border-radius: 10px;
          color: #14B48C;
          font-size: 18px;
          line-height: 20px;
          background-color: white;
          margin-right: 20px;
        }
        /* -------- Table ------- */
        table {
          margin-top: 40px;
          width: 80%;
          border-collapse: collapse;
        }
        td {
          border-bottom: 1px solid #14B48C;
          padding: 8px;
        }
        .td_doc::before {
          content: 'врач';
          margin-right: 4px;
          font-size: 12px;
          color: #333333;
        }
        .tab_button_active {
          background-color: #14B48C;
          color: white;
        }
      `}</style>
    </Layout>
  )
}

export default Profile;