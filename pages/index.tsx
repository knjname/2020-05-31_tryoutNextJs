import styled from "@emotion/styled";
import tw from "twin.macro";
export default () => (
  <div>
    <section
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1590690726331-cd7699f1a415?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max")',
      }}
      className="w-screen h-screen bg-no-repeat bg-cover flex justify-center items-center"
    >
      <Component>
        <span className="text-pink-400">M</span>y biograph
        <span className="text-green-400">y</span>
      </Component>
    </section>
  </div>
);

const Component = styled.h1`
  ${tw`text-gray-100 uppercase font-semibold text-6xl`}
`;
