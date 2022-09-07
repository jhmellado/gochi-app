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
            className={
              toggleState === 1 ? "nav-link active" : "nav-link link-secondary"
            }
            onClick={() => toggleTab(1)}
          >
            Cultivos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={
              toggleState === 2 ? "nav-link active" : "nav-link link-secondary"
            }
            onClick={() => toggleTab(2)}
          >
            GochiMedias
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={
              toggleState === 3 ? "nav-link active" : "nav-link link-secondary"
            }
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
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
                  <CardProfile nombre={"cultivo"} />
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
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                  <CardProfile nombre={"gochimedia"} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {toggleState === 3 ? (
          <div className=" fade show active">
            <table
              className="table table-striped"
              style={{ border: "4px solid #e7f6a8" }}
            >
              <tbody>
                <tr>
                  <td colSpan="13" className="text-center">
                    Calendario de cultivos
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={12} className="text-center bg-dark text-white">
                    Época de Siembra
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="bg-dark text-white">Meses</td>
                  <td>E</td>
                  <td>F</td>
                  <td>M</td>
                  <td>A</td>
                  <td>M</td>
                  <td>J</td>
                  <td>J</td>
                  <td>A</td>
                  <td>S</td>
                  <td>O</td>
                  <td>N</td>
                  <td>D</td>
                </tr>
                <tr>
                  <td>Acelga</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Ají</td>
                  <td className="bg-white" colSpan={6}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Ajo</td>
                  <td className="bg-white" colSpan={3}></td>
                  <td className="bg-success" colSpan={5}></td>
                  <td className="bg-white" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Albahaca</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Apio</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Berenjena</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Betarraga</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Brócoli</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Cebolla</td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success " colSpan={3}></td>
                </tr>
                <tr>
                  <td>Choclo</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Cilantro</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Coliflor</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Espinaca</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Lechuga</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Melón</td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={6}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Papas</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={3}></td>
                  <td className="bg-white" colSpan={2}></td>
                </tr>
                <tr>
                  <td>Pepino</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Perejil</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Pimentón</td>
                  <td className="bg-white" colSpan={6}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Porotos</td>
                  <td className="bg-success" colSpan={1}></td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Puerros</td>
                  <td className="bg-success" colSpan={5}></td>
                  <td className="bg-white" colSpan={3}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Rábanos</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Repollo</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Sandía</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Tomate</td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={2}></td>
                  <td className="bg-white" colSpan={3}></td>
                </tr>
                <tr>
                  <td>Zanahoria</td>
                  <td className="bg-success" colSpan={12}></td>
                </tr>
                <tr>
                  <td>Zapallo</td>
                  <td className="bg-white" colSpan={8}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
                <tr>
                  <td>Zapallo Italiano</td>
                  <td className="bg-success" colSpan={1}></td>
                  <td className="bg-white" colSpan={7}></td>
                  <td className="bg-success" colSpan={4}></td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
