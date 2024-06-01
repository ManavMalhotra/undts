import classNames from "classnames";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-4 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
      >
        <BsArrowLeftCircleFill color="#8F2D26" size={32} />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className=""
      >
        <BsArrowRightCircleFill color="#8F2D26" size={34} className="bg-white" />
      </button>
    </div>
  );
};
export default CarouselControls;