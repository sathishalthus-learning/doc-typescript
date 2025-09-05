interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle2 = Colorful & Circle;