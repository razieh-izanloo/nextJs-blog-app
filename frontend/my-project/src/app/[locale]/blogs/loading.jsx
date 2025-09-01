import { Spinner } from "@/components/spinner/spinner";
import "./loading.scss";

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-center">
        <span className="d-block text-loading">در حال بارگذاری اطلاعات</span>
        <Spinner />
      </div>
    </div>
  );
}
export default Loading;
