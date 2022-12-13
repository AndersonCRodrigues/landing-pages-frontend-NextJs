import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit et
        deleniti, officiis maxime sequi eligendi temporibus molestiae soluta
        nostrum modi officia reprehenderit fugiat recusandae culpa doloremque?
        Praesentium, at totam.
      </p>
      <GoTop {...args} />
    </div>
  );
};
