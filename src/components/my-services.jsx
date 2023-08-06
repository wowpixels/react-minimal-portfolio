import Image from 'next/image'
import DesignImage from '../../public/icons/picture-dynamic-color.png';
import FrontendImage from '../../public/icons/flash-dynamic-color.png';
import BackendImage from '../../public/icons/sheild-dynamic-color.png';

function MyServices() {
    return(
        <section className="min-h-screen p-10 flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-900">
          <div className="text-center">
            <h3 className="text-5xl py-2 font-bold dark:text-slate-400">My Services</h3>
            <p className="text-md py-2 leading-8 max-w-xl mx-auto dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores, veritatis iure a quaerat molestiae ad dolorum ipsum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl py-6 text-center">
            <div className="bg-white flex flex-col gap-4 items-center  rounded-xl p-10 shadow-sm transition-all hover:shadow-lg dark:bg-slate-600 dark:text-slate-400">
              <Image src={DesignImage} alt={'Design'} width={100} height={100} />
              <h3 className="text-xl font-bold mt-4">Awesome Design</h3>
              <p className="leading-8">Deleniti odio rerum qui voluptas delectus voluptates.</p>
            </div>
            <div className="bg-white flex flex-col gap-4 items-center  rounded-xl p-10 shadow-sm transition-all hover:shadow-lg dark:bg-slate-600 dark:text-slate-400">
              <Image src={FrontendImage} alt={'Design'} width={100} height={100} />
              <h3 className="text-xl font-bold mt-4">Frontend in ReactJS</h3>
              <p className="leading-8">Dolorum ea et excepturi maxime ipsam sint eius libero praesentium</p>
            </div>
            <div className="bg-white flex flex-col gap-4 items-center  rounded-xl p-10 shadow-sm transition-all hover:shadow-lg dark:bg-slate-600 dark:text-slate-400">
              <Image src={BackendImage} alt={'Design'} width={100} height={100} />
              <h3 className="text-xl font-bold mt-4">Backend</h3>
              <p className="leading-8">Iure asperiores unde beatae ut voluptatibus consequatur tenetur.</p>
            </div>
          </div>
          
        </section>
    );
}

export default MyServices;