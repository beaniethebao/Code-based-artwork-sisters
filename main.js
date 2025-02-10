let mgr;
let customFont;
let regularFont;
let lightFont;
let catLeft;
let catRight;
let sachet;
let bgMusic;
let bgMusicPhase2;
let bgMusicPhase3;

let currentPhase;

function preload() {
  sachet = loadImage("assets/sachet.png");
  catLeft = loadImage("assets/catleft.png");
  catRight = loadImage("assets/catright.png");
  customFont = loadFont("font/InknutAntiqua-Bold.ttf");
  regularFont = loadFont("font/InknutAntiqua-Regular.ttf");
  lightFont = loadFont("font/InknutAntiqua-Light.ttf");
  soundFormats("mp3");
  bgMusic = loadSound("assets/the-magic-of-hope-Phase-1.mp3");
  bgMusicPhase2 = loadSound("assets/winter-dew-Phase-2.mp3");
  bgMusicPhase3 = loadSound("assets/untitled-Phase-3.mp3");
}

function setup() {
  let phase = getURLParameter("phase");
  if (phase === "Intro") {
    currentPhase = new phaseIntro();
  } else if (phase === "1") {
    currentPhase = new phase1();
  } else if (phase === "2") {
    currentPhase = new phase2();
  } else if (phase === "3") {
    currentPhase = new phase3();
  } else if (phase === "Instruction") {
    currentPhase = new phaseInstruction();
  } else {
    currentPhase = new phaseIntro(); // Default
  }
  currentPhase.setup();
}

function draw() {
  background(0);
  if (currentPhase && currentPhase.draw) {
    currentPhase.draw();
  }
}

function keyPressed() {
  if (currentPhase && currentPhase.keyPressed) {
    currentPhase.keyPressed();
  }
}

function mousePressed() {
  if (currentPhase && currentPhase.mousePressed) {
    currentPhase.mousePressed();
  }
}

function mouseDragged() {
  if (currentPhase && currentPhase.mouseDragged) {
    currentPhase.mouseDragged();
  }
}

function getURLParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function phaseIntro() {
  this.setup = function () {
    createCanvas(windowWidth, windowHeight);
  };
  this.draw = function () {
    background(0);
    noStroke();

    fill(150);
    circle(-50, height, width / 2);
    circle(width / 5, height - 150, width / 4);
    circle(width / 3 - 50, height, width / 4);
    circle(width / 2, height, width / 4);
    circle(width / 5, (height * 5) / 8, width / 10);

    circle(width + 50, height, width / 2);
    circle((width * 4) / 5, height - 150, width / 4 - 100);
    circle((width * 2) / 3, height, width / 3);

    image(catLeft, width / 5, height / 3 + 100, width / 5, width / 5 + 50);
    image(
      catRight,
      (width * 3) / 5,
      height / 3 + 100,
      width / 5,
      width / 5 + 50
    );

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(height / 4);
    textFont(customFont);
    text("SISTERS", width / 2, 80);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(height / 50);
    textFont(regularFont);
    text("Press the 'I' key for instructions", width / 2, height - 50);

    this.drawStarIntro();
  };

  this.drawStarIntro = function () {
    let points = 4;

    let strokeColor = color(255);
    let fillColor = color(random(100));

    strokeWeight(4);

    stroke(strokeColor);
    fill(fillColor);

    beginShape();
    for (let j = 0; j < points * 2; j++) {
      let angle = (360 / (points * 2)) * j + random(-1, 1);
      let r = j % 2 === 0 ? 100 : 40;
      let x = width / 2 + cos(radians(angle)) * r;
      let y = (height * 2) / 3 + sin(radians(angle)) * r;
      curveVertex(x, y);
    }
    endShape(CLOSE);
  };

  this.keyPressed = function () {
    if (key === "J" || key === "j") {
      window.location.href = window.location.pathname + "?phase=1";
    } else if (key === "K" || key === "k") {
      window.location.href = window.location.pathname + "?phase=2";
    } else if (key === "L" || key === "l") {
      window.location.href = window.location.pathname + "?phase=3";
    } else if (key === "I" || key === "i") {
      window.location.href = window.location.pathname + "?phase=Instruction";
    }
  };

  this.getURLParameter = function (name) {
    return new URLSearchParams(window.location.search).get(name);
  };
}

function phaseInstruction() {
  this.setup = function () {
    createCanvas(windowWidth, windowHeight);
  };
  this.draw = function () {
    background(0);
    noStroke;

    fill(200);
    textAlign(CENTER, CENTER);
    textSize(height / 13);
    textFont(customFont);
    text("INSTRUCTIONS", width / 2, 50);

    textAlign(LEFT, RIGHT);
    textSize(20);
    textFont(customFont);
    text("Abstract", 50, 110 + height / 16);
    text("General Controls", 50, 470 + height / 16);
    text("Phase 1: Seeking the deceased", width / 2 + 50, 110 + height / 16);
    text(
      "Phase 2: Experiencing disorganisation and distress",
      width / 2 + 50,
      290 + height / 16
    );
    text(
      "Phase 3: Undergoing reorganisation",
      width / 2 + 50,
      500 + height / 16
    );

    textAlign(LEFT, RIGHT);
    textSize(15);
    textFont(regularFont);
    //Abstract
    text(
      "This project is inspired by the often-overlooked grieving behaviours",
      50,
      140 + height / 16
    );
    text(
      "of young children. Through an abstract storytelling style, viewers",
      50,
      170 + height / 16
    );
    text(
      "can experience the three phases of the inner emotional struggle that",
      50,
      200 + height / 16
    );
    text(
      "the character, a kitten who has lost her sister, is going through.",
      50,
      230 + height / 16
    );
    text(
      "The project aims to raise awareness of the grieving behaviours and",
      50,
      260 + height / 16
    );
    text(
      "emotional journey of young children while delivering a message",
      50,
      290 + height / 16
    );
    text(
      "of acceptance and hope. The key visual, the Pole Star, symbolises",
      50,
      320 + height / 16
    );
    text(
      "the lost loved one, conveying that they will always be with the",
      50,
      350 + height / 16
    );
    text(
      "children in their continuous journey of overcoming grief and will",
      50,
      380 + height / 16
    );
    text(
      "become a part of their identity as they grow up.",
      50,
      410 + height / 16
    );
    //General controls
    text("J, K, L: Navigate through the phases", 50, 500 + height / 16);
    text("M: Toggle music on/off", 50, 530 + height / 16);
    text("I: Open instructions", 50, 560 + height / 16);
    //Phase 1
    text("W, A, S, D: Move", width / 2 + 50, 140 + height / 16);
    text("Up Arrow: Jump", width / 2 + 50, 170 + height / 16);
    text("E: Star", width / 2 + 50, 200 + height / 16);
    text("C: Change maze colour", width / 2 + 50, 230 + height / 16);
    //Phase 2
    text("Mouse: Draw", width / 2 + 50, 320 + height / 16);
    text("Click the Sack: Get random words", width / 2 + 50, 350 + height / 16);
    text("Drag: Move words", width / 2 + 50, 380 + height / 16);
    text("Microphone: Enable to interact", width / 2 + 50, 410 + height / 16);
    text("1-8: Change pen colour", width / 2 + 50, 440 + height / 16);
    //Phase 3
    text("Click: Create particles", width / 2 + 50, 530 + height / 16);
    text("E: Change particles' shape", width / 2 + 50, 560 + height / 16);
    text("C: Change kaleidoscope segments", width / 2 + 50, 590 + height / 16);
  };

  this.keyPressed = function () {
    if (key === "J" || key === "j") {
      window.location.href = window.location.pathname + "?phase=1";
    } else if (key === "K" || key === "k") {
      window.location.href = window.location.pathname + "?phase=2";
    } else if (key === "L" || key === "l") {
      window.location.href = window.location.pathname + "?phase=3";
    } else if (key === "I" || key === "i") {
      window.location.href = window.location.pathname + "?phase=Instruction";
    }
  };

  this.getURLParameter = function (name) {
    return new URLSearchParams(window.location.search).get(name);
  };
}

function phase1() {
  let preloadTimer = 0;
  let fadeAlphaBg = 0;
  let fadeAlphaText = 0;
  let preloadDone = false;

  let cam;
  let angleX = 0;
  let angleY = 0;
  let walls = [];
  let floor;
  let ceiling;
  let player;
  let isJumping = false;
  let jumpVelocity = 0;
  let gravity = 1;
  let boxes = [];
  let polys = [];
  let t = 0;
  const numPolys = 5;
  let textureGraphics;
  let lastColorChangeTime = 0;
  const colorChangeInterval = 18000;
  let stars = [];

  this.setup = function () {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    textureGraphics = createGraphics(windowWidth, windowHeight);
    for (let j = 0; j < numPolys; j++) {
      this.createPoly();
    }
    this.generateTexture();

    // Create floor and ceiling
    floor = new this.Floor(0, 0, 0);
    ceiling = new this.Ceiling(0, -1800, 0);

    // Create maze wall
    boxes.push(new this.Box(950, -280, 1000, 1500, 800, 40));
    boxes.push(new this.Box(-1600, -280, 1000, 1000, 800, 40));
    boxes.push(new this.Box(180, -280, 720, 40, 800, 600));
    boxes.push(new this.Box(-300, -280, -900, 2000, 800, 40));

    // Create walls
    walls.push(new this.Wall(-2100, -900, 0, 90));
    walls.push(new this.Wall(2100, -900, 0, 90));
    walls.push(new this.Wall(0, -900, -2100, 0));
    walls.push(new this.Wall(0, -900, 2100, 0));
    cam = createCamera();

    // Position the player
    player = createVector(-2000, -300, 2000);
  };

  this.draw = function () {
    if (preloadTimer < 4) {
      preloadTimer += deltaTime / 1000;

      // Background fade-in (0s to 0.4s)
      if (preloadTimer >= 0 && preloadTimer <= 0.4) {
        fadeAlphaBg = map(preloadTimer, 0, 0.4, 0, 255);
      }
      // Background stay visible (0.4s to 3.6s)
      else if (preloadTimer > 0.4 && preloadTimer <= 3.6) {
        fadeAlphaBg = 255;
      }
      // Background fade-out (3.6s to 4s)
      else if (preloadTimer > 3.6 && preloadTimer <= 4) {
        fadeAlphaBg = map(preloadTimer, 3.6, 4, 255, 0);
      }

      // Text fade-in (0.4s to 1s)
      if (preloadTimer >= 0.4 && preloadTimer <= 1) {
        fadeAlphaText = map(preloadTimer, 0.4, 1, 0, 255);
      }
      // Text stay visible (1s to 3s)
      else if (preloadTimer > 1 && preloadTimer <= 3) {
        fadeAlphaText = 255;
      }
      // Text fade-out (3s to 3.6s)
      else if (preloadTimer > 3 && preloadTimer <= 3.6) {
        fadeAlphaText = map(preloadTimer, 3, 3.6, 255, 0);
      }

      // Preload background fade-in
      fill(0, fadeAlphaBg);
      rect(-width / 2, -height / 2, width, height);

      // Preload text fade-in
      fill(255, fadeAlphaText);
      textAlign(CENTER, CENTER);
      textSize(32);
      textFont(customFont);
      text("Phase 1: Where are you?", 0, 0);
    } else {
      preloadDone = true;
    }

    if (preloadDone) {
      if (millis() - lastColorChangeTime > colorChangeInterval) {
        this.generateTexture();
        lastColorChangeTime = millis();
      }
      textureGraphics.background(random(255), random(255), random(255), 10);
      this.drawClouds(textureGraphics);
      t += 0.0005;
      background(200);

      // Ambient light to illuminate the scene
      ambientLight(1000);

      texture(textureGraphics);

      // Remove old polygons and create new ones to maintain a fixed number
      polys = polys.filter((poly) => !poly.isExpired());
      while (polys.length < numPolys) {
        this.createPoly();
      }

      // Draw the floor
      floor.show();

      // Draw the ceiling
      ceiling.show();

      // Draw the walls
      for (let wall of walls) {
        wall.show();
      }

      // Draw the boxes
      for (let box of boxes) {
        box.show();
      }

      // Update and draw stars
      for (let i = stars.length - 1; i >= 0; i--) {
        stars[i].update();
        stars[i].show();
        if (stars[i].isExpired()) {
          stars.splice(i, 1);
        }
      }

      // Player movement
      let move = createVector(0, 0, 0);
      let forward = createVector(cos(angleY), 0, sin(angleY));
      let right = createVector(-sin(angleY), 0, cos(angleY));

      if (keyIsDown(87)) {
        // W key
        move.add(forward);
      }
      if (keyIsDown(83)) {
        // S key
        move.sub(forward);
      }
      if (keyIsDown(65)) {
        // A key
        move.sub(right);
      }
      if (keyIsDown(68)) {
        // D key
        move.add(right);
      }

      move.mult(20); // Increase the speed
      player.add(move);

      // Constrain player within the area in the middle of the Phase
      player.x = constrain(player.x, -1900, 1900);
      player.y = constrain(player.y, -4200, 0);
      player.z = constrain(player.z, -1900, 1900);

      // Check collision with boxes
      for (let box of boxes) {
        if (box.isPlayerNear(player)) {
          player.sub(move);
          break;
        }
      }

      // Player jump
      if (isJumping) {
        player.y -= jumpVelocity;
        jumpVelocity -= gravity;
        if (player.y >= -300) {
          player.y = -300;
          isJumping = false;
        }
      }

      // Update camera position based on player position
      cam.setPosition(player.x, player.y, player.z);
      cam.lookAt(
        player.x + cos(angleY),
        player.y + tan(angleX),
        player.z + sin(angleY)
      );
    }
  };

  this.keyPressed = function () {
    if (keyCode === UP_ARROW && !isJumping) {
      isJumping = true;
      jumpVelocity = 20;
    }

    if (key === "C" || key === "c") {
      this.generateTexture();
    }

    if (key === "E" || key === "e") {
      this.createFallingStar();
    }

    if (key === "M" || key === "m") {
      if (bgMusic.isLoaded()) {
        if (bgMusic.isPlaying()) {
          bgMusic.stop();
        } else {
          bgMusic.play();
          bgMusic.loop();
        }
      }
    }
    if (key === "J" || key === "j") {
      window.location.href = window.location.pathname + "?phase=1";
    } else if (key === "K" || key === "k") {
      window.location.href = window.location.pathname + "?phase=2";
    } else if (key === "L" || key === "l") {
      window.location.href = window.location.pathname + "?phase=3";
    } else if (key === "I" || key === "i") {
      window.location.href = window.location.pathname + "?phase=Instruction";
    }
  };

  this.getURLParameter = function (name) {
    return new URLSearchParams(window.location.search).get(name);
  };

  this.mouseDragged = function () {
    angleY += movedX * 0.005; // Mouse drag sensitivity
    angleX -= movedY * 0.005; // Mouse drag sensitivity
    angleX = constrain(angleX, -PI / 2, PI / 2);
  };

  this.generateTexture = function () {
    polys = [];
    for (let j = 0; j < numPolys; j++) {
      this.createPoly();
    }
  };

  this.Poly = class {
    constructor(vertices, col, modifiers, lifespan = 5000) {
      // lifespan
      this.vertices = vertices;
      this.col = col;
      this.age = 0;
      this.lifespan = lifespan;
      if (!modifiers) {
        modifiers = [];
        for (let i = 0; i < vertices.length; i++) {
          modifiers.push(random(0.1, 0.8));
        }
      }
      this.modifiers = modifiers;
    }

    rand() {
      return this.distribute(random(1));
    }

    distribute(x) {
      return pow((x - 0.5) * 1.58740105, 3) + 0.5;
    }

    grow() {
      const grownVerts = [];
      const grownMods = [];
      for (let i = 0; i < this.vertices.length; i++) {
        const j = (i + 1) % this.vertices.length;
        const v1 = this.vertices[i];
        const v2 = this.vertices[j];
        const mod = this.modifiers[i];
        const chmod = (m) => {
          return m + (this.rand() - 0.5) * 0.02; //change
        };
        grownVerts.push(v1);
        grownMods.push(chmod(mod));
        const segment = p5.Vector.sub(v2, v1);
        const len = segment.mag();
        segment.mult(this.rand());
        const v = p5.Vector.add(segment, v1);
        segment.rotate(-PI / 2 + ((this.rand() - 0.5) * PI) / 16); //rotation
        segment.setMag(((this.rand() * len) / 2) * mod);
        v.add(segment);
        grownVerts.push(v);
        grownMods.push(chmod(mod));
      }
      return new this.constructor(
        grownVerts,
        this.col,
        grownMods,
        this.lifespan
      );
    }

    draw() {
      this.age += deltaTime;
      let alpha = 30;
      if (this.age < 500) {
        alpha = map(this.age, 0, 500, 0, 30); // Fade in for 0.5 seconds
      } else if (this.age > this.lifespan - 1000) {
        alpha = map(this.age, this.lifespan - 1000, this.lifespan, 30, 0); // Fade out for 1 second
      }
      textureGraphics.fill(
        red(this.col),
        green(this.col),
        blue(this.col),
        alpha
      );
      textureGraphics.noStroke();
      textureGraphics.beginShape();
      for (let v of this.vertices) {
        textureGraphics.vertex(v.x, v.y);
      }
      textureGraphics.endShape(CLOSE);
    }

    isExpired() {
      return this.age > this.lifespan;
    }
  };

  this.createPoly = function () {
    const v = [];
    const n = int(random(4, 7));
    for (let i = 0; i < n; i++) {
      let a = i * (TAU / n);
      v.push(createVector(random(width), random(height)));
    }
    polys.push(new this.Poly(v, color(random(255), random(255), random(255))));
  };

  this.drawClouds = function () {
    const numLayers = 20;
    for (let poly of polys) {
      let tempPoly = poly.grow().grow();
      for (let i = 0; i < numLayers; i++) {
        if (i == int(numLayers / 3) || i == int((2 * numLayers) / 3)) {
          tempPoly = tempPoly.grow().grow();
        }
        textureGraphics.push();
        textureGraphics.translate(random(width), random(height));
        textureGraphics.rotate(t + i * 0.1);
        tempPoly.grow().draw();
        textureGraphics.pop();
      }
    }

    this.rand = function () {
      return this.distribute(random(1));
    };

    this.distribute = function (x) {
      return pow((x - 0.5) * 1.58740105, 3) + 0.5;
    };
  };

  this.Wall = class {
    constructor(x, y, z, rotationYDegrees) {
      this.pos = createVector(x, y, z);
      this.rotationY = radians(rotationYDegrees); // Convert degrees to radians
    }

    show() {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      rotateY(this.rotationY);
      texture(textureGraphics);
      plane(4200, 1800);
      pop();
    }
  };

  this.Floor = class {
    constructor(x, y, z) {
      this.pos = createVector(x, y, z);
    }

    show() {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      rotateX(HALF_PI);
      texture(textureGraphics);
      plane(4200, 4200);
      pop();
    }
  };

  this.Ceiling = class {
    constructor(x, y, z) {
      this.pos = createVector(x, y, z);
    }

    show() {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      rotateX(HALF_PI);
      texture(textureGraphics);
      plane(4200, 4200);
      pop();
    }
  };

  this.Box = class {
    constructor(x, y, z, w, h, d) {
      this.pos = createVector(x, y, z);
      this.w = w;
      this.h = h;
      this.d = d;
    }

    show() {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      texture(textureGraphics);
      box(this.w, this.h, this.d);
      pop();
    }

    // Player stops within 100 pixels of the box
    isPlayerNear(player) {
      let dx = max(
        this.pos.x - this.w / 2 - player.x,
        0,
        player.x - (this.pos.x + this.w / 2)
      );
      let dy = max(
        this.pos.y - this.h / 2 - player.y,
        0,
        player.y - (this.pos.y + this.h / 2)
      );
      let dz = max(
        this.pos.z - this.d / 2 - player.z,
        0,
        player.z - (this.pos.z + this.d / 2)
      );
      let distance = sqrt(dx * dx + dy * dy + dz * dz);
      return distance < 100;
    }
  };

  // Falling stars
  this.Star = class {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.speed = random(1, 3);
      this.creationTime = millis();
      this.lifespan = 6000; // 6 seconds
      this.stopped = false;
    }

    drawStar(x, y) {
      let points = int(random(4, 7));

      let randomStrokeColor = color(random(255), random(255), random(255));
      let randomFillColor = color(random(255), random(255), random(255));

      strokeWeight(random(2, 5));

      stroke(randomStrokeColor);
      fill(randomFillColor);

      beginShape();
      for (let i = 0; i < points * 2; i++) {
        let angle = (360 / (points * 2)) * i + random(-15, 20);
        let r = i % 2 === 0 ? random(100, 140) : random(20, 40);
        let starX = x + cos(radians(angle)) * r;
        let starY = y + sin(radians(angle)) * r;
        curveVertex(starX, starY);
      }
      endShape(CLOSE);
    }

    update() {
      if (!this.stopped) {
        this.y += this.speed;
      }
    }

    show() {
      push();
      translate(this.x, this.y, this.z);
      // Stars face the camera
      let dir = createVector(
        cam.eyeX - this.x,
        cam.eyeY - this.y,
        cam.eyeZ - this.z
      );
      let up = createVector(0, 1, 0);
      let right = dir.cross(up).normalize();
      up = right.cross(dir).normalize();
      let mat = [
        right.x,
        right.y,
        right.z,
        0,
        up.x,
        up.y,
        up.z,
        0,
        -dir.x,
        -dir.y,
        -dir.z,
        0,
        0,
        0,
        0,
        1,
      ];
      applyMatrix(...mat);
      this.drawStar(0, 0);
      pop();
    }

    isExpired() {
      return millis() - this.creationTime > this.lifespan;
    }

    stop() {
      this.stopped = true;
    }
  };

  this.createFallingStar = function () {
    let x = random(-width, width);
    let y = -height;
    let z = random(-width, width);
    stars.push(new this.Star(x, y, z));
  };
}

function phase2() {
  let preloadTimer = 0;
  let fadeAlphaBg = 0;
  let fadeAlphaText = 0;
  let preloadDone = false;

  let words = [
    "STAR",
    "happy",
    "LOVE",
    "fun",
    "She",
    "laugh",
    "bridge",
    "butterfly",
    "Home",
    "sisters",
    "Anger",
    "hate",
    "sunny",
    "swim",
    "flowers",
    "SADNESS",
    "boReD",
    "where",
    "am",
    "are",
    "you",
    "be",
    "missed",
    "...",
    "wait",
    "why",
    "go away",
    "Do not",
    "come",
    "back",
    "house",
    "dad",
    "mom",
    "want",
    "meet",
    "talk",
    "let's",
    "don't",
    "for",
    "luck",
    "HAPPINESS",
    "eMptY",
    "stars",
    "hope",
    "how",
    "run",
    "cRy",
    "sing",
  ];

  let shapes = [];
  let draggingShape = null;
  let colors = [
    "#E15B5E",
    "#FFBE74",
    "#FFEA65",
    "#8EE5C4",
    "#CFEFFA",
    "#CA87BA",
    "#F3A9CA",
    "#9D9DF4",
  ];
  let lastShapeColor;

  let drawingCanvas;
  let currentColor;

  this.setup = function () {
    createCanvas(windowWidth, windowHeight);
    background(30);

    drawingCanvas = createGraphics(560, 310);
    drawingCanvas.background(255);

    // Set initial pen color to red
    currentColor = color(225, 91, 94);

    mic = new p5.AudioIn();
    mic.start();
    translate(-windowWidth / 2, -windowHeight / 2, 0);
  };

  this.draw = function () {
    if (preloadTimer < 4) {
      preloadTimer += deltaTime / 1000;

      // Background fade-in (0s to 0.4s)
      if (preloadTimer >= 0 && preloadTimer <= 0.4) {
        fadeAlphaBg = map(preloadTimer, 0, 0.4, 0, 255);
      }
      // Background stay visible (0.4s to 3.6s)
      else if (preloadTimer > 0.4 && preloadTimer <= 3.6) {
        fadeAlphaBg = 255;
      }
      // Background fade-out (3.6s to 4s)
      else if (preloadTimer > 3.6 && preloadTimer <= 4) {
        fadeAlphaBg = map(preloadTimer, 3.6, 4, 255, 0);
      }

      // Text fade-in (0.4s to 1s)
      if (preloadTimer >= 0.4 && preloadTimer <= 1) {
        fadeAlphaText = map(preloadTimer, 0.4, 1, 0, 255);
      }
      // Text stay visible (1s to 3s)
      else if (preloadTimer > 1 && preloadTimer <= 3) {
        fadeAlphaText = 255;
      }
      // Text fade-out (3s to 3.6s)
      else if (preloadTimer > 3 && preloadTimer <= 3.6) {
        fadeAlphaText = map(preloadTimer, 3, 3.6, 255, 0);
      }

      // Preload background fade-in
      fill(0, fadeAlphaBg);
      rect(0, 0, width, height);

      // Preload text fade-in
      fill(255, fadeAlphaText);
      textAlign(CENTER, CENTER);
      textSize(32);
      textFont(customFont);
      text("Phase 2: Everything feels wrong...", width / 2, height / 2);
    } else {
      preloadDone = true;
    }

    if (preloadDone) {
      background(0);

      stroke(60);
      noFill();

      let vol = mic.getLevel();
      let yoff = 0.0;
      for (let y = 0; y <= height; y += 30) {
        let xoff = 0;
        beginShape();
        for (let x = 0; x <= width; x += 10) {
          let yPos = y + map(noise(xoff, yoff), 0, 1, -vol * 500, vol * 500);

          // Set the vertex
          vertex(x, yPos);
          // Increment x dimension for noise
          xoff += 0.01;
        }
        endShape();
        // Increment y dimension for noise
        yoff += 0.5;
      }

      // Draw the black rectangle
      fill(0);
      stroke(200);
      strokeWeight(3);
      rect(160, 240, 600, 350, 5);

      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      textFont(lightFont);
      text("Tap the bag, a word appears,", (width * 3) / 4, height / 2);
      text("Mix and match, create a rhythm,", (width * 3) / 4, height / 2 + 40);
      text("A dada poem, that is it.", (width * 3) / 4, height / 2 + 80);

      // Draw the drawing canvas inside the black rectangle
      image(drawingCanvas, 180, 260);
      image(sachet, width / 2 + 400, 100, 230, 150);

      for (let shape of shapes) {
        shape.display();
      }
    }
  };

  this.mousePressed = function () {
    //Check if the mouse is over the sachet image
    let imgX = width / 2 + 300;
    let imgY = 160;
    if (
      mouseX > imgX &&
      mouseX < imgX + 230 &&
      mouseY > imgY &&
      mouseY < imgY + 150
    ) {
      let shapeColor = this.getRandomColor(lastShapeColor);
      let textColor = color(0);
      let shapeX = random(width);
      let shapeY = random(height);
      let word = random(words);
      let textSize = random(16, 28);
      let font = random([regularFont, customFont, lightFont]);
      shapes.push(
        new this.Shape(
          shapeX,
          shapeY,
          shapeColor,
          textColor,
          word,
          textSize,
          font
        )
      );
      lastShapeColor = shapeColor;
      lastTextColor = textColor;
    }

    // Check if the mouse is over any shape
    for (let shape of shapes) {
      if (shape.isMouseOver()) {
        draggingShape = shape;
        shape.offsetX = mouseX - shape.x;
        shape.offsetY = mouseY - shape.y;
        break;
      }
    }
  };

  this.mouseReleased = function () {
    draggingShape = null;
  };

  this.mouseDragged = function () {
    // Calculate the mouse position relative to the drawing canvas
    let x = mouseX - 180;
    let y = mouseY - 260;

    // Check if the mouse is within the bounds of the drawing canvas
    if (x >= 0 && x <= 560 && y >= 0 && y <= 310) {
      drawingCanvas.stroke(currentColor);
      drawingCanvas.strokeWeight(6);
      drawingCanvas.line(pmouseX - 180, pmouseY - 260, x, y);
    }

    if (draggingShape) {
      draggingShape.x = mouseX - draggingShape.offsetX;
      draggingShape.y = mouseY - draggingShape.offsetY;
    }
  };

  this.getRandomColor = function (lastColor) {
    let newColor;
    do {
      newColor = random(colors);
    } while (newColor === lastColor);
    return newColor;
  };

  this.Shape = class {
    constructor(x, y, color, textColor, word, textSize, font) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.textColor = textColor;
      this.word = word;
      this.textSize = textSize;
      this.font = font;
      this.width = textWidth(this.word) + 40;
      this.height = this.textSize + 30;
      this.offsetX = 0;
      this.offsetY = 0;
    }

    display() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, this.width, this.height, 5);
      fill(this.textColor);
      textAlign(CENTER, CENTER);
      textSize(this.textSize);
      textFont(this.font);
      text(this.word, this.x + this.width / 2, this.y + this.height / 2 - 10);
    }

    isMouseOver() {
      return (
        mouseX > this.x &&
        mouseX < this.x + this.width &&
        mouseY > this.y &&
        mouseY < this.y + this.height
      );
    }
  };

  this.keyPressed = function () {
    switch (key) {
      case "1":
        currentColor = color(225, 91, 94); // Red
        break;
      case "2":
        currentColor = color(255, 190, 116); // Orange
        break;
      case "3":
        currentColor = color(255, 234, 101); // Yellow
        break;
      case "4":
        currentColor = color(142, 229, 196); // Green
        break;
      case "5":
        currentColor = color(207, 239, 250); // Blue
        break;
      case "6":
        currentColor = color(157, 157, 244); // Purple-ish Blue
        break;
      case "7":
        currentColor = color(202, 135, 186); // Purple
        break;
      case "8":
        currentColor = color(243, 169, 230); // Pink
        break;
      case "M":
      case "m":
        if (bgMusicPhase2.isLoaded()) {
          if (bgMusicPhase2.isPlaying()) {
            bgMusicPhase2.stop();
          } else {
            bgMusicPhase2.play();
            bgMusicPhase2.loop();
          }
        }
        break;
      case "J":
      case "j":
        window.location.href = window.location.pathname + "?phase=1";
        break;
      case "K":
      case "k":
        window.location.href = window.location.pathname + "?phase=2";
        break;
      case "L":
      case "l":
        window.location.href = window.location.pathname + "?phase=3";
        break;
      case "I":
      case "i":
        window.location.href = window.location.pathname + "?phase=Instruction";
        break;
    }
  };

  this.getURLParameter = function (name) {
    return new URLSearchParams(window.location.search).get(name);
  };

  this.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
  };
}

function phase3() {
  let preloadTimer = 0;
  let fadeAlphaBg = 0;
  let fadeAlphaText = 0;
  let preloadDone = false;

  let particles = [];
  let numSegments = 12; // Kaleidoscope segments
  let angleStep;
  let changeFlow = false;
  let changeShape = false;
  let currentShape = "ellipse";

  this.setup = function () {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();

    angleStep = TWO_PI / numSegments;

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new this.Particle(random(width), random(height)));
    }
  };

  this.draw = function () {
    if (preloadTimer < 4) {
      preloadTimer += deltaTime / 1000;

      // Background fade-in (0s to 0.4s)
      if (preloadTimer >= 0 && preloadTimer <= 0.4) {
        fadeAlphaBg = map(preloadTimer, 0, 0.4, 0, 255);
      }
      // Background stay visible (0.4s to 3.6s)
      else if (preloadTimer > 0.4 && preloadTimer <= 3.6) {
        fadeAlphaBg = 255;
      }
      // Background fade-out (3.6s to 4s)
      else if (preloadTimer > 3.6 && preloadTimer <= 4) {
        fadeAlphaBg = map(preloadTimer, 3.6, 4, 255, 0);
      }

      // Text fade-in (0.4s to 1s)
      if (preloadTimer >= 0.4 && preloadTimer <= 1) {
        fadeAlphaText = map(preloadTimer, 0.4, 1, 0, 255);
      }
      // Text stay visible (1s to 3s)
      else if (preloadTimer > 1 && preloadTimer <= 3) {
        fadeAlphaText = 255;
      }
      // Text fade-out (3s to 3.6s)
      else if (preloadTimer > 3 && preloadTimer <= 3.6) {
        fadeAlphaText = map(preloadTimer, 3, 3.6, 255, 0);
      }

      // Preload background fade-in
      fill(0, fadeAlphaBg);
      rect(0, 0, width, height);

      // Preload text fade-in
      fill(255, fadeAlphaText);
      textAlign(CENTER, CENTER);
      textSize(32);
      textFont(customFont);
      text("Phase 3: Sometimes, I act like you used to.", width / 2, height / 2);
    } else {
      preloadDone = true;
    }

    if (preloadDone) {
      background(0, 0, 0);

      translate(width / 2, height / 2);

      // Draw kaleidoscope effect
      for (let i = 0; i < numSegments; i++) {
        push();
        rotate(i * angleStep);
        for (let particle of particles) {
          particle.update();
          particle.display();
        }
        pop();
      }

      // Reset translation and draw the static star on top
      resetMatrix();
      this.drawStarPhase3();
    }
  };

  this.drawStarPhase3 = function () {
    for (let i = 0; i < 6; i++) {
      let points = int(random(4, 9));

      let whiteColor = color(255, 255, 255, 20);

      strokeWeight(random(2, 5));

      stroke(whiteColor);
      fill(whiteColor);

      beginShape();
      for (let j = 0; j < points * 2; j++) {
        let angle = (360 / (points * 2)) * j + random(-15, 15);
        let r = j % 2 === 0 ? random(10, 140) : random(20, 50);
        let x = width / 2 + cos(radians(angle)) * r;
        let y = height / 2 + sin(radians(angle)) * r;
        curveVertex(x, y);
      }
      endShape(CLOSE);
    }
  };

  this.mousePressed = function () {
    if (changeShape) {
      currentShape = random(["ellipse", "rect", "triangle"]);
      changeShape = false;
    }
    for (let i = 0; i < 10; i++) {
      particles.push(
        new this.Particle(mouseX - width / 2, mouseY - height / 2, currentShape)
      );
    }
  };

  this.keyPressed = function () {
    if (key === "C" || key === "c") {
      numSegments = int(random(4, 13));
      angleStep = TWO_PI / numSegments;
    }
    if (key === "E" || key === "e") {
      changeShape = true;
    }

    if (key === "M" || key === "m") {
      if (bgMusicPhase3.isLoaded()) {
        if (bgMusicPhase3.isPlaying()) {
          bgMusicPhase3.stop();
        } else {
          bgMusicPhase3.play();
          bgMusicPhase3.loop();
        }
      }
    }
    if (key === "J" || key === "j") {
      window.location.href = window.location.pathname + "?phase=1";
    } else if (key === "K" || key === "k") {
      window.location.href = window.location.pathname + "?phase=2";
    } else if (key === "L" || key === "l") {
      window.location.href = window.location.pathname + "?phase=3";
    } else if (key === "I" || key === "i") {
      window.location.href = window.location.pathname + "?phase=Instruction";
    }
  };

  this.getURLParameter = function (name) {
    return new URLSearchParams(window.location.search).get(name);
  };

  this.Particle = class {
    constructor(x, y, shape = "ellipse") {
      this.pos = createVector(x, y);
      this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
      this.acc = createVector(0, 0);
      this.size = random(5, 15);
      this.color = color(random(255), random(255), random(255), 150);
      this.shape = shape;
    }

    update() {
      if (changeFlow) {
        this.acc = p5.Vector.sub(createVector(width / 2, height / 2), this.pos);
      } else {
        this.acc = p5.Vector.sub(
          createVector(mouseX - width / 2, mouseY - height / 2),
          this.pos
        );
      }
      this.acc.setMag(0.005);
      this.vel.add(this.acc);
      this.vel.limit(1);
      this.pos.add(this.vel);
    }

    display() {
      fill(this.color);
      if (this.shape === "ellipse") {
        ellipse(this.pos.x, this.pos.y, this.size);
      } else if (this.shape === "rect") {
        rect(this.pos.x, this.pos.y, this.size, this.size);
      } else if (this.shape === "triangle") {
        triangle(
          this.pos.x,
          this.pos.y - this.size / 2,
          this.pos.x - this.size / 2,
          this.pos.y + this.size / 2,
          this.pos.x + this.size / 2,
          this.pos.y + this.size / 2
        );
      }
    }
  };
}
