import Button from "./Button";
import HeadingTertiary from "./HeadingTertiary";
import { PiWarning } from "react-icons/pi";
import { HiOutlineX } from "react-icons/hi";

function Modal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onCancel}
      className="fixed left-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-mobile-nav px-4 backdrop-blur-sm mob:px-2"
    >
      <div className="relative w-full max-w-3xl rounded-lg bg-brandtint p-12 mob:p-6">
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-5">
            <span className="child:h-8 child:w-8">
              <PiWarning />
            </span>
            <HeadingTertiary>Attention</HeadingTertiary>
          </div>

          <p className="text-lg font-semibold">{message}</p>
        </div>

        <div className="flex justify-between gap-8 mobsm:flex-col mobsm:items-center">
          <div>
            <Button type="primary-danger" onClick={onConfirm}>
              Confirm
            </Button>
          </div>
          <div>
            <Button type="primary" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
        <button className="absolute right-5 top-5" onClick={onCancel}>
          <span className="child:h-6 child:w-6">
            <HiOutlineX />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Modal;
