import Singleprice from "./Singleprice";


const Priceotion = () => {
    const priceoption =  [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym equipment",
                "Group fitness classes",
                "Free parking"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "All Basic Membership features",
                "Access to swimming pool",
                "Personal training sessions",
                "Sauna and steam room access"
            ],
            "price": 60.00
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "All Premium Membership features",
                "Access for up to 4 family members",
                "Family fitness classes"
            ],
            "price": 120.00
        },
        {
            "id": 4,
            "name": "Student Membership",
            "features": [
                "All Basic Membership features",
                "Discounted rate for students",
                "Access to study lounge"
            ],
            "price": 20.00
        }
    ]
    
    return (
        <div>
            <h2 className="font-bold text-center text-2xl  py-3">this is  price option </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
            
            {
                priceoption.map(option => <Singleprice key={option.id} option={option}></Singleprice>)
            }
            </div>
        </div>
    );
};

export default Priceotion;