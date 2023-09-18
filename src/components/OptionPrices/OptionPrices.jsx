import OptionPrice from "../OptionPrice/OptionPrice";

const OptionPrices = () => {
    
    const membershipOptions = [
        {
          "id": 1,
          "option_name": "Basic Membership",
          "price": 49.99,
          "features": [
            "Access to cardio and weightlifting areas",
            "Group fitness classes (limited)",
            "Locker room access",
            "Discounts on gym merchandise",
            "Monthly fitness assessment"
          ]
        },
        {
          "id": 2,
          "option_name": "Premium Membership",
          "price": 79.99,
          "features": [
            "Full access to all gym facilities",
            "Unlimited group fitness classes",
            "Personal trainer consultation (1 session)",
            "Access to sauna and spa",
            "Towel service",
            "Nutritional guidance"
          ]
        },
        {
          "id": 3,
          "option_name": "Family Membership",
          "price": 129.99,
          "features": [
            "Access for 2 adults and 2 children",
            "Full access to all gym facilities",
            "Family-friendly classes",
            "Locker room access",
            "Childcare services",
            "Discounts on family fitness programs"
          ]
        }
      ];
      
      
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold my-10 text-blue-500">Best prices in the town</h2>
          <div className="grid md:grid-cols-3 gap-4">
          {
                membershipOptions.map(option => <OptionPrice key={option.id} option={option}></OptionPrice>)
            }
          </div>
        </div>
    );
};

export default OptionPrices;