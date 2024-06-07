import Link from "next/link";
import { MdArrowRight } from "react-icons/md"

interface ClientCardProps {
    name: String,
    designation: String,
    company: String,

}

const ClientCard = ({
    name, designation, company
}: ClientCardProps
) => {
    return (
        <div className="flex flex-col px-8 py-8 bg-pink-50 gap-4 rounded-2xl max-w-[600px] w-full pb-[0.8rem]">
            <div className="flex justify-between">
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                <div className="text-right">
                    <h1 className="font-semibold">{name}</h1>
                    <p>{designation} | {company}</p>
                </div>
            </div>
            <p className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat expedita neque perferendis. Incidunt sed omnis illo modi, blanditiis itaque.
            </p>
            <div className="my-4">
                <Link href="/project" className="flex items-center text-red-800">
                    <p>View Projects </p>
                    <MdArrowRight />
                </Link>
            </div>
        </div>

    )
}

export default ClientCard;