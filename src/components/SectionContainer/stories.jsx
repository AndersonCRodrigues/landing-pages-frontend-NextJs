import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste
          fugit excepturi molestias! Rem totam sapiente deleniti nesciunt quod
          perferendis dicta enim minus voluptate porro harum distinctio, nam,
          corrupti illum.
        </p>
      </div>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />;
    </div>
  );
};
