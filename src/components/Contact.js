export default function Contact () {

    const config = {
        email: 'nivashini0302@gmail.com',
        linkedin: 'https://www.linkedin.com/in/nivashini-m-b6ba4b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }

    return (
        <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
                <p className='py-2'><span className='font-bold'>Email:</span> {config.email}</p>
                <p className='py-2'>
                    <span className='font-bold'>LinkedIn:</span> 
                    <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className='text-white underline'>
                        {config.linkedin}
                    </a>
                </p>
            </div>
        </section>
    );
}
