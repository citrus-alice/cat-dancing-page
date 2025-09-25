import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(Math.max(0.1, Math.min(3, speed)))
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAnimating(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [toggleAnimation])

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}