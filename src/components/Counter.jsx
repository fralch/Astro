import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button className="border px-4 py-2" onClick={() => setCount(count + 1)}>+</button>
            <button className="border px-4 py-2" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}