# [fruitmachine](https://alxjnr.github.io/fruitmachine/)

This is a web app built using JS and DOM manipulation. This project is very CSS heavy and the design is semi-skeuomorphic. 
<br>
<br>
Users are able to place a 'bet' using points and spin the 3 wheels. When users land on 3 of the same icon, they win a jackpot which triples the points bet. Landing on two of the same icon nets double profit.

## Known Issues

- This project is currently not mobile friendly. This was a very early experiment into CSS.
- Sometimes one wheel may not spin, or a wheel might spin backwards. The reasoning for this is described below.

### Wheel Spinning Issue

This project uses the animation library anime.js to simulate a wheel 'spinning' along its axis. In reality, the wheel is a repeating image with a very large height property. Anime.js is being told to translate this image along its Y axis with a semi-random value. 
<br>
<br>
If this value is 5, the wheel will spin correctly, but if the next value is lower than 5, the wheel will begin to spin backwards. Fortunately, it's likely that the spin after that lower number will then be higher and the cycle repeats.

#Sources

This web app uses music created by me.
