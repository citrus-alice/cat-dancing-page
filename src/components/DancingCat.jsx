import '../styles/animations.css'
import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'

function DancingCat() {
  const {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        style={{
          animationDuration: `${2 / animationSpeed}s`,
          '--animation-speed': animationSpeed
        }}
      >
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>

      <div className="controls">
        <button
          className="dance-button primary"
          onClick={toggleAnimation}
          aria-label={isAnimating ? 'Stop dancing animation' : 'Start dancing animation'}
        >
          {isAnimating ? '🛑 Stop Dancing' : '💃 Start Dancing'}
        </button>

        <div className="speed-controls">
          <label htmlFor="speed-slider" className="speed-label">
            Speed: {animationSpeed.toFixed(1)}x
          </label>
          <input
            id="speed-slider"
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={animationSpeed}
            onChange={(e) => changeSpeed(parseFloat(e.target.value))}
            className="speed-slider"
            aria-label="Animation speed control"
          />
          <div className="speed-buttons">
            <button
              className="speed-btn"
              onClick={() => changeSpeed(0.5)}
              aria-label="Set slow speed"
            >
              🐌 Slow
            </button>
            <button
              className="speed-btn"
              onClick={() => changeSpeed(1)}
              aria-label="Set normal speed"
            >
              🐱 Normal
            </button>
            <button
              className="speed-btn"
              onClick={() => changeSpeed(2)}
              aria-label="Set fast speed"
            >
              ⚡ Fast
            </button>
          </div>
        </div>
      </div>

      <div className="instructions">
        <p>Click the button or press <kbd>Space</kbd> to toggle dancing!</p>
        <p>Use the slider to control animation speed</p>
      </div>
    </div>
  )
}

export default DancingCat