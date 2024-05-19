import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Joke() {
    const [twopart,setTwopart] = useState(false);

    const [joke, setJoke] = useState('');
    const [setup, setSetup] = useState('');
    const [delivery, setDelivery] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const response = await axios.get('https://v2.jokeapi.dev/joke/any?amount=1');

            if (response.data.error) {
                setJoke('ERROR: I guess the jokes on you');
            } else {
                if (response.data.type === "twopart") {
                    setSetup(response.data.setup);
                    setDelivery(response.data.delivery);
                    setTwopart(true);
                } else {
                    setJoke(response.data.joke);
                    setTwopart(false);

                    
                }
            }
        } 

       getJoke();
    }, []);


    return (
        <div>
            {twopart ? (
                <div>
                    <p>{setup}</p>
                    <p>{delivery}</p>
                </div>
                ) : (
                <div>
                    <p>{joke}</p>
                </div>
                )}
        </div>
    );
}