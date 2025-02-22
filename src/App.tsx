import { Heart } from 'lucide-react'
import './App.css'
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const [count, setCount] = useState(764);
  const [isLiked, setIsLiked] = useState(null as any);
  const handleLike = () => {
    if (isLiked) {
      setCount(count - 1);
      setIsLiked(false);
    } else {
      setIsLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-row items-center justify-center bg-[#fefefe]">
        <motion.button 
          onClick={handleLike}
          className="relative flex flex-row items-center justify-between cursor-pointer outline-none gap-x-4 text-[#71767b] hover-div"
        >
          <AnimatePresence>
              {!isLiked ?
                <Heart
                  size={35} />
                :
                <div
                  className={"w-full relative flex flex-row items-center justify-center" + (isLiked && ' p-4')}
                >
                  <motion.span
                    className="span-animation"
                  >
                  </motion.span>
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1, 
                      transition: { 
                        type: 'spring',
                        bounce: 0.5,
                        duration: 0.4,
                        delay: 0.2,
                        force: 1
                      } 
                    }}
                    className="absolute z-20"
                    xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"
                  >
                    <path fill="#f91880" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/>
                  </motion.svg>
                </div>
              }
            </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}

export default App
