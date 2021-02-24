import Link from 'next/link';
const ModileMenu = (props) => {
  const {isOpen, setMenuState} = props
  return (
    <>
      {isOpen ? 
      <div className="mobile_menu">
        <ul>     
          <Link href="/login" onClick={() => {setMenuState(false)}}>
            <a className="signin_link">
              <img src="./img/signin.svg" alt="" className="signin_icon"></img>
              Войти
            </a>
          </Link>          
          <li onClick={() => {setMenuState(false)}}><Link href="/"><a href="">О клинике</a></Link></li>
          <li onClick={() => {setMenuState(false)}}><Link href="/"><a href="">Информация по ОМС</a></Link></li>
          <li onClick={() => {setMenuState(false)}}><Link href="/"><a href="">Платные услуги</a></Link></li>
          <li onClick={() => {setMenuState(false)}}><Link href="/"><a href="">Врачи</a></Link></li>
          <li onClick={() => {setMenuState(false)}}><Link href="/"><a href="">Отзывы о нас</a></Link></li>
        </ul>
      </div> 
      : ""}
      <style jsx>{`
        .mobile_menu {
          position: absolute;
          width: 100%;
          height: 68%;
          background: #14b48c;
          z-index: 35;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 88px;
          max-width: 1440px;  
          left: 0; 
          right: 0; 
          margin-left: auto; 
          margin-right: auto; 
        }
        .mobile_menu > ul {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
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
        a { 
          color: white;
        }
      `}</style>
    </>
  )
}

export default ModileMenu;