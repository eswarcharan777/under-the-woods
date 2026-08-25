export default function LogoBg({ size = 400, opacity = 0.12 }) {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: `${size}px`,
      height: `${size}px`,
      backgroundImage: 'url(/logo.jpg)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      opacity: opacity,
      pointerEvents: 'none',
      zIndex: 0,
    }} />
  )
}
