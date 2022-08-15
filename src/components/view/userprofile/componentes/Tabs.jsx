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
            className={toggleState === 1 ? "nav-link active" : "nav-link link-secondary"}
            onClick={() => toggleTab(1)}
          >
            Cultivos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={toggleState === 2 ? "nav-link active" : "nav-link link-secondary"}
            onClick={() => toggleTab(2)}
          >
            GochiMedias
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={toggleState === 3 ? "nav-link active" : "nav-link link-secondary"}
            onClick={() => toggleTab(3)}
          >
            Calendario
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {toggleState === 1 ? (
          <div className="fade show active">
            <div className="album pt-3 bg-white">
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
            <div className="album pt-3 bg-white">
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
                className="img-fluid py-3" 
                 alt="calendario siembra" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
