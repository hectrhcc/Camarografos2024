import React from 'react';
import { Route, Link } from 'wouter';
/*import MyCheckbox from './MyCheckbox'; */
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
        <footer>
        <img src={image3} alt="Camarógrafo" className=' w-full md:mt-4 xs:mt-12 ' />
        </footer>
      </Route>

      <Route path="/previo">
        <h1 className="text-center">Día Previo</h1>
        <div className='mx-auto ml-8 mt-4 mb-4'>
        <h2 className=' mb-2 font-bold'>Verificar:</h2>
        <ul>
          <li>- Nombre y dirección del Establecimiento</li>
          <li>- Nombre de el/la Director/a Jefe UTP del Establecimiento</li>
          <li>- Nombre de el/la o los/las Docentes a grabar</li>
          <li>- Nombre de la agrupación y asignatura de cada Docente a grabar</li>
          <li>- Hora de presentación y horario de grabación</li>
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
        </div>
        
      </Route>
      <Route path="/grabacion">
        <h1 className="text-center">Día de Grabación</h1>
        <img src={image2} alt="Camarógrafo" className='md:mt-14 xs:w-2/3 xs:mt-8 mx-auto w-1/2 ' />
        <div className='mx-auto ml-8 mt-4 mb-4'>
          <h2 className='font-bold text-justify mb-4'>Instrucciones:</h2>
          <div className='text-justify '>- Llegar 15 a 20 minutos antes</div>
          <div className='text-justify'>- Apagar celular antes de entrar al Establecimiento </div>
          <div className='text-justify'>- Si se graba con smarthpone activar modo avión</div>
        </div>
      </Route>

      <Route path="/postgrabacion">
        <h1 className="text-center w-1/2 mx-auto">Post-Grabación</h1>
        <div className='mx-auto ml-8 mt-4 mb-4'>
          <div className=''></div>
        </div>
      </Route>
    </div>
  );
}

export default App;