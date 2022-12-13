import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Reprehenderit ipsum iusto voluptates eius.
      Quibusdam hic at, repellendus magnam soluta id facilis quia
      repudiandae voluptas ipsa. Minima impedit earum quam maiores?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Templates = (args) => {
  return (
    <div>
      <TextComponent {...args} />;
    </div>
  );
};
