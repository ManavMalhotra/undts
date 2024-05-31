import classNames from "classnames";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
      >
        <FaArrowCircleLeft color="#8F2D26" size={24} />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
      >
        <FaArrowCircleRight color="#8F2D26" size={24} />
      </button>
    </div>
  );
};
export default CarouselControls;