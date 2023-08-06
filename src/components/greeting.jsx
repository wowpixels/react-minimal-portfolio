import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiOutlineCodepen, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai';

function Greeting(props) {
    return (
        <section className="min-h-screen p-10">
        <nav className="mb-12 flex justify-between">
          <h1 className="text-xl"><span className="font-bold text-blue-700">mini</span><span className='dark:text-slate-400'>folio</span></h1>
          <ul className="flex items-center gap-10">
            <li className='dark:text-slate-400 hover:cursor-pointer' 
            onClick={() => props.setDarkMode(!props.darkMode)}>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a className="btn" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-7xl">👋</h2>
          <h2 className="text-blue-600 font-bold text-5xl md:text-6xl lg:text-7xl">Johnny Cage </h2>
          <h3 className="text-3xl py-2 dark:text-slate-400">a ninja hero in software development</h3>
          <p className="text-md py-8 text-gray-500 max-w-xl leading-8 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sapiente nisi velit neque exercitationem, inventore alias iure quidem eligendi earum ad perferendis impedit fuga minima. Delectus molestias quos consequatur ipsa.</p>
        </div>
        <div className="flex justify-center gap-8 text-4xl">
          <a href="#"><AiOutlineCodepen /></a>
          <a href="#"><AiOutlineLinkedin /></a>
          <a href="#"><AiFillGithub /></a>
        </div>
      </section>
    );
}

export default Greeting;