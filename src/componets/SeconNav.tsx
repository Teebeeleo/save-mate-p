import Logop from "../assets/Logop.png";

type SeconNavProps={
  classname:string
}

function SeconNav({classname}:SeconNavProps) {
  return (
    <>
      <div>
        <div >
          <div >
            <div className="flex items-center gap-3 pt-4 mx-10">
                <img src={Logop} alt="logo" className=" bg-white rounded-xl p-1 " />
            <h2 className= {`font-semibold ${classname} `}>MySaveMate</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeconNav;
