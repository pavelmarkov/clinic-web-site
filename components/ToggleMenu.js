

const ToggleMenu = (props) => {
  const {isOpen, setMenuState} = props
  return (
    <>
      <div id="toggle_links_wrapper" onClick={() => {setMenuState(!isOpen)}}>
        <div className={"circle icon" + (isOpen ? " close" : "")}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
      </div>
      <style jsx>{`
        /*-------------------------*/
        #toggle_links_wrapper {
          background: #14b48c;
          display:none;
          border-radius:50%;
          margin:10px;
          position: relative;
          padding:8px;
          cursor:pointer;
        }
        .circle {
          width:25px;
          height:25px;
          position:relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .line {
          position: absolute;
          height: 2px;
          width:100%;
          background:white;
          border-radius:8px;
          transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
        }
        .top {
          top:18%;
        }
        .middle {
          top:48%;
        }
        .bottom {
          top:78%;
        }
        .icon.close .top {
          transform:rotate(45deg);
          top:48%;
        }
        .icon.close .middle, .icon.close .bottom {
          transform:rotate(-45deg);
          top:48%;
        }
        /*-------------------------*/
        @media (max-width: 600px) {
          #toggle_links_wrapper{
            display:inline-block;
          }
        }
      `}</style>
    </>
  )
}

export default ToggleMenu;