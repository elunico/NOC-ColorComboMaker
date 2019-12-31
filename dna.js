// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html


//Constructor (makes a random DNA)
class DNA {
  constructor(newgenes) {
    // DNA is random floating point values between 0 and 1 (!!)
    // The genetic sequence
    let len = 2; // Foreground and background
    this.cloneChance = 0.2;
    if (newgenes) {
      this.genes = newgenes;
    } else {
      this.genes = new Array(len);
      // for (let i = 0; i < this.genes.length; i++) {
      // background
      this.genes[0] = {
        red: random(1),
        blue: random(1),
        green: random(1)
      };
      // foreground
      this.genes[1] = {
        red: random(1),
        blue: random(1),
        green: random(1)
      };

      // }
    }
  }

  // Crossover
  // Creates new DNA sequence from two (this &
  crossover(partner) {

    if (this.cloneChance == 1) {
      return new DNA(this.genes);
    }

    let stops = Array(this.genes.length).map((v, i, arr) => i);
    let zerosNeeded = round(this.cloneChance * stops.length * 2);
    let zeros = Array(zerosNeeded).fill(0);
    stops = stops.concat(zeros);

    let child = new Array(this.genes.length);
    let crossover = floor(random(this.genes.length));
    for (let i = 0; i < this.genes.length; i++) {
      if (i > crossover) child[i] = this.genes[i];
      else child[i] = partner.genes[i];
    }
    let newgenes = new DNA(child);
    return newgenes;
  }

  // Based on a mutation probability, picks a new random character in array spots
  mutate(m) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < m) {
        this.genes[i] = {
          red: random(1),
          blue: random(1),
          green: random(1)
        };
      }
    }
  }
}