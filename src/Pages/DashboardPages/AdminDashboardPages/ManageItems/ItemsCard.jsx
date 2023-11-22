import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ItemsCard = ({item, id, refetch}) => {
    const {_id, name, image, price} = item
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = () => {
        Swal.fire({
            title: "Are you sure?",
            imageUrl: "https://i.ibb.co/G91M9f8/speech-bubble.gif",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "failed",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${_id}`)
                    .then(res => {
                        if(res.data.deletedCount){
                            refetch()
                            Swal.fire({
                              title: `${name} item has been deleted`,
                              imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                              imageWidth: 100,
                              imageHeight: 100,
                              imageAlt: "failed",
                              showConfirmButton: false,
                              timer: 1500
                            });                            
                        }
                    })
            }
          });
    }

    return (
        <tr>
            <th>{id + 1}</th>
            <th>
                <img src={image} className="w-16 h-16" alt="" />
            </th>
            <th>
                <h3 className="font-medium text-lg">{name}</h3>
            </th>
            <th>
                <h3 className="font-medium text-base">${price}</h3>
            </th>
            <th>
                <Link to={`/dashboard/update/${_id}`} className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-lg bg-[#D1A054] text-white p-2.5 rounded-md cursor-pointer" />
                </Link>
            </th>
            <th>
                <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faTrashCan} className="text-lg bg-red-600 text-white p-2.5 rounded-md cursor-pointer" onClick={handleDeleteItem} />
                </div>
            </th>
        </tr>
    );
};

export default ItemsCard;