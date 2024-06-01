import classNames from "classnames";

type Props = {
    itemsLength: number;
    selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
    const arr = new Array(itemsLength).fill(0);
    return (
        <div className="flex justify-center gap-1 md:my-2">
            {arr.map((_, index) => {
                const selected = index === selectedIndex;
                return (
                    <div
                        className={classNames({
                            "h-2 w-2 rounded-full transition-all duration-300 bg-white mx-1":
                                true,
                            // tune down the opacity if slide is not selected
                            "opacity-50": !selected,
                            "w-8": selected,
                        })}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};
export default Dots;