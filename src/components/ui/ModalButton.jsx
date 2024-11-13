import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ModalButton({ text, customStyle, onClickModalButton }) {
  return (
    <>
      <button
        onClick={onClickModalButton}
        className={`p-3 w-[100%] bg-red-500 hover:bg-red-700 duration-150
             text-white my-5 font-semibold  flex justify-center items-center rounded-[10px] cursor-pointer ${customStyle}`}
      >
        <span className="text-[20px]"> {text} </span>
        <span className="mx-2">
          <MdKeyboardDoubleArrowRight size={30} />
        </span>
      </button>
    </>
  );
}
