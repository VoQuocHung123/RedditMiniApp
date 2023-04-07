import { CSSProperties} from "react";
import { useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader"

const override = {
  top: '45%',
  left: '42%',
}; 
export default function Header({setEnableEdit}) {
  const user = useSelector((state)=>state.user)
  const pending = useSelector((state)=> state.user.pending)
  return (
    <>
    {pending ? (<BounceLoader cssOverride={override}  color="#36d7b7" size={60} loading={true} />):( <header >
        <div className={`infor-container bg-gradient-to-t from-red-400 to-yellow-400`}>
            <div className="infor-edit flex justify-end ">
                <button className="px-4 py-1 border-2 mx-2 my-2 text-white border-white rounded-xl" onClick={setEnableEdit}>Edit</button>
            </div>
            <div className="infor-avt w-[150px] m-3 ">
                <img className="rounded-xl" src={user.avatar} alt="" />
            </div>
            <div className="infor-username mx-3">
                <p className="font-bold text-lg text-white">{user.name}</p> 
            </div>
            <div className="infor-age mx-3 text-white">
                {user.age}
            </div>
            <div className="infor-about mx-3 pb-3 text-white">
                {user.about}
            </div>
        </div>
      </header>)}
 
     
    </>
  );
}
