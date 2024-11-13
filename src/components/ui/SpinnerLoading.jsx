import Container from "./Container";
import style from "./SpinnerLoading.module.css";
export default function SpinnerLoading() {
  return (
    <Container>
      <div className="w-[100%] flex justify-center flex-col items-center bg-white h-[400px] rounded">
        <span className={`${style.spinner}`}> </span>
      </div>
    </Container>
  );
}
