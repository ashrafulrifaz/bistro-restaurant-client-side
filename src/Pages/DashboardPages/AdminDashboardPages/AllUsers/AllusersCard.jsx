import { faTrashCan, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AllusersCard = ({item, id, refetch}) => {
    const {_id, email, name, role} = item
    const axiosPublic = useAxiosPublic()

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
                axiosPublic.delete(`/users/${_id}`)
                    .then(res => {
                        if(res.data.deletedCount){
                            refetch()
                            Swal.fire({
                              title: "Your item has been deleted.",
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

    const handleCreateAdmin = () => {
        Swal.fire({
            title: "Are you sure?",
            imageUrl: "https://i.ibb.co/G91M9f8/speech-bubble.gif",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "failed",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/users/${_id}`)
                    .then(res => {
                        if(res.data.modifiedCount){
                            refetch()
                            Swal.fire({
                              title: `${name} is now an admin`,
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
                <h3 className="font-medium text-base">{name}</h3>
            </th>
            <th>
                <h3 className="font-medium text-base">{email}</h3>
            </th>
            <th>
                { role ? <span className="uppercase">{role}</span> : <FontAwesomeIcon onClick={handleCreateAdmin} icon={faUserGroup} className="text-base bg-[#D1A054] text-white p-2.5 rounded-md cursor-pointer" />}
            </th>
            <th>
                <FontAwesomeIcon onClick={handleDeleteItem} icon={faTrashCan} className="text-base bg-red-600 text-white p-2.5 rounded-md cursor-pointer" />
            </th>
        </tr>
    );
};

export default AllusersCard;