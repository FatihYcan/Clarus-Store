import { useProducts } from "../context/ProductProvider";
import { imageIcon } from "../helper/icons";

const Loading = () => {
  const { products } = useProducts();
  return (
    <div className="container">
      <div className="card-div">
        {products.map((_, i) => (
          <div key={i} className="">
            <div className="flex items-center justify-center h-80 animate-pulse bg-gray-300 rounded ">
              {imageIcon}
            </div>

            <div className="mt-4 w-full animate-pulse">
              <div className="flex justify-between w-full">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-8/12 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/12"></div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90px]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
