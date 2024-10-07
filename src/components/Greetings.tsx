import { useState } from "preact/hooks";
import './styles/greetings.css';

interface Props {
    messages: string[]
}

export default function Greeting({messages} : Readonly<Props>) {

    const randomGreetingMessage = () => messages[ Math.floor( Math.random() * messages.length ) ];

    const [greetingMessage, setGreetingMessage] = useState(messages[0]);

    return (
        <div>
            <h3>{greetingMessage}! Gracias por visitarnos!</h3>
            <button onClick={ () => setGreetingMessage( randomGreetingMessage() ) }>
                New Greeting!
            </button>
        </div>
    )
}