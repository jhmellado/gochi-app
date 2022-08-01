import React from "react";

const InfoNutricional = (props) => {
  return (
    <div
      className="py-3"
      style={{
        borderStyle: "solid none",
        borderWidth: "1px",
        borderColor: "#e7f6a8",
      }}
    >
      <h2 className="blog-post-title mb-1">Información Nutricional</h2>
      <br />
      <table
        className="table table-striped-columns"
        style={{ border: "4px solid #e7f6a8" }}
      >
        <tbody>
          <tr>
            <td colSpan="3">
              Porción: 1 unidad pequeña (80g) Porciones por envase:
            </td>
          </tr>
          <tr>
            <td></td>
            <td>100g</td>
            <td>1 porción</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Energía (Kcal)</td>
            <td>18</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Proteínas (g)</td>
            <td>0,9</td>
            <td>0,7</td>
          </tr>
          <tr>
            <td>Grasa total (g)</td>
            <td>0,2</td>
            <td>0,2</td>
          </tr>
          <tr>
            <td>Hidratos de carbono disponibles (g)</td>
            <td>2,7</td>
            <td>2,2</td>
          </tr>
          <tr>
            <td>Fibra dietética total (g)</td>
            <td>1,2</td>
            <td>1,0</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sodio (mg)</td>
            <td>5,0</td>
            <td>4,0</td>
          </tr>
          <tr>
            <td>Potasio (mg)</td>
            <td>237,0</td>
            <td>190,0</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>*</td>
          </tr>
          <tr>
            <td>Vitamina A (µ ER)</td>
            <td>42,0</td>
            <td>4%</td>
          </tr>
          <tr>
            <td>Vitamina C (mg)</td>
            <td>13,7</td>
            <td>18%</td>
          </tr>
          <tr>
            <td>Vitamina E (mg ET)</td>
            <td>0,5</td>
            <td>2%</td>
          </tr>
          <tr>
            <td>Ac. Fólico (µg)</td>
            <td>15,0</td>
            <td>6%</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Calcio (mg)</td>
            <td>10,0</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>Hierro (mg)</td>
            <td>0,3</td>
            <td>2%</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">* % en relación a la Dosis Diaria Recomendada</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoNutricional;
