import Feture from "./Feture";


const Singleprice = ({option}) => {
    const {id, name ,  price,features}  = option
    return (
        <div className="border shadow-lg rounded-xl p-4 flex flex-col " >
            <h2><span className="font-bold text-3xl">{price}</span>/month</h2>
            <h3 className="font-bold text-2xl py-3">{name}</h3>
            <div className="py-2 flex-grow">
                {
                    features.map((fea , idx) => <Feture key={idx} fea={fea}></Feture>)
                }
            </div>
            <button className="font-bold text-center bg-teal-100 hover:border py-2 w-full rounded-lg hover:bg-transparent hover:shadow-lg duration-500">Buy now</button>
        </div>
    );
};

export default Singleprice;