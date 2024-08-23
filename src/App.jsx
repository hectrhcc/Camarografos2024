import React from 'react';
import { Route, Link } from 'wouter';
/*import MyCheckbox from './MyCheckbox'; */
import Footer from './Footer';
import image1 from './assets/camarografo.png'
import image2 from './assets/camarografo2.png'
import image3 from './assets/footer.png'
import image4 from './assets/rayita.png'



function App() {
  return (
    <div className='max-w-screen-md mx-auto'>
      <div className='navbar'>
      <h1 className='text-center pb-2 pt-8 mt-0  md:w-1/2 lg:w-1/2 mx-auto'>Team Camarógraf@s Zona Norte</h1>
      <img src={image4} alt="Camarógrafo" className='mx-auto md:w-1/4 mt-0 pt-0 xs:w-1/3' />
      <nav className='w-full flex justify-center items-center'>
        <Link href="/" className="ml-2 mr-5 pb-4 xs:text-md md:text-lg lg:text-lg">Inicio</Link>
        <Link href="/previo" className="ml-2 mr-8 pb-4 xs:text-md xs:whitespace-nowrap md:text-lg lg:text-lg">Día Previo</Link>
        <Link href="/grabacion" className="mr-10 pb-4 xs:text-md md:text-lg lg:text-lg">Grabación</Link>
        <Link href="/postgrabacion" className="mr-10 pb-4 xs:text-md md:text-lg lg:text-lg">Post</Link>
      </nav>
      </div>

      <Route path="/">
        <h1 className="text-center">Camarógrafo/a Acreditado/a</h1>
        <img src={image1} alt="Camarógrafo" className='md:mt-14 xs:w-2/3 xs:mt-8 mx-auto w-1/2  rounded-full overflow-hidden' />
        <h1 className='text-center font-semibold'>Año 2024</h1>
        <Footer />
      </Route>

      <Route path="/previo">
        <h1 className="text-center">Día Previo</h1>
        <div className='mx-auto ml-8 mt-4 mb-4'>
        <h2 className=' mb-2 font-bold'>Verificar:</h2>
        <ul>
          <li><input type="checkbox"  />
          <label> Nombre y dirección del Establecimiento</label></li>
          <li><input type="checkbox"  />
          <label> Nombre de el/la Director/a Jefe UTP del Establecimiento</label></li>
          <li><input type="checkbox"  />
          <label> Nombre de el/la o los/las Docentes a grabar</label></li>
          <li><input type="checkbox"  />
          <label> Nombre de la agrupación y asignatura de cada Docente a grabar</label></li>
          <li><input type="checkbox"  />
          <label> Hora de presentación y horario de grabación</label></li>
        </ul>
        
        <h2 className='mt-4 mb-2 font-bold'>Preparar Equipo y Materiales</h2>
       {// <MyCheckbox label=" Baterias al 100% Celular o Cámara" />
        //<MyCheckbox label=" Casaca oficial"/>
        //<MyCheckbox label=" Credencial"/>
        //<MyCheckbox label=" Dispositivo de grabación (cámara o smarthpone)"/>
        }
        <h3 className='mt-4 mb-2 font-bold'>Material de grabación</h3>
        <input type="checkbox"  />
        <label> Trípode</label><br/>
        <input type="checkbox"  />
        <label> Credencial</label><br/>
        <input type="checkbox"  />
        <label> Casaca oficial</label><br/>
        <input type="checkbox"  />
        <label> Sobre módulo 2</label><br/>
        <input type="checkbox"  />
        <label> Sello de seguridad</label><br/>
        <input type="checkbox"  />
        <label> Soporte para smarthpone</label><br/>     
        <input type="checkbox"  />
        <label> Comprobante de grabación</label><br/>
        <input type="checkbox"  />
        <label> Adhesivo de identificación</label><br/>
        
        <input type="checkbox"  />
        <label> Certificado de inhabilidades</label><br/>
        
        <input type="checkbox"  />
        <label> Memoria microsd con adaptador</label><br/>
        <input type="checkbox" id="bateria" />
        <label for="bateria"> Baterias al 100% celular o cámara</label><br/>  
        <input type="checkbox"  />
        <label> Lápiz o plumón de tinta de secado rápido</label><br/>
        <input type="checkbox"  />
        <label> Dispositivo de grabación (cámara o smarthpone)</label><br/>
        
        <input type="checkbox"  />
        <label> Adaptador de SD para smarthpone o conector para memoria SD (OTG)</label><br/>

        <h3 className='mt-4 mb-2 font-bold'>Material de grabación con micrófono</h3>
        <input type="checkbox"  />
        <label> Audífonos</label><br/>
        <input type="checkbox"  />
        <label> Micrófono inalámbrico</label><br/>
        <input type="checkbox"  />
        <label> Pilas AAA</label><br/>
        <input type="checkbox"  />
        <label> Cargador de pilas</label><br/>
        <article className='mt-4 font-semibold'>En algunos casos tendrá que contactar telefónicamente a el docente día previo  (TP y NEEP)</article>
        <h2 className='text-lg font-bold text-justify mt-2 mb-4'>Instrucciones Llamada:</h2>
        <ul>
          <li>
          1) <span className='underline font-bold'>Presentación y motivo de la llamada</span>: Preséntese y confirme fecha, horario y dirección de la grabación, datos previamente entregados por el CTG.</li>
        <ol type="a">
          <li className='ml-8 mt-2'>a) <b>Camarógrafo/a</b>: Buenos días, ¿hablo con el/la <b>docente</b> (nombre de el/la docente)?</li>
          <li className='ml-8 mt-2'>b) Le llamo desde <b>“DocenteMás”, mi nombre es</b> (su nombre) <b>y soy el camarógrafo/a asignado para grabarlo/a el día</b>
                  (la fecha de grabación) a las (hora de la grabación), en la dirección (dirección del lugar de grabación).</li>
          <li className='ml-8 mt-2'>c) ¿Usted efectúa la especialidad de (indique la especialidad informada por su CTG)?. En caso de especificar una distinta,
                  debe informar a la brevedad a su CTG.</li>
        </ol>
        <li className='mt-4 '>2) <span className='underline font-bold'>Propósito de la llamada</span>: Solicítele que confirme en qué sala o espacio del colegio realizará la clase a ser grabada: Existen
dos posibles respuestas:</li>
        <ol type="a">
          <li className='ml-8 mt-2'>a) <span className='underline'>En Sala de clases</span>: Si indica que la clase <span className='underline'><b>será efectuada en una Sala de clases</b> tradicional</span>; entonces debe saltar a la 
            <b> pregunta 3</b>. Entonces, Usted deberá efectuar la grabación como se establece en el punto 4.1 de este instructivo, enten-
            diendo que el nivel de ruido no será un elemento que atente o perjudique la grabación de el/la docente.</li>
          <li className='ml-8 mt-2'>b) <span className='underline'>En un espacio o dependencia distinta a una Sala de Clases</span>: el/la docente Indica que la <span className='underline font-bold'>realizará en un espacio
            diferente a una Sala de Clases, por ejemplo: en un taller, al aire libre u otro espacio</span>. Infórmele que, para un mejor
            registro del audio, utilizará un Micrófono inalámbrico. Continúe en la pregunta 3.</li>
        </ol>
        <li className='mt-4'>3) <span className='underline font-bold'>Pregúntele sobre la o las actividades</span> que tiene planificadas para su clase y si usted debe tener algún cuidado especial.
Indague sobre los siguientes aspectos:</li>
<li><b>Camarógrafo/a</b>: Necesito preguntarle sobre algunos aspectos de la clase que desarrollará:</li>
<ol type="a">
<li className='ml-8 mt-2'>a) La o las actividades que se efectuarán en la clase: Indíqueme si debo tener algún cuidado en mi rol de camarógrafo en los desplazamientos que eventualmente debo efectuar al grabar. Por ejemplo, con herramientas, artefactos o utensilios
que los estudiantes puedan utilizar.</li>
<li className='ml-8 mt-2'>b) En la actividad a realizar durante la clase, <b>Si tiene planificado</b> el uso de herramientas, artefactos o utensilios que
puedan generar riesgo al realizar desplazamientos durante la grabación, como por ejemplo si en:</li>
<ul>
<li className='ml-14'>- Una clase de cocina, utilizarán batidoras,</li>
<li className='ml-14'>- Una clase de carpintería, utilizarán sierra eléctrica,</li>
<li className='ml-14'>- En construcción metálica, utilizarán galletero para cortar,</li>
<li className='ml-14'>- O, soldarán para armar una estructura metálica,</li>
<li className='ml-14'>- U otras actividades.</li>
</ul>
</ol>
<li className='mt-4'>4) <span className='underline font-bold'>Cierre del contacto telefónico</span>: Según lo conversado, <b>le confirmo la siguiente información</b>:</li>
<ol type="a">
<li className='ml-8 mt-2'>
a) <b>Su nombre es</b> (nombre del o la docente), la grabación se realizará el (fecha de grabación), a las (hora de la grabación),
en (dirección de la grabación).</li>
<li className='ml-8 mt-2'>
b) Confirma que su clase se realizará en una Sala de Clases: SI / NO.</li>
<ul>
<li  className='ml-16'><span className='underline'>Caso SI</span>: En Sala de Clases NO se requiere el uso de Micrófono inalámbrico, ya que el nivel de ruido no provocará
problemas en la calidad de audio a registrar.</li>

<li  className='ml-16'><span className='underline'>Caso NO</span>: En caso de efectuar la clase en taller u aire libre u otra dependencia distinta a una sala de clases, se debe
utilizar Micrófono inalámbrico para grabar correctamente el audio.</li>
</ul>
<li className='ml-8 mt-2'>c) La grabación de su clase requiere que …. (<b>Debe especificar las recomendaciones indicadas por el/la docente</b>).</li>
<li className='ml-8 mt-2'>d) Recuérdele a el/la docente: <b>“Favor, recuerde anticiparles a los y las estudiantes sobre mi visita”</b>.</li>
<li className='ml-8 mt-2'>e) <b>Despedida</b>: Gracias por su atención y por los datos proporcionados, que tenga un buen día.</li>
</ol>
        </ul>
        </div>
        <Footer />
      </Route>
      <Route path="/grabacion">
        <h1 className="text-center">Día de Grabación</h1>
        <img src={image2} alt="Camarógrafo" className='md:mt-14 xs:w-2/3 xs:mt-8 mx-auto w-1/2 ' />
        <div className='mx-auto ml-8 xs:ml-6 mt-4 mb-3'>
          <h2 className='font-bold text-justify mb-2'>Instrucciones:</h2>
            <div className='text-justify '>- Llegar 15 a 20 minutos antes</div>
            <div className='text-justify '>- Apagar celular antes de entrar al Establecimiento </div>
            <div className='text-justify'>- Si se graba con smarthpone activar modo avión</div>
          <h2 className='font-bold text-justify mt-4 mb-2'>Protocolo:</h2>
            <div className='text-justify '>- Llegar 15 a 20 minutos antes</div>
        </div>
        <Footer />
      </Route>

      <Route path="/postgrabacion">
        <h1 className="text-center w-1/2 mx-auto">Post-Grabación</h1>
        <div className='mx-auto ml-8 mt-4 mb-4'>
          <div className=''></div>
        </div>
        <Footer />
      </Route>
    </div>
  );
}

export default App;