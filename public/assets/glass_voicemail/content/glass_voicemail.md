# Glass Voicemail

This is a voicemail from my mom:\
![i_love_you.m4a](%PUBLIC_URL%/assets/glass_voicemail/i_love_you.m4a)

And here's that voicemail as a stained glass window:\
![grinding.png](%PUBLIC_URL%/assets/glass_voicemail/construction_photos/washed.png)

This window is a Voronoi diagram created from the amplitude peaks of the voicemail's soundwave.


---

## Background
For this work, I wanted to computationally generate a piece of stained glass. Computers are great at creating lines and polygons, and stained glass is a great medium for expressing those shapes in a lovely, tactile way.

I landed on [Voronoi diagrams](https://en.wikipedia.org/wiki/Voronoi_diagram) as a method for generating a glass pattern. A Voronoi diagram tesselates a plane into simple polygons based on a set of points on that plane. 

So now all I needed was to choose a set of points to use for the Voronoi diagram. I wanted to create a data visualization, so I needed to choose a set of points that represented some meaningful data. I found an old voicemail, and then:
- Sampled the amplitude peaks from the soundwave
- Used the amplitude peaks to create a set of points
- Used those points to create the Voronoi diagram. 

---


## Generating the pattern
[P5js code here.](https://editor.p5js.org/madeleinejane.andersen/full/mV_ucMXe_)

The soundwave of my mom's voicemail looks like this:
![soundwave.png](%PUBLIC_URL%/assets/glass_voicemail/code_photos/soundwave.png)

If you sample the amplitude peaks of that soundwave, you can represent the soundwave as discrete points:
![peak_samples.png](%PUBLIC_URL%/assets/glass_voicemail/code_photos/sampled_points.png)

That's a lot of points, so let's filter that down:
![filtered_samples.png](%PUBLIC_URL%/assets/glass_voicemail/code_photos/filtered_points.png)
I'm paring down the number of points, but I want to keep the general contour of the soundwave intact.

Now let's draw a Voronoi diagram using those points!
![voronoi.png](%PUBLIC_URL%/assets/glass_voicemail/code_photos/voronoi.png)
A Voronoi diagram divides the canvas up into polygons in an organic, visually interesting way that I really love.

And now we can pick some colors:
![iloveyou_colored.png](%PUBLIC_URL%/assets/glass_voicemail/iloveyou_colored.png)
I'm picking a sunset-themed color scheme to match the emotional tone of the voicemail. I'm highlighting the general contour of the soundwave with light yellow glass, adding some orange to complement it, and making the background dark blue so the other colors stand out. Then I'm adding some pops of light blue and purple to make it more visually interesting.

---

## Contruction

1. Cut out the paper pattern using a ruler and a craft knife, and glue the paper pieces to sheets of glass
![paper.png](%PUBLIC_URL%/assets/glass_voicemail/construction_photos/paper_2.png)


1. Use the paper pieces as a cutting guide, and cut out the glass using a scoring tool and pliers
![cutting.png](%PUBLIC_URL%/assets/glass_voicemail/construction_photos/cutting.png)

1. Grind down the edges to smooth out any ragged bits from the cutting stage
![grinding.png](%PUBLIC_URL%/assets/glass_voicemail/construction_photos/grinds_complete_rotated.png)

1. Wash the pieces and label them
![washed.png](%PUBLIC_URL%/assets/glass_voicemail/construction_photos/washed.png)

1. Wrap the edges in copper foil
> [picture of foiling]

1. Soldering
> [picture of soldering]

1. Framing
> [picture of framing]

---

## Future development
I'd love to build a frame that has inset LED lights behind the glass, and use individually addressible LEDs to make the piece light up in an interesting pattern.

Incidentally, the copper foil is conductive and a stained glass window forms a circuit. I'm going to be doing some further investigation into whether I might be able to make stained glass that is touch responsive.

---

## Stats
- Pieces: 121
- Pieces I had to recut because I broke something: 11
- Cuts on my hands: 9
- Trips to the glass store: 2
- Times I got in trouble for stealing a lamp at the fabrication lab: 1
- Hours spent (approximate, so far): 30









