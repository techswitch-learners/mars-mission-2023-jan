const funFactsAboutMars = [
  "Mars is sometimes called the 'Red Planet' because it appears red in the night sky.",
  "Mars is the fourth planet from the sun.",
  "Mars is about half the size of Earth.",
  "A year on Mars is almost twice as long as a year on Earth.",
  "The Martian day, called a 'sol,' is about 40 minutes longer than a day on Earth.",
  "Mars has two small moons, Phobos and Deimos.",
  "The tallest mountain in the solar system, Olympus Mons, is located on Mars.",
  "The atmosphere on Mars is very thin, so liquid water cannot exist on the surface.",
  "Mars is home to the largest volcano in the solar system, called Olympus Mons.",
  "Mars has the largest dust storms in the solar system, which can last for months.",
  "The first successful mission to Mars was NASA's Viking 1 mission in 1976.",
  "NASA has sent several rovers to explore Mars, including the most recent, Perseverance, in 2021.",
  "The Martian year begins on the Northern Hemisphere Spring Equinox.",
  "Mars is the only planet in the solar system that humans have sent rovers to explore.",
  "The average temperature on Mars is about -80 degrees Fahrenheit.",
  "Mars has the largest canyon in the solar system, called Valles Marineris.",
  "Mars was named after the Roman god of war.",
  "The Martian day/night cycle is very similar to Earth's, with 24 hours and 39 minutes in a Martian day.",
  "Mars is home to the second-highest mountain in the solar system, called Arsia Mons.",
  "There are plans to eventually send humans to Mars to explore and potentially even colonize the planet.",
  "In 1999 NASA lost a $125M Mars orbiter because of a calculation error, the engineers used measurements in inches and feet in their calculations instead of NASA’s metric values.",
  "Mars is the only planet in the universe which is entirely inhabited by robots, that we know of...."
];

export function Facts() {
  return <p>{funFactsAboutMars[Math.floor(funFactsAboutMars.length * Math.random())]}</p>;
}

