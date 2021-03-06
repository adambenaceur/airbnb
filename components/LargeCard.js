import Image from 'next/image';

function LargeCard({img,title,description, buttonText}) {
  return (
    <section className='relative mt-16 mx-64 cursor-pointer  '>
        <div className='relative h-96 min-w-[300px] cursor-pointer'>
            <Image 
                src={img} 
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
                
            />
        </div>
        <div className='absolute top-32 left-12'>
          <h3 className='text-4xl mb-3 w-64'>{title}</h3>
          <p>{description}</p>
          <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 transform duration-300 ease-out'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard