import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

interface DropdownProps {
  title: string;
  list: string[];
}

import "./Dropdown.css";

const Dropdown = ({ title, list }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex items-center">
        {title}
        <MdKeyboardArrowDown height={28} className="" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {list.map((item, index) => (
          <li key={index}>
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
