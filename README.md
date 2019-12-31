# ColorComboMaker

This is a p5 sketch that makes use of a genetic algorithm to generate
foreground/background color combinations based on user input.

This is something I put together quickly after seeing [this video](https://www.youtube.com/watch?v=Zy_obitkyOE) from
Dan Shiffman (@shiffman) on The Coding Train.
Basically, all of the code is taken straight
from Dan Shiffman's Nature of Code sample code found [here on GitHub](https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp09_ga/NOC_9_04_Faces_interactiveselection). In this repo, he provides a fantastic skeleton around a genetic algorithm, with a very generic and reusable frame around population, DNA, and generation creation.  

The example this is taken from is about choosing faces, and as soon as I saw it,
I thought it would be interesting to try and make a program that could suggest
appealing color schemes to a user based on their input. Admittedly, trying to do
something like that with a genetic algorithm is maybe not the most appropriate
application of a genetic algorithm
but I thought it would be a fun experiment and all the code was right there so I tried it.

The main premise of what I did was change the DNA objects to use 6 genes: r, g, b color
values for foreground and r, g, b, color values for background. I also added
sliders to control the mutation rate and to control how frequently a child is a clone
of the parent rather than a mix of both parents.

If the video or this example is interesting, (if anyone ever even sees this? maybe a robot)
I suggest looking into the [Nature of Code Book](https://natureofcode.com/) and the
rest of the video series.

The code of the Nature of Code series is licensed under the GNU Lesser General Public License 2.1
according to the [Nature of Code website](https://natureofcode.com/). 
