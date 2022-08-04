import React, { useEffect } from "react";

const TerminosCondiciones = () => {
  useEffect(() => {
    document.title = "Gochi - Términos y condiciones";
  }, []);

  return (
    <div className="container ">
      <div class="row">
        <div className="col-11 col-lg my-5 mx-auto text-justify">
        <h1 className="text-center mb-5">Términos y condiciones de uso</h1>
        <p className="mb-5">
          <p>
            Es requisito necesario para la adquisición de los cursos que se
            ofrecen en este sitio, que lea y acepte los siguientes Términos y
            Condiciones que a continuación se redactan. El uso de nuestros
            servicios así como la compra de nuestros cursos implicará que usted
            ha leído y aceptado los Términos y Condiciones de uso en el presente
            documento. Para adquirir un curso, será necesario el registro por
            parte del usuario, con ingreso de datos personales fidedignos y
            definición de una contraseña.
          </p>
        </p>
    
        <h2>1. Licencia</h2>
        <p className="mb-5">
          <p>
            GOCHI a través de su sitio web concede una licencia limitada, no
            exclusiva, no transferible para que los usuarios hagan uso personal,
            no comercial de los cursos que ha comprado en este sitio web de
            acuerdo a los Términos y Condiciones que se describen en este
            documento. Esta licencia no incluye la reventa ni el uso comercial
            de los cursos ni de los contenidos que se muestran en la plataforma.
          </p>
        </p>

        <h2 id="uso-no-autorizado">2. Uso no autorizado</h2>
        <p className="mb-5">
          <p>
            El usuario no puede copiar ninguno de los cursos o contenidos de
            GOCHI, modificado o sin modificar, en un CD, sitio web o ningún
            otro medio, ni ofrecerlos para la redistribución gratuita o la
            reventa de ningún tipo para el beneficio de un tercero. De hacerlo,
            GOCHI podrá cancelar su cuenta en nuestra plataforma de cursos.
          </p>
        </p>
        <h2 id="uso-indebido">3. Uso indebido</h2>

        <p>
          Consideramos uso indebido la realización de cualquiera de las
          siguientes acciones:
        </p>
        <ul>
          <li>
            <p>
              Usar software u otras herramientas para extraer activos o
              contenidos de nuestra plataforma.
            </p>
          </li>
          <li>
            <p>
              Patrones de visualización que se correspondan con el uso de bots o
              programas de descargas y no con el uso humano, como completar los
              videos de las clases en pocos segundos y en secuencia o terminar
              cursos en pocos minutos
            </p>
          </li>
          <li>
            <p>
              Ver menos de 2 minutos de una clase y repetir ese comportamiento
              durante 30 o más clases en un mismo día.
            </p>
          </li>
        </ul>
        <p>
          <p>
            Si consideramos que has realizado un uso indebido de la plataforma,
            podemos tomar una o varias de las siguientes acciones:
          </p>
        </p>
        <ul>
          <li>
            Advertirte que has infringido nuestros términos y condiciones.
          </li>
          <li>
            <p>
              Limitar, suspender o eliminar tu acceso a ciertas o todas las
              funcionalidades de la plataforma.
            </p>
          </li>
          <li>Limitar, suspender o eliminar tu cuenta de la plataforma.</li>
          <li>Prohibirte crear otra cuenta en la plataforma.</li>
          <li>Informar de tu conducta a las autoridades competentes.</li>
        </ul>
        <p className="mb-5">
          <p>
            Podemos tomar alguna de estas medidas o todas ellas en función de
            los resultados de una evaluación de la actividad, que realizaremos
            con o sin previo aviso, advertencia preliminar o respuesta menor,
            bajo nuestro exclusivo criterio en cada caso y según lo consideremos
            apropiado. Asimismo, podremos adoptar otros enfoques que creamos
            pertinentes para hacer cumplir nuestras normas. La presente Política
            no limita en modo alguno ningún otro derecho o recurso a nuestra
            disposición.
          </p>
        </p>
        <h2 id="uso-no-autorizado">4. Propiedad</h2>
        <p className="mb-5">
          <p>
            El usuario no puede declarar propiedad intelectual o exclusiva a
            ninguno de los cursos o contenidos de GOCHI, modificado o sin
            modificar. Todos los cursos y contenidos son propiedad de la
            empresa. En ningún caso esta compañía será responsable de ningún
            daño incluyendo, pero no limitado a, daños directos, indirectos,
            especiales, fortuitos o consecuentes u otras pérdidas resultantes
            del uso o de la imposibilidad de utilizar nuestros cursos.
          </p>
        </p>
        <h2>5. Modificación y cancelación de servicios</h2>
        <p className="mb-5">
          <p>
            GOCHI cambia y mejora constantemente sus servicios para brindar una
            mejor experiencia y calidad a sus usuarios. La empresa puede
            agregar, modificar o eliminar funciones, características,
            requisitos, promociones y servicios si lo considera necesario.
          </p>
        </p>
        <h2 id="uso-indebido">6. Términos adicionales</h2>
        <p>
          <p>
            <b>Cuenta: </b>Forma de identificación creada por el usuario que
            consta con un ID de acceso y contraseña para que pueda acceder a los
            servicios de GOCHI a través de la plataforma.
          </p>
        </p>
        <p>
          <p>
            <b>Cursos: </b>Espacio en el que el profesor imparte conocimiento
            sobre un tema determinado a un número de usuarios mediante la
            plataforma y a través de clases.
          </p>
        </p>
        <p>
          <p>
            <b>Carreras/Rutas: </b>Conjunto de cursos con una temática en común
            ordenados según un nivel de aprendizaje, con el fin de que los
            usuarios desarrollen capacidades sobre una temática específica.
          </p>
        </p>
        <p>
          <p>
            <b>Plataforma: </b>Se refiere al sitio web, plataforma virtual y
            otros medios digitales como nuestra aplicación para smartphone. Sus
            titulares corresponden a Gochi.
          </p>
        </p>
        <p>
          <p>
            <b>Condiciones: </b>Términos y condiciones particulares de cada
            suscripción.
          </p>
        </p>
        <p>
          <p>
            <b>Políticas: </b>Las políticas, tal como es la de Privacidad en
            conjunto de nuestros Términos y Condiciones rigen nuestra relación
            con el usuario dentro de nuestra plataforma.
          </p>
        </p>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
