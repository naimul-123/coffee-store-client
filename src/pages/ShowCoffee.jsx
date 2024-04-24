
import { useLoaderData } from 'react-router-dom';

const ShowCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div>
            Show coffee section
        </div>
    );
};

export default ShowCoffee;