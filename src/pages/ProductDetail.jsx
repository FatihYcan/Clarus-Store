import { useLocation, useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const ProductDetail = () => {
  const { title: params } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // console.log(state);
  // console.log(title);

  if (!state) return <ErrorPage />;

  const { title, category, thumbnail, price, images, description } = state;

  return (
    <div className="container">
      <div className="mt-6 w-full ">
        <article className="mx-auto w-full block lg:flex mt-4 h-full 2xl:h-[70vh] shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
            <div className="w-full row-span-3 mb-4">
              <img
                className="h-full w-full rounded-lg object-contain"
                src={thumbnail}
                alt=""
              />
            </div>
            <div className="grid grid-cols-4 gap-4 row-span-1">
              {images.map((item, i) => (
                <div key={i}>
                  <img
                    className="h-[15vh] w-full rounded-lg object-contain"
                    src={item}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{title}</h3>
              <p className="text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex  mt-2 pt-3 ml-4 mr-2">
              <div className="">
                <span className="block text-gray-900">
                  Category : {category}
                </span>
                <span className="block  text-sm">Price : {price} $</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => navigate(-1)}
                className="border rounded-lg bg-labelColor text-white p-2"
              >
                Geri
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="border rounded-lg bg-main text-white p-2"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;
