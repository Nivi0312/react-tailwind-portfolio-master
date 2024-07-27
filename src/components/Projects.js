import websiteImg1 from '../assets/train.jpg';
import websiteImg2 from '../assets/blockchain voting.jpg';
import websiteImg3 from '../assets/MERN Stack voting.jpg';
import websiteImg4 from '../assets/weather master.jpg';
export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'pothigai Ticket Booking System. Built with JQuery and JavaScript',
                link: 'https://github.com/Nivi0312/JQUERY-AND-JAVASCRIPT.git'
            },
            {
                image: websiteImg2,
                description: 'Online Voting System. Built with Blockchain,hardhat,metamask',
                link: 'https://github.com/Nivi0312/voting-Project.git'
            },
            
            {
                image: websiteImg3,
                description: 'Online Voting System. Built with MERN Stack',
                link: 'https://github.com/Nivi0312/Crud-VotingSystem-MERN-STACK.git'
            },
            {
            image: websiteImg4,
            description: 'Weather App Master.',
            link: 'https://github.com/Nivi0312/Weather-App-master.git'
        },
        ]
    }
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and Blockchain. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View projects</a>
                            </div>
                        </div>
                    </div>
                ))}             
               
            </div>
        </div>
    </section>
}