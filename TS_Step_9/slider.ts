interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: 'horizontal' | 'vertical';
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = '',
  numberOfSlides = 1,
  speed = 300,
  direction = 'horizontal',
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// It is necessary to type the settings object, which should depend
// on the ISlider interface
// All fields in it must be required.

// type ISliderWithOutSpeed = Readonly<Omit<ISlider, 'speed' | 'animationName'>>;
interface ICustomSlerOption
  extends Readonly<Omit<ISlider, 'speed' | 'animationName'>> {
  readonly speed: number;
}
const customSliderOptions: ICustomSlerOption = {
  container: 'id',
  numberOfSlides: 4,
  speed: 1100,
  direction: 'horizontal',
  dots: true,
  arrows: true,
};

function createCustomSlider(options: ICustomSlerOption): void {
  if ('container' in options) {
    console.log(options);
  }
}

createCustomSlider(customSliderOptions);
