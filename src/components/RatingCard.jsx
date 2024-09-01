
import Star from '../assets/star.png'
import Star2 from '../assets/star2.png'
function RatingCard({ avatar, name, title, review, rating }) {
    return (
      <div className="min-w-[330px]  max-sm:max-w-[300px] sm:max-w-[330px] min-h-[244px] bg-white relative text-black">
        <div className="flex flex-col justify-between rounded-md  shadow-sm m  ">
  
        <div className='flex p-4 pl-5   '>
  {Array(Math.floor(rating)).fill(0).map(() => (
    <img src={Star} alt="star" />
  ))}
  
  {
    Array(5 - Math.floor(rating)).fill(0).map(() => (
      <img src={Star2} alt="empty star" />
      ))}
  
</div>
          <div className="flex items-center">
            {/* Your star icons here */}
          
          </div>
  
          <p className="  mt-6 p-4 text-sm ">
            {review}
          </p>
          
            <div className='w-10 h-10 absolute bottom-4 left-2  '>
                  <div className=' '>
                    <img src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full
                    " />
                  
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default RatingCard