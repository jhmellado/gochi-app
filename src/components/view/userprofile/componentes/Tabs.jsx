import React, { useState } from "react";
import CardProfile from "../../../component/CardProfile";

const Tabs = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <ul className="nav nav-tabs nav-justified mx-0">
        <li className="nav-item">
          <button
            className={toggleState === 1 ? "nav-link active" : "nav-link"}
            onClick={() => toggleTab(1)}
          >
            Cultivos Favoritos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={toggleState === 2 ? "nav-link active" : "nav-link"}
            onClick={() => toggleTab(2)}
          >
            Mis GochiMedias
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={toggleState === 3 ? "nav-link active" : "nav-link"}
            onClick={() => toggleTab(3)}
          >
            Calendario de cultivos
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {toggleState === 1 ? (
          <div className="fade show active">
            <div className="album py-5 bg-white">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                    <CardProfile nombre ={'cultivo'}/>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {toggleState === 2 ? (
          <div className="fade show active">
            <div className="album py-5 bg-white">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                    <CardProfile nombre={'gochimedia'}/>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {toggleState === 3 ? (
          <div className=" fade show active">
            <img src="https://easyjardin.cl/wp-content/uploads/2016/02/tabla02-1-1024x806.png"
                className="img-fluid" 
                 alt="calendario siembra" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
