import Title from  '../components/Title'
import Subtitle from '../components/Subtitle'
import Roadmap from '../components/RoadMap'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-navy-dark text-white flex flex-col items-center justify-start p-4'>
      {/* Title and Subtitle at the top */}
      <div className='w-full'>
        <Title/>
        <Subtitle/>
      </div>

      {/* Roadmap centered below */}
      <div className='flex-1 flex items-center justify-center w-full'>
        <Roadmap/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default HomePage