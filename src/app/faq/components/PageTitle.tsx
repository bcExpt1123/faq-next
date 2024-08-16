import {ReactNode} from "react";

export type PageTitleProps = {
  title: string | ReactNode;
}
const PageTitle = (props: PageTitleProps) => {
  return <h1 className="text-3xl font-bold text-gray-900 mb-8">
    {
      props.title
    }
  </h1>;
};

export default PageTitle;