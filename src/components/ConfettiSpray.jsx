import Confetti from "react-confetti"
import { useWindowSize } from 'react-use'

export default function ConfettiSpray ({ setHasConfetti }) {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={100}
      colors={['#fcc55b', '#026a67', '#ed973e', '#72b5bf', '#ffffff']}
      initialVelocityY={{ min: 18, max: 25 }} // More dramatic burst
      initialVelocityX={{ min: -8, max: 8 }} // More dramatic burst
      gravity={0.1} // Quick downward deceleration
      friction={0.97} // Particles lose speed quickly
      recycle={false}
      onConfettiComplete={() => setHasConfetti(false)}
      drawShape={ctx => {
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, 16 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }}
      tweenDuration={2800}
    />
  )
}