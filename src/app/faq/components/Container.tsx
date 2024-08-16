export type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    {
      props.children
    }
  </div>
};

export default Container;