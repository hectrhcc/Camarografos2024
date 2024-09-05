import React from 'react';
import { Route, Link } from 'wouter';
import { useState, useEffect } from "react"
/*import MyCheckbox from './MyCheckbox'; */
import Footer from './Footer';
import image1 from './assets/camarografo.png'
import image2 from './assets/camarografo2.png'
import image3 from './assets/footer.png'
import image4 from './assets/rayita.png'



function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  return (
    <div className='max-w-screen-md mx-auto  lg:margin-4 sombra  bg-white bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 '>
      <div className='navbar'>
      <div className="flex items-center justify-end mb-4">
          <p className="text-white dark:text-gray-300 font-bold mr-2 mt-4">Dark mode</p>
          <label htmlFor="darkmode" className="bg-gray-300 dark:bg-gray-600 w-14 h-7 rounded-full cursor-pointer p-1 relative mr-2 mt-4">
            <input onClick={handleClick} type="checkbox" id="darkmode" className="sr-only peer" checked={darkMode} readOnly />
            <div className="w-5 h-5 bg-white rounded-full peer-checked:translate-x-7 transition-all"></div>
          </label>
        </div>
      <h1 className='text-center pb-2 pt-4 mt-0  md:w-1/2 lg:w-1/2 mx-auto'>Team Camarógraf@s Zona Norte</h1>
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
        <a href="https://drive.google.com/drive/folders/1tVLIoymAdyh1FOCAD8dD9EGFXnDx4911" target='_blank' rel="nofollow noopener noreferrer"><img src={image1} alt="Camarógrafo" className='md:mt-14 xs:w-2/3 xs:mt-8 mx-auto w-1/2  rounded-full overflow-hidden' /></a>
        <h1 className='text-center font-semibold'>Año 2024</h1>
        <Footer />
      </Route>

      <Route path="/previo">
        <h1 className="text-center">Día Previo</h1>
        <div className='mx-auto ml-2 mt-4 mb-4 p-2'>
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
          <li><input type="checkbox"  />
          <label> Planifique su tiempo de traslado, rutas factibles y locomoción</label></li>
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
          <li className='ml-4 mt-2'>a) <span className='font-semibold'>Camarógrafo/a</span>: Buenos días, ¿hablo con el/la <span className='font-semibold'>docente</span> (nombre de el/la docente)?</li>
          <li className='ml-4 mt-2'>b) Le llamo desde <span className='font-semibold'>“DocenteMás”, mi nombre es</span> (su nombre) <span className='font-semibold'>y soy el camarógrafo/a asignado para grabarlo/a el día</span>
                  (la fecha de grabación) a las (hora de la grabación), en la dirección (dirección del lugar de grabación).</li>
          <li className='ml-4 mt-2'>c) ¿Usted efectúa la especialidad de (indique la especialidad informada por su CTG)?. En caso de especificar una distinta,
                  debe informar a la brevedad a su CTG.</li>
        </ol>
        <li className='mt-4 '>2) <span className='underline font-bold'>Propósito de la llamada</span>: Solicítele que confirme en qué sala o espacio del colegio realizará la clase a ser grabada: Existen
dos posibles respuestas:</li>
        <ol type="a">
          <li className='ml-4 mt-2'>a) <span className='underline'>En Sala de clases</span>: Si indica que la clase <span className='underline'><span className='font-semibold'>será efectuada en una Sala de clases</span> tradicional</span>; entonces debe saltar a la 
            <b> pregunta 3</b>. Entonces, Usted deberá efectuar la grabación como se establece en el punto 4.1 de este instructivo, enten-
            diendo que el nivel de ruido no será un elemento que atente o perjudique la grabación de el/la docente.</li>
          <li className='ml-4 mt-2'>b) <span className='underline'>En un espacio o dependencia distinta a una Sala de Clases</span>: el/la docente Indica que la <span className='underline font-semibold'>realizará en un espacio
            diferente a una Sala de Clases, por ejemplo: en un taller, al aire libre u otro espacio</span>. Infórmele que, para un mejor
            registro del audio, utilizará un Micrófono inalámbrico. Continúe en la pregunta 3.</li>
        </ol>
        <li className='mt-4'>3) <span className='underline font-bold'>Pregúntele sobre la o las actividades</span> que tiene planificadas para su clase y si usted debe tener algún cuidado especial.
Indague sobre los siguientes aspectos:</li>
<li><span className='font-semibold'>Camarógrafo/a</span>: Necesito preguntarle sobre algunos aspectos de la clase que desarrollará:</li>
<ol type="a">
<li className='ml-4 mt-2'>a) La o las actividades que se efectuarán en la clase: Indíqueme si debo tener algún cuidado en mi rol de camarógrafo en los desplazamientos que eventualmente debo efectuar al grabar. Por ejemplo, con herramientas, artefactos o utensilios
que los estudiantes puedan utilizar.</li>
<li className='ml-4 mt-2'>b) En la actividad a realizar durante la clase, <span className='font-semibold'>Si tiene planificado</span> el uso de herramientas, artefactos o utensilios que
puedan generar riesgo al realizar desplazamientos durante la grabación, como por ejemplo si en:</li>
<ul>
<li className='ml-10'>- Una clase de cocina, utilizarán batidoras,</li>
<li className='ml-10'>- Una clase de carpintería, utilizarán sierra eléctrica,</li>
<li className='ml-10'>- En construcción metálica, utilizarán galletero para cortar,</li>
<li className='ml-10'>- O, soldarán para armar una estructura metálica,</li>
<li className='ml-10'>- U otras actividades.</li>
</ul>
</ol>
<li className='mt-4'>4) <span className='underline font-bold'>Cierre del contacto telefónico</span>: Según lo conversado, <span className='font-semibold'>le confirmo la siguiente información</span>:</li>
<ol type="a">
<li className='ml-4 mt-2'>
a) <span className='font-semibold'>Su nombre es</span> (nombre del o la docente), la grabación se realizará el (fecha de grabación), a las (hora de la grabación),
en (dirección de la grabación).</li>
<li className='ml-4 mt-2'>
b) Confirma que su clase se realizará en una Sala de Clases: SI / NO.</li>
<ul>
<li  className='ml-10'><span className='underline'>Caso SI</span>: En Sala de Clases NO se requiere el uso de Micrófono inalámbrico, ya que el nivel de ruido no provocará
problemas en la calidad de audio a registrar.</li>

<li  className='ml-10'><span className='underline'>Caso NO</span>: En caso de efectuar la clase en taller u aire libre u otra dependencia distinta a una sala de clases, se debe
utilizar Micrófono inalámbrico para grabar correctamente el audio.</li>
</ul>
<li className='ml-4 mt-2'>c) La grabación de su clase requiere que (<span className='font-semibold'>Debe especificar las recomendaciones indicadas por el/la docente</span>).</li>
<li className='ml-4 mt-2'>d) Recuérdele a el/la docente: <span className='font-semibold'>“Favor, recuerde anticiparles a los y las estudiantes sobre mi visita”</span>.</li>
<li className='ml-4 mt-2 mb-8'>e) <span className='font-semibold'>Despedida</span>: Gracias por su atención y por los datos proporcionados, que tenga un buen día.</li>
</ol>
        </ul>
        </div>
      <Footer />
      </Route>
      <Route path="/grabacion">
        <h1 className="text-center">Día de Grabación</h1>
        <img src={image2} alt="Camarógrafo" className='md:mt-14 xs:w-2/3 xs:mt-8 mx-auto w-1/2 ' />
        <div className='mx-auto ml-2 mt-4 mb-3 p-2'>
          <h2 className='font-bold text-justify mb-2'>Instrucciones antes de ingresar :</h2>

            <div className='text-justify '>- Llegar <span className='font-semibold'>15 a 20 minuto</span> antes</div>
            <div className='text-justify '>- <span className='font-semibold'>Apagar celular</span> antes de entrar al Establecimiento </div>
            <div className='text-justify'>- Si se graba con smarthpone activar <span className='font-semibold'>modo avión</span></div>
            <div className='text-justify'>- Confirmar que lleva <span className='font-semibold'>todos los materiales y el equipamiento</span> de ese día</div>
            <div className='text-justify'>- Recuerde ingresar utilizando su casaca y credencial de camarógrafo/a acreditado/a</div>
          <h2 className='font-bold text-justify mt-4 mb-2'>Protocolo:</h2>
            <div className='text-justify '>- Llegar <span className='font-semibold'>15 a 20 minutos</span> antes</div>
            <div className='text-justify '>- Preséntese con su <span className='font-semibold'>nombre y apellido</span></div>
            <div className='text-justify '>- Indique que usted es “<span className='font-semibold'>camarógrafo/a acreditado/a de DocenteMás</span>” y motivo de su visita</div>
            <div className='text-justify '>- Señale el nombre de el o los docentes a grabar.</div>
            <div className='text-justify '>- Solicite hablar con la persona encargada del proceso en el establecimiento</div>
          
            <h2 className='font-bold text-justify mt-4 mb-2'>Instrucciones ingresar aula:</h2>
            <div className='text-justify '>- Saludar al docente de manera cordial </div>
            <div className='text-justify '>- Presentarse como <span className='font-semibold'>“Camarógrafo/a acreditado/a de DocenteMás”</span>, señalando su nombre y apellido</div>
            <div className='text-justify '>- Solicite a el/la docente que informe a los estudiantes de su presencia de manera discreta y breve</div>
            <div className='mb-2 mt-2 text-justify font-semibold'>En caso de procedimientos diferenciados de grabación <a href="#Anexo" className='link'>ver anexo</a></div>
            <div className='text-justify '>- Determinar ubicación del equipamiento de grabación en el aula</div>
            <div className='text-justify '>- En caso de ser necesario, <span className='font-semibold'>cierre las ventanas</span> para evitar el ruido exterior.</div>
            <div className='text-justify '>- Ubique la cámara desde el costado donde las ventanas queden a su espalda.</div>
            <div className='text-justify '>- <span className='font-semibold'>Cierre las cortinas</span> que están en el lado opuesto a donde
            se ubicaría usted para evitar el contraluz</div>
            <div className='text-justify '>- Si no hay cortinas, sitúese a espaldas del sector que recibe mayor cantidad de luz</div>
            <div className='text-justify '>- Realice pruebas para verificar si cuenta con una imagen nítida y sin contraluz</div>
            <div className='text-justify '>- Si el aula tiene ventanales por todos lados, <span className='font-semibold'>maneje la altura de la cámara y su inclinación</span></div>
            <div className='text-justify '>- Ubiquese teniendo presente que debe lograr enfocar al docente de perfil </div>
            <div className='text-justify '>- Si usa proyector en la clase, debe realizar <span className='font-semibold'>pruebas de luminosidad</span> para no quedar a oscuras/contraluz</div>
            <div className='text-justify '>- <span className='font-semibold'>Montaje del equipamiento</span></div>
            <div className='text-justify ml-4'>- Instale su trípode y su cámara de video</div>
            <div className='text-justify ml-4'>- Compruebe que el nivel de carga de su batería</div>
            <div className='text-justify ml-4'>- Verifique los ajustes de su cámara</div>
            <div className='text-justify ml-4'>- Inserte la tarjeta de memoria SD </div>
            <div className='text-justify ml-4'>- Lea al docente las indicaciones de su credencial </div>
            <div className='text-justify ml-4'>- Solicite al docente que escriba su RUT en el sobre Módulo 2</div>
            <div className='text-justify ml-4'>- Facilité al docente lápiz (plumón)</div>
          <h2 className='font-bold text-justify mt-4 mb-2'>Iniciar Grabación:</h2>  
          <div className='text-justify '>- Grabar por 5 segundos el RUT de el/la docente</div>
          <div className='text-justify '>- Retire el Sobre Módulo 2 y diga en voz alta “<span className='font-semibold'>GRABANDO</span>”</div>
          <div className='text-justify '>- Realizar 1 Plano General con paneo, describa toda la sala con sus participantes</div>
          <div className='text-justify '>- Realizar durante toda la clase secuencia de paneos en gran angular, hasta que finalice la clase</div>
          <div className='text-justify ml-4 mt-1'>- Panee en gran angular lentamente y <span className='font-semibold'>sin detenerse en ningún grupo/estudiante</span> por más de 10 seg</div>
          <div className='text-justify ml-4 '>- <span className='font-semibold'>Siempre debe grabar en gran angular</span>. A menos que cuando en la sala de clases se <span className='font-semibold'>produzcan interacciones </span>
 entre docente y estudiantes</div>
<div className='text-justify ml-4 '>- Si <span className='font-semibold'>durante el paneo</span> hay interacciones, usted puede <span className='font-semibold'>utilizar el zoom y cerrarse en plano conjunto</span></div>
<div className='text-justify ml-4 '>- Estas tomas deben efectuarse <span className='font-semibold'>NO MÁS</span> de 10 veces y por un tiempo máximo de 10 segundos por toma</div>
<div className='text-justify ml-4 '>- Se encuentra con información en el pizarrón o en la proyección, realice zoom (Basta 1 vez en la grabación)</div>
<div className='text-justify ml-4 '>- Vuelva a gran angular y siga la secuencia de paneos</div>
<div className='text-justify ml-4 '>- <span className='font-semibold'>NO</span> haga zoom en guías, cuadernos o libros de los y las estudiantes</div>
<div className='text-justify ml-4 '>- Monitoree constantemente el tiempo de grabación en el visor de su cámara</div>
<div className='text-justify ml-4 '>- Siga la secuencia de paneos hasta el fin de la clase</div>

          <div className='text-justify '>- Indique al docente cuando se completen 35 minutos (<span className='font-semibold'>levantando la mano</span>)</div>
          <div className='text-justify '>- Finalizada la clase, grabe 10 segundos adicionales y luego detenga la grabación</div>
          <div className='text-justify '>- <span className='font-semibold'>DEBE parar la grabación al minuto 45 de la clase, como máximo</span></div>
          <h2 className='font-bold text-justify mt-4 mb-2'>Casos especiales Sin Paneo</h2>
          <ol type='a'>
          <li>a) Caso sala de clase con pocos estudiantes:</li>
          <li>b) Caso sala de clases pequeña</li>
          </ol>
        <h2 id="Anexo" className='font-bold mt-4 mb-2 underline text-lg'>Anexo</h2>
        <h2 className='mt-4 mb-3  font-bold text-justify mb-2'>Ed. física</h2>
        <div className='text-justify '>Tenga en cuenta que NO se pueden utilizar cables que puedan llegar a interferir con el normal desarrollo de la grabación o que incluso puedan provocar algún accidente.</div>

       <div className='text-justify mt-2'>Cautelando SIEMPRE que en todo momento se mantenga el paneo que permita observar y registrar la interacción entre docente y estudiantes y evitar ubicarse a espaldas del docente ya que esto provocará pérdida de audio.</div>

        <div className='text-justify mt-2 '>Camarógrafo debe desplazarse siguiendo a el docente, intentando grabarlo de perfil o desde el frente (nunca desde la espalda) y mantener una distancia no superior a 3 metros, de modo de asegurar y mantener en todo momento el registro del audio</div>

        <div className='text-justify mt-2 '>Asegúrese de contar con su trípode y utilizarlo de forma recogida sosteniendo en su o sus manos, o en forma de monopie</div>

        <div className='text-justify mt-2 '>Siempre mantenga la distancia focal en Gran Angular, realizando paneo que permita observar la interacción entre docente y los estudiantes.</div>

        <div className='text-justify mt-2 '>Usted como camarógrafo debe situarse a una distancia menor o máxima de 3 metros respecto a el/la docente, de modo de lograr la mejor calidad de audio y conservar al docente de perfil. Esto implica ubicarse a su derecha o izquierda mirándolo de costado y, tener a los alumnos en el fondo del plano. Si el/la docente se mueve, usted también debe desplazarse, manteniendo como máximo los 3 metros de distancia.</div>

        <div className='text-justify mt-2 '><span className='font-semibold underline'>Situación 1</span>: Grupo de estudiantes trabajando en una sola actividad.</div>

        <div className='text-justify mt-2 '>En este caso, deberá grabar en gran angular realizando paneo, SIEMPRE a menos de 3 metros del docente, ojalá de perfil o de frente para conservar la calidad del audio e imagen, intentando capturar la interacción docente – estudiantes.</div>

<div className='text-justify mt-2 '><span className='font-semibold underline'>Situación 2</span>: Grupo de estudiantes trabajando en estaciones.</div>

<div className='text-justify mt-2 '>En el caso que la clase se desarrolle con los estudiantes realizando actividades por estaciones de trabajo, usted deberá panear sacando la cámara del trípode o con la cámara en éste, en forma de monopie y realizar un desplazamiento</div>

        <h2 className='mt-8 mb-3 font-bold text-justify mb-2'>MTP</h2>

        <div className='text-justify mt-2 '><span className='font-semibold underline'>Grabación en un Espacio CERRADO</span></div>

<div className='text-justify mt-2 '>La clase se desarrolla en un espacio cerrado, pero es distinto a una sala de clases tradicional, por ejemplo, en talleres o laboratorio</div>

<div className='text-justify mt-2 '>Debe desplazarse por el espacio siguiendo a el/la docente, intentando grabarlo de perfil o desde el frente y de mantener una distancia no superior a 3 metros, de modo de asegurar y mantener en todo momento el registro del audio</div>

<div className='text-justify mt-2 '>Si no es posible desplazarse por el espacio, debe ubicarse en el lugar que le permita tener la visión más completa de los y las estudiantes y el/la docente</div>

<div className='text-justify mt-2 '>Considerar que, si en un momento no pudo desplazarse, pero luego las condiciones cambian (los y las estudiantes cambian su ubicación, se despeja alguna zona, el/la docente se desplaza a otra posición), debe seguir las indicaciones de desplazamiento</div>


<div className='text-justify mt-2 '><span className='font-semibold underline'>Grabación en Espacio ABIERTO</span></div> 

<div className='text-justify mt-2 '>En este caso, usted debe desplazarse siguiendo a el/la docente, intentando grabarlo de perfil o desde el frente (nunca desde la espalda) y mantener una distancia no superior a 3 metros, de modo de asegurar y mantener en todo momento el registro del audio.</div>


<div className='text-justify mt-2 '>Siempre debe grabar la interacción entre el/la docente y los/las estudiantes.</div>

<div className='text-justify mt-4 font-semibold text-lg'>Grabaciones CON USO de Micrófono inalámbrico</div>

<div className='text-justify mt-2 '><span className='font-semibold underline'>Espacio CERRADO - CON USO de Micrófono</span></div>

<div className='text-justify mt-2 '>Ubíquese en el lugar seleccionado para realizar la grabación, donde pueda ver al docente y la interacción con sus alumnos, siguiendo las indicaciones señaladas en el Protocolo Estándar de Grabación</div>

<div className='text-justify mt-2 '>Debe desplazarse sólo en los momentos en que “pierda de vista” al/la docente. En dichos casos debe seguirlo/a, intentando grabar siempre la interacción docente-alumno/a.</div>

<div className='text-justify mt-2 '>Si no es posible desplazarse por la sala, debe ubicarse en el lugar que le permita tener la visión más completa de el/la docente y los/las estudiantes</div>

<div className='text-justify mt-2 '><span className='font-semibold underline'>Espacio ABIERTO (aire libre) - CON USO de Micrófono</span></div>

<div className='text-justify mt-2 '>Usted debe desplazarse siguiendo a el/la docente, intentando grabarlo/a de perfil o desde el frente (no desde la espalda) y mantener una distancia no superior a 3 metros, de modo de asegurar y mantener en todo momento el registro del audio.</div>

<div className='text-justify mt-2 '>Si la especialidad a grabar requiere micrófono inalámbrico, compruebe de manera adicional los siguientes aspectos:</div>
<ul>
<li className='text-justify mt-2 ml-4'>a) Verifique que se escucha de manera correcta el audio del micrófono inalámbrico. En caso de presentarse algún
problema, debe cambiar la frecuencia, actualizar la vinculación entre receptor y transmisor o revisar el estado de
las pilas o de las conexiones.</li>
<li className='text-justify mt-2 ml-4'>b) Apoye la instalación del micrófono en el vestuario del o la docente, en un lugar adecuado que favorezca una
mejor recepción de su voz y le sea cómodo.</li>
<li className='text-justify mt-2 ml-4'>c) Mencione al docente que debe evitar rozar el micrófono ya sea con su cabello, ropa o sus manos ya que esto
interfiere en la recepción del sonido.</li>
<li className='text-justify mt-2 ml-4'>d) Antes de comenzar la grabación verifique que instaló correctamente las conexiones entre el micrófono y la
cámara de video o smartphone.</li>
<li className='text-justify mt-2 ml-4'>e) Debe confirmar que no existan interferencias que puedan afectar el audio de la grabación y que el docente se
escuche de manera clara a través de los audífonos.</li>
</ul>
        <h2 className='mt-8 mb-3 font-bold text-justify mb-2'>ED. Parvularia</h2>
        <div className='text-justify mt-2 '><span className='font-semibold underline'>Tiempo de grabación</span></div>
        <ul>
        <li className='text-justify mt-2 ml-2'>Sala Cuna 25 minutos</li>
        <li className='text-justify mt-2 ml-2'>Nivel Medio 30 minutos</li>
        <li className='text-justify mt-2 ml-2'>Nivel Transición 40 minutos</li>
        </ul>

        <div className='text-justify mt-2 '>Recuerde, en estos casos no utilizar cables (alargador eléctrico) ya que pueden afectar y llegar a interferir con el normal desarrollo de la grabación. A excepción que el nivel de energía en la batería genere riesgo para finalizarla.</div>

        <div className='text-justify mt-2 '>Antes de iniciar la clase, consulte y acuerde con el/la educador/a si es factible el uso de un alargador o extensión eléctrica. Para prevenir este inconveniente, se solicita revisar periódicamente o al menos 2 veces por semana, lo siguiente:</div>
        <ul><li className='text-justify mt-2 ml-2'>
        • Su dispositivo de grabación está funcionando correctamente, registrando imagen y audio sin dificultad</li>
        <li className='text-justify mt-2 ml-2'>
        • Las baterías de su cámara están en buen estado y tienen autonomía suficiente para efectuar las grabaciones diariamente planificadas</li>
        </ul>

        <div className='text-justify mt-2 '>En el caso que necesite utilizar un alargador eléctrico, debe asegurar que la instalación del cable no interrumpa, no entorpezca la dinámica de la clase; por lo que debe acomodar el cable por el perímetro de la sala, es decir, entre pared y mesas o mobiliario, de modo que el cable no sea visible y no llame la atención de los niños o niñas. Esta acción debe ser efectuada antes del inicio de la clase.</div>

        <div className='text-justify mt-2 '>En caso de sala cuna utilizar cubre calzado</div>

        <div className='text-justify mt-2 '>Al interior de la sala pueden encontrarse más adultos, usted debe identificar a la educadora evaluada antes de comenzar la grabación y tener en cuenta que ella será el foco de atención.</div>

        <div className='text-justify mt-2 '>Por otra parte, considere llevar pilas y/o baterías adicionales en caso que se descarguen o tenga más grabaciones planificadas.</div>

        <div className='text-justify mt-2 '>Considere que los primeros 5 minutos antes de grabar, los niños y niñas deben familiarizarse con usted y los implementos que llevará. Puede que le realicen preguntas o se acerquen a sus implementos, en este caso responda brevemente sus consultas sin promover una conversación más extensa ni causar mayor interés en ellos</div>

        <div className='text-justify mt-2 '>se enfatiza en la importancia de grabar a el/la educador/a y estudiantes de perfil, siempre resguardando quedar a espaldas de las ventanas y en un punto medio en la sala de clases</div>

        <div className='text-justify mt-2 '><span className='font-semibold underline'>Nivel Medio y Nivel Transición</span></div>

        <div className='text-justify mt-2 '>Verifique que se escucha de manera correcta el audio del micrófono inalámbrico</div>

<ul><li className='text-justify mt-2 ml-2'>• Instale el micrófono a el/la educador/a en un lugar adecuado de su vestuario, que favorezca la recepción de su voz y le sea cómodo</li>
<li className='text-justify mt-2 ml-2'>• Mencione a el/la educador/a que debe evitar rozar el micrófono ya sea con su cabello, ropa o sus manos ya que esto interfiere en la recepción del sonido.</li>
<li className='text-justify mt-2 ml-2'>• Antes de comenzar la grabación verifique que instaló correctamente las conexiones entre el micrófono y el dispositivo de grabación (cámara de video o smartphone).</li>
<li className='text-justify mt-2 ml-2'>• Debe corroborar que no existan interferencias que puedan afectar el audio de la grabación y que el/la educador/a se escuche de manera clara.</li></ul>

<div className='text-justify mt-2 font-semibold underline'>Grabación </div>

<div className='text-justify mt-2'>Debe leer las instrucciones que se encuentran en el reverso de la credencial de el/la camarógrafo/a para grabaciones en Educación Parvularia</div>

<div className='text-justify mt-2'>Acuerde la señal con la que avisará cuando la grabación alcance los 20, 25 o 35 minutos, según corresponda a Sala Cuna, Nivel Medio o Nivel Transición</div>

<div className='text-justify mt-2'>Solicite a el/la educador/a que anote su RUT en el Sobre Módulo 2, el que será utilizado para registrar los primeros 5 segundos de la grabación. También debe registrar la comuna y la región en la que se encuentra el establecimiento educacional.</div>

<div className='text-justify mt-2'>Para iniciar la grabación, solicite a el/la educador/a que se ubique a una distancia de 2 mts del lugar escogido para montar y ubicar el trípode con la cámara.</div>

<div className='text-justify mt-2'>Las grabaciones que se realizan a el educador de Educación Parvularia deben ser grabadas en su primera toma (por 5 segundos) sosteniendo el Sobre Módulo 2 con el RUT escrito por él o ella de forma previa.</div>

<div className='text-justify mt-2'>Grabe en primer plano por 5 segundos, el RUT registrado en el sobre del Módulo 2 y el rostro de el/la educador/a. Además, solicite que diga su RUT en voz alta para poder distinguirla de otros profesionales </div>

<div className='text-justify mt-2'>Luego que el/la educador/a dicte su RUT, diga en voz alta la palabra “GRABANDO” para que deje a un lado el Sobre Módulo 2 y sepa que debe iniciar la clase. En este momento continúa la grabación sin cortar y comienza a correr el tiempo de grabación de la clase</div>

<div className='text-justify mt-2'>Posteriormente, realice un Plano General con Paneo donde describa toda la sala con todos sus asistentes.</div>

<div className='text-justify mt-2'>Luego, siga lentamente en un gran angular los desplazamientos de el/la educador/a. Procure encuadrar y mostrar en todo momento a el/la educador/a y su interacción con los niños/as, excepto en las instancias de higiene íntima, en dichos casos debe enfocar otra parte de la sala y luego siga a el/la educador/a.</div>

<div className='text-justify mt-2'>Cuando los niños/as se agrupen y trabajen con distintos adultos, utilice zoom y cierre la toma en un plano conjunto para captar lo que hace el/la educador/a con los niños/as que se encuentra trabajando. Ocupe el mismo criterio cada vez que el/la educador/a se acerque a los estudiantes.</div>

<div className='text-justify mt-2'>Recuerde estar atento y monitorear el audio con los audífonos (cuando se deba utilizar micrófono inalámbrico) y del tiempo de grabación mediante el visor de su cámara.</div>

<div className='text-justify mt-2'>Avise 5 minutos antes de cerrar la grabación. En cada nivel, usted como camarógrafo/a debe avisar mediante la señal acordada de “levantar la mano” a el/la educador/a cuando falten 5 minutos para finalizar el tiempo de grabación:</div>
<ul>
<li className='text-justify mt-2 ml-2'>a) Sala Cuna: En este nivel se debe avisar a los 20 minutos.</li>
<li className='text-justify mt-2 ml-2'>b) Nivel Medio: En este nivel se debe avisar a los 25 minutos</li>
<li className='text-justify mt-2 ml-2'>c) Nivel Transición: En este nivel se debe avisar a los 35 minutos.</li>
</ul>
<div className='text-justify mt-2'>Siga la secuencia de grabación hasta completar los minutos establecidos como tiempo máximo en el respectivo nivel, ver en Tabla 1. Luego deje de grabar y diga en voz alta, según el nivel:</div>
<ul>
<li className='text-justify mt-2 ml-2'>a) Sala Cuna : Diga “SE CUMPLIERON LOS 25 MIN”, para que el/la educador/a sepa que ha cortado la grabación.</li>
<li className='text-justify mt-2 ml-2'>b) Nivel Medio: Diga “SE CUMPLIERON LOS 30 MIN”, para que el/la educador/a sepa que ha cortado la grabación.</li>
<li className='text-justify mt-2 ml-2'>c) Nivel Transición: Diga “SE CUMPLIERON LOS 40 MIN”, para que el/la educador/a sepa que ha cortado la grabación.</li>
</ul>
<div className='text-justify mt-2'>Nunca detenga la grabación. Si el/la educador/a le pide hacer una pausa durante la grabación, su respuesta debe ser “No estoy autorizado para detener la grabación, a menos que se cumplan los 30 minutos”. Este ejemplo corresponde a una clase de Nivel Medio. Para los niveles de sala cuna y nivel transición se utiliza el mismo mensaje</div>

<div className='text-justify mt-2'>Post grabacion Idem a lo estandar</div>
<h2 className=' mt-8 mb-3 font-bold text-justify '>NEEP</h2>
<div className='text-justify mt-2'>Dentro de la sala pueden encontrarse más adultos, usted debe identificar al o la educadora o docente evaluada antes de comenzar la grabación y tener en cuenta que ella o él será el foco de la grabación.</div>

<div className='text-justify mt-2 font-semibold underline'>Características y necesidades especiales</div>

<div className='text-justify mt-2'>Ausencia de lenguaje oral como medio de comunicación en algunos estudiantes: en esta situación, debe tener mayor resguardo con la ubicación para grabar y tomar en cuenta las recomendaciones de la educadora, con el objetivo de lograr captar las interacciones verbales y no verbales entre él/ella y los estudiantes.
</div>

<div className='text-justify mt-2 ml-2'>• Participación de estudiantes ciegos o en silla de ruedas en el aula: Para el primer caso, no podrá hacer cambios en la posición del mobiliario ni adecuar la iluminación de la sala para fines de la grabación. En el segundo caso, para evitar accidentes es necesario que usted no use cables durante la grabación para facilitar el libre desplazamiento de los estudiantes. Siga las instrucciones de la educadora, ya que estos aspectos los debe manejar en favor de los estudiantes</div>

<div className='text-justify mt-2 ml-2'>• Participación de estudiantes sordos en el aula: puede ocurrir que para llamar la atención de la educadora o de algún compañero golpeen la mesa muy fuerte o la muevan, lo que claramente generará ruido, esto es una manera con la que pueden comunicarse y participar, por lo que debe continuar con la grabación de forma normal.</div>

<div className='text-justify mt-2 ml-2'>• Estudiantes que llegan tarde o salen del aula: En algún momento dentro de la grabación puede que algún estudiante llegue tarde o abandone la sala y el o la educadora deba ir tras él. En este caso usted debe continuar la grabación dentro de la sala, dado que usted NO debe desplazarse.</div>

<div className='text-justify mt-2 ml-2'>• Proximidad física: En algunos casos puede que su presencia llame la atención de algunos estudiantes, en caso que se le acerquen más de lo habitual o le realicen preguntas, usted sea amable con él o ella y siga las recomendaciones entregadas por la educadora de cómo actuar ante ello.</div>

<div className='text-justify mt-2 ml-2'>• Lenguaje: podría suceder que algún estudiante diga palabras obscenas o socialmente inapropiadas, o comentarios despectivos, y las repita compulsivamente y en tonos más altos, o en ritmos vocales diferentes a los usados normalmente en conversaciones. Esto es característico de ciertos síndromes y debe tomarlo con normalidad, evitando reaccionar ante esto</div>

<div className='text-justify mt-2 ml-2'>• Instancias de higiene íntimas de los estudiantes en el aula: En cualquiera de estas situaciones, usted NUNCA debe grabarlas, independiente de que la educadora esté a cargo de ello. Durante esos momentos, debe enfocar a otros estudiantes hasta que el/la educadora continúe la clase</div>

<div className='text-justify mt-2 ml-2'>• Descompensaciones: Hay estudiantes que por sus características podrían descompensarse ante ciertas situaciones. En esos casos, SIEMPRE debe actuar siguiendo las indicaciones del o la educadora</div>

<div className='text-justify mt-2 font-semibold underline'>CASOS</div>

<div className='text-justify mt-2'>En algunos casos de descompensación las educadoras pueden decidir suspender su grabación. En tal caso, converse con ellas la posibilidad de re-agendar e informe a su CTG para que realice las gestiones pertinentes.</div>

<div className='text-justify mt-2'>Es posible que alguna educadora que usted deba grabar no tenga comunicación verbal o sea sordo/a o ciego/a. En tal caso, usted deberá grabar la clase complementando las instrucciones del presente instructivo con otras indicaciones particulares que pueden ser informadas por la dirección del establecimiento u oportunamente por su CTG</div>

<div className='text-justify mt-2'>En caso de llevar cosas que no utilizará en la grabación, consulte al o la directora donde puede dejarlas para evitar distracciones en los estudiantes que grabará.</div>

<div className='text-justify mt-2 font-semibold underline'>Día de la grabación</div>

<div className='text-justify mt-2'>En este grupo, es el o la docente quien decide si grabar su clase en aula de recursos o aula común. En cualquier situación, usted debe tener presente que su UBICACIÓN dentro del aula tendrá consideraciones diferentes según la alternativa que elija el o la docente</div>
<ul>
<li className='text-justify mt-2 ml-2'>
• Caso Aula Común: En el caso que el o la docente opte por desarrollar su clase en Aula común (sala de clases), usted debe seguir las instrucciones presentadas en el Protocolo Estándar de Grabación, en el punto 6 “Día de la grabación”, tema 6.3 “Preparación para la grabación”. Caso Aula de Recursos: Si el o la educadora decide realizar su clase en Aula de Recursos, usted debe tener en cuenta que generalmente estas salas son pequeñas,
como box u oficinas, por lo tanto, deberá tener presente las siguientes indicaciones:
</li>
<li className='text-justify mt-2 ml-2'>
• Ubique su dispositivo de grabación (cámara de video o smartphone) considerando la calidad del audio.
</li>
<li className='text-justify mt-2 ml-2'>
• No invada el espacio del estudiante que se encuentre más cercano a usted.
</li>
<li className='text-justify mt-2 ml-2'>
• Si en Gran Angular puede ver a todos los estudiantes y a la educadora, usted no necesitará panear.</li>
</ul>

<div className='text-justify mt-2'>Recuerde que, para el caso de los estudiantes ciegos, el/la educadora es quien maneja los aspectos relacionados con la luminosidad de la sala.</div>

<div className='text-justify mt-2'>Las grabaciones que se realizan a el/la docente o educador/a de NEEP deben ser grabadas en su primera toma (por 5 segundos) sosteniendo el Sobre Módulo 2 con el RUT escrito por él o ella de forma previa. mostrando su rostro </div>

<div className='text-justify mt-2 font-semibold underline'>Proceso de grabación</div>

<div className='text-justify mt-2'>Grabe en primer plano por 5 segundos, el RUT registrado en el sobre del Módulo 2 y el rostro de la educadora.
Además, solicite que diga su RUT en voz alta para poder distinguirla de otros profesionales o adultos que también puedan participar de la clase.</div>
<ul><li className='text-justify mt-2 ml-2'>
• Para ello, solicite a la educadora que se ubique a una distancia máxima de 2 mts del lugar escogido para montar y ubicar el trípode y cámara.</li>
<li className='text-justify mt-2 ml-2'>
• Recuérdele que debe completar todos los datos presentes en el Sobre Módulo 2, además del RUT debe completar la comuna y región donde se ubica el establecimiento.
</li>
</ul>
<div className='text-justify mt-2'>Luego que el/la docente o la educador/a dicte su RUT, avise a el/la docente o educador/a con una señal con la mano en alto para que deje a un lado el Sobre Módulo 2 y sepa que puede iniciar la clase. En este momento continúa la grabación sin cortar y comienza a correr el tiempo de 40 minutos de grabación de la clase</div>
<div className='text-justify mt-2'>Realice un paneo general donde describa toda la sala con sus participantes.</div>
<div className='text-justify mt-2'>Luego, siga lentamente gran angular los desplazamientos del o la educadora, y procure grabar en todo momento la interacción con los estudiantes, excepto en las instancias de higiene íntima, en dichos casos debe enfocar lo que hacen los demás estudiantes y luego, nuevamente siga al o la educadora
</div>
<div className='text-justify mt-2'>Cuando los niños/as se agrupen y trabajen con distintos adultos, utilice zoom y cierre la toma en un plano conjunto para captar lo que hace la educadora con los niños/as que en ese momento se encuentra trabajando. Ocupe el mismo criterio cada vez que el/la educadora se acerque a los estudiantes</div>
<div className='text-justify mt-2'>A los 30 minutos de grabación, haga una señal con la mano en alto al o la educadora y siga la secuencia de grabación hasta que la educadora le avise que terminó su clase o hasta completar los 40 minutos de grabación</div>
<div className='text-justify mt-2'>Al terminar la clase o alcanzar los 40 minutos, deje de grabar y haga una señal al o la educadora (con la mano en alto) para que sepa que ha cortado la grabación</div>
        </div>
        <Footer />
      </Route>

      <Route path="/postgrabacion">
        <h1 className="text-center w-1/2 mx-auto">Post-Grabación</h1>
        <div className='mx-auto ml-2 mt-4 mb-4 p-2'>
        <h2 className='font-bold text-justify mt-4 mb-2'>Mostrar</h2>
        <div className='text-justify ml-4 '>- Los 2 primeros y los 2 últimos minutos de la grabación</div>
        <h2 className='font-bold text-justify mt-4 mb-2'>Proteger la memoria</h2>
        <div className='text-justify ml-4 mt-2 '><span className='font-semibold'>1. Deje</span> la Memoria MicroSD <span className='font-semibold'>en su adaptador SD</span> y con el seguro de grabación en posición Lock</div>
        <ul>
        <li className='mt-2 ml-8'>a)  Si grabó con la tarjeta microSD utilizando el adaptador SD, retire la tarjeta de la cámara, manténgala en el
        adaptador y deslice el seguro de grabación a la posición “<span className='font-semibold'>Lock</span>”</li>
          <li className='ml-8'>b) Si grabó directamente en la tarjeta microSD, retire la tarjeta de la cámara, insértela en el adaptador SD
          y deslice el seguro de grabación a la posición “<span className='font-semibold'>Lock</span>”.</li>
          </ul>
          <div className='text-justify ml-4 mt-2  '><span className='font-semibold'>2. Escriba el RUT</span> del docente en el Adhesivo de Identificación con la info del Sobre Módulo 2 </div>
          <div className='mt-2'><span className='text-justify ml-4 font-semibold '>3. Guarde la Memoria SD dentro de su respectiva caja</span>: Recuerde, si grabó en una MicroSD, ésta  <span className='font-semibold'>DEBE</span> estar dentro del adaptador SD y guardarse de esa forma en la caja plástica</div>  
          <div className='mt-2' ><span className='text-justify ml-4 font-semibold'>4. Rotule de caja plástica</span>:Pegue a la caja plástica que contiene la microSD el Adhesivo de Identificación que previamente completó con el RUT del docente</div>  
          <div className='mt-2' ><span className='text-justify ml-4 font-semibold'>5. Selle la caja plástica de la tarjeta MicroSD</span>: Para ello, utilice el Sello de Seguridad de color rojo</div>
          <div className='mt-2' ><span className='text-justify ml-4 font-semibold'>6. Guarde en el “Sobre Módulo 2”</span>: Guarde la grabación (caja plástica con tarjeta MicroSD sellada e identificada) en el Sobre Módulo 2. </div>
          <div className='mt-2' ><span className='text-justify ml-4 font-semibold'>7. Selle el sobre</span> con la banda adhesiva del mismo</div>
          <div className='mt-2' ><span className='text-justify ml-4 font-semibold'>8. Pegue “QR Sobre”</span> en el espacio indicado para ello en el Sobre Módulo 2.</div>
          
  <h2 className='font-bold text-justify mt-4 mb-2'>Entregar</h2>
      <div className='text-justify ml-4 mt-2  '><span className='font-semibold'>1. Complete el Comprobante de grabación</span> con los datos del docente. Recuerde confirmar con el docente que el RUT se encuentre bien escrito (en sobre y caja plástica).Verificado,
use esta info. para completar el comprobante de grabación.</div>
      <div className='text-justify ml-4 mt-2  '><span className='font-semibold'>2. Firma</span>: Pida al docente que firme el comprobante de grabación y luego guárdelo (original y duplicado). <span className='font-semibold'>NO entregue ningún ejemplar al docente</span>. Ambos deben ser entregados posteriormente a su CTG</div>
      <div className='text-justify ml-4 mt-2  '><span className='font-semibold'>3. Entregue el Sobre Módulo 2</span> cerrado al docente</div>
      <div className='text-justify ml-4 mt-2  '><span className='font-semibold'>4. Recomiende</span> al docente guardar la grabación en un lugar fresco y seco, protegiéndola de factores
      que puedan dañarla, y evitar exponerla a los rayos del sol, fuentes de calor, humedad o a cualquier campo magnético</div> 
      <div className='text-justify ml-4 mt-2  '><span className='font-semibold'>5. En caso </span> que el docente <span className='font-semibold'>consulte qué hacer con el sobre</span>, señalar que el sobre debe ser entregado al Sostenedor o Encargado de Evaluación, quien coordinará el envío hacia DocenteMás</div>
          <ul>       
            <li className='ml-8'>a) Sugiérale al docente que haga entrega a la brevedad de su grabación, idealmente en un plazo
            no mayor a 5 días hábiles</li>
            <li className='ml-8'>b) El docente  podrá encontrar mayor información ingresando a su plataforma interna con su
            ClaveUnica o visitando el sitio <a className="link" href="https://www.docentemas.cl" target="_blank" rel="nofollow noopener noreferrer">www.docentemas.cl</a></li>
            <li className='ml-8'>c) Infórmele que puede scanear con su celular QR pegado en el sobre, para notificar a DocenteMás que ya cuenta con su clase grabada. Recomiéndele que realice esta acción ojalá durante el mismo día.</li>
          </ul> 
<h2 className='font-bold text-justify mt-4 mb-2'>Desmontar equipamiento y retirarse</h2>
      <div className='text-justify ml-4 mt-2 '>- Desmonte el equipamiento</div>
      <div className='text-justify ml-4 mt-2  '>- Guarde todos los implementos utilizados en la grabación (materiales y equipos)</div>
      <div className='text-justify ml-4 mt-2  '>- Cuadre el stock de sus materiales</div>
      <div className='text-justify ml-4 mt-2  '>- Despídase del docente, director/a o de otras personas que lo hayan asistido en su labor, agradeciendo sus gestiones.</div>
<h2 className='font-bold text-justify mt-4 mb-2'>Reportar grabaciones y entregar comprobantes de grabación a CTG</h2>
<div className='text-justify'>Debe entregar físicamente todos los comprobantes de grabación (original y duplicado) a su CTG. Procure ha-
cerlo lo antes posible, al menos 2 veces por semana como mínimo.
El comprobante de grabación le permite a usted, acreditar las grabaciones realizadas ante su CTG y, por
tanto, su posterior pago.</div>
        </div>
        <Footer />
      </Route>
    </div>
  );
}

export default App;