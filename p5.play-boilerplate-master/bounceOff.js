function bounceOff(o1, o2)
{
  if((o2.x - o1.x) < (o2.width/2 + o1.width/2))
  {
    o1.velocityX = o1.velocityX * -1;
    o2.velocityX = o2.velocityX * -1;
  }
}