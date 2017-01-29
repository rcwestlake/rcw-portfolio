import { TweenMax, staggerFrom, fromTo, Power4 } from 'gsap'

/* Applies to all components */

export const slideUpAnimation = (one, length = 2, delay = 0.5) => {
  const e1 = one

  TweenMax.staggerFrom([e1],
    length,
    {
      opacity: 0,
      y: 20,
      delay,
      ease: Power4.easeOut,
    }
  )
}

export const slideDownAnimation = (one, length = 2, delay = 0.5) => {
  const e1 = one

  TweenMax.staggerFrom([e1],
    length,
    {
      opacity: 0,
      y: -220,
      delay,
      ease: Power4.easeOut,
    }
  )
}

export const showText = (one, length = 2, delay = 0.5) => {
  const e1 = one

  TweenMax.staggerFrom([e1],
    length,
    {
      opacity: 0,
      delay,
      ease: Power4.easeOut,
    }
  )
}

/* --- Menu --- */

export const displayLogoAnimation = (logo) => {
  const e1 = logo

  TweenMax.staggerFrom(
    [e1],
    3,
    {
      opacity: 0,
      delay: 1,
      x: 550,
      y: -200,
      ease: Power4.easeOut,
    }
  )
}

export const headerAnimation = (header) => {
  const e1 = header

  TweenMax.fromTo(
    [e1],
    2,
    {
      opacity: 0,
      y: 900,
    },
    {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut,
    }
  )
}

export const loadBurger = (one, two, three) => {
  const e1 = one
  const e2 = two
  const e3 = three

  TweenMax.fromTo(
    [e1],
    1,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )

  TweenMax.fromTo(
    [e2],
    1,
    {
      opacity: 0,
      width: 0,
      delay: 0.2,
    },
    {
      opacity: 1,
      width: '100%',
    }
  )

  TweenMax.fromTo(
    [e3],
    1,
    {
      opacity: 0,
      width: 0,
      delay: 0.3,
    },
    {
      opacity: 1,
      width: '100%',
    }
  )
}

export const openMenuAnimation = (one, two, three, four) => {
  const e1 = one
  const e2 = two
  const e3 = three
  const e4 = four

  TweenMax.staggerFrom(
    [e1],
    1,
    {
      opacity: 0,
      y: 50,
      delay: 0.1,
      ease: Power4.easeOut },
    0.12
  )

  TweenMax.staggerFrom(
    [e2],
    1,
    {
      opacity: 0,
      y: 50,
      delay: 0.2,
      ease: Power4.easeOut },
    0.12
  )

  TweenMax.staggerFrom(
    [e3],
    1,
    {
      opacity: 0,
      y: 50,
      delay: 0.3,
      ease: Power4.easeOut },
    0.12
  )

  TweenMax.staggerFrom(
    [e4],
    1,
    {
      opacity: 0,
      y: 50,
      delay: 0.4,
      ease: Power4.easeOut },
    0.12
  )
}

export const leaveMenuAnimation = (one, two, three, four) => {
  const e1 = one
  const e2 = two
  const e3 = three
  const e4 = four

  TweenMax.staggerTo(
    [e1, e2],
    1,
    {
      opacity: 0,
      y: 20,
      delay: 0.1,
      ease: Power4.easeOut },
  )
  TweenMax.staggerTo(
    [e3, e4],
    1,
    {
      opacity: 0,
      y: 20,
      delay: 0.2,
      ease: Power4.easeOut },
  )
}

/* Home Page */
export const slideCards = (one, two) => {
  const e1 = one
  const e2 = two

  TweenMax.staggerFrom([e1],
    3,
    {
      opacity: 0,
      y: -300,
      delay: 0.75,
      ease: Power4.easeOut,
    }
  )
  TweenMax.staggerFrom([e2],
    3,
    {
      opacity: 0,
      y: 300,
      delay: 0.75,
      ease: Power4.easeOut,
    }
  )
}

/* Portfolio icons */

export const iconSlide = (one, length = 2, delay = 0.5) => {
  const e1 = one

  TweenMax.staggerFrom([e1],
    length,
    {
      opacity: 0,
      x: -120,
      delay,
      ease: Power4.easeOut,
    }
  )
}

export const slideVertically = (one, length = 2, distance, delay = 0.5) => {
  const e1 = one

  TweenMax.staggerFrom([e1],
    length,
    {
      opacity: 0,
      y: distance,
      delay,
      ease: Power4.easeOut,
    }
  )
}

export const slideHorizontally = (one, length = 2, distance, delay = 0.5) => {
  const e1 = one

  TweenMax.staggerFrom([e1],
    length,
    {
      opacity: 0,
      x: distance,
      delay,
      ease: Power4.easeOut,
    }
  )
}
