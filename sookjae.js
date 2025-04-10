let a = 194;
let b = 187;
let c = 187;
let d = 194;

function setup() {
  createCanvas(530, 550);
}

function draw() {
  background("#ABE5FF");
  
  
  //옷
  fill("#DB0000");
  rect(153, 328,198, 200);
  ellipse(155, 355, 55);
  ellipse(353, 355, 55);
  rect(220, 333, 57, 50);
  rect(127, 356, 150, 150);
  rect(347, 356, 34, 150);
  fill("#AD0101");
  line(156, 390,156, 506);
  
  //머리카락
  noStroke();
  fill("#725429ff");
  ellipse(250, 200, 200, 210);
  rect(154, 230, 193, 150);

  //옷 넥라인  
  fill("#DB0000");
  rect(220, 333, 57, 50);
  noFill();
  arc(248, 333, 56, 50, 0, PI);
  
  //목  
  fill("#EEE3C4");
  rect(221, 303, 55, 30);
  arc(248, 333, 56, 50, 0, PI);
  
  //얼굴
  fill("#FBEFCE");
  arc(250, 204, 190, 210, radians(0), radians(180) );
  triangle(250, 140, 155, 204, 346, 205);
  //귀
  arc(155, 204, 50, 50, radians(80), radians(272) );
  arc(344, 201, 50, 50, radians(275), radians(92) );
  //귀걸이
  fill("#FFFBFB")
  ellipse(150, 218, 6, 6);
  ellipse(350, 218, 6, 6);

  //눈썹  
  stroke(0);
  strokeWeight(2);
  line(193, a, 230, b);
  line(265, c, 304, d);
  //쌍커풀
  stroke(1);
  fill("#EFE1BA");
  ellipse(209, 208, 33, 18);
  ellipse(285, 208, 33, 18);
  //눈
  fill(255);
  ellipse(209, 210, 33, 18);
  ellipse(285, 210, 33, 18);
  fill(0);
  ellipse(211, 210, 15, 13);
  ellipse(283, 210, 15, 13);
  fill(255);
  ellipse(207, 209, 5, 5);
  ellipse(278, 209, 5, 5);

  //입  
  noStroke();
  fill("#F33676ff");
  arc(248, 253, 65, 65, radians(0), radians(180) );
  fill(255);
  arc(248, 257, 45, 45, radians(0), radians(180) );
  //보조개
  fill("#CDC096");
  arc(298, 275, 7, 7, radians(80), radians(300) );
  arc(192, 258, 8, 8, radians(300), radians(70) );
  //볼터치
  fill("#F3367630");
  ellipse(200, 235, 40, 20);
  ellipse(295, 235, 40, 20);

  //코  
  fill("#CDC096");
  triangle(245, 219, 239, 229, 249, 240);

  //손  
  noStroke();
  fill("#FBEFCE");
  rect(137, 506, 16, 20);
  rect(351, 507, 16, 20);

  
  //마우스 클릭 시 옷 색이 바뀜
  if (mouseIsPressed) {
    fill("#04DD32");
    rect(153, 328,198, 200);
    ellipse(155, 355, 55);
    ellipse(353, 355, 55);
    rect(220, 333, 57, 50);
    rect(127, 356, 150, 150);
    rect(347, 356, 34, 150);
     fill("#DDC91F");
    line(156, 390,156, 506);
    //옷 넥라인  
    fill("#D6C42A");
    //rect(220, 333, 57, 50);
    //noFill();
    arc(248, 333, 56, 50, 0, PI);
    //목  
    fill("#EEE3C4");
    rect(221, 310, 55, 30);
    arc(248, 333, 56, 50, 0, PI);
    //머리카락
    noStroke();
    fill("#725429ff");
    rect(154, 310, 67, 70);
    rect(277, 310, 70, 70)
  }
  
  //키보드를 누르면 눈썹 각도가 바뀜
  if(keyIsPressed) {
    if (keyCode === UP_ARROW) {
      a += 0.5;
      b -= 0.5;
      c -= 0.5;
      d += 0.5;
    }
    if (keyCode === DOWN_ARROW) {
      a -= 0.5;
      b += 0.5;
      c += 0.5;
      d -= 0.5;
    }
  }
}