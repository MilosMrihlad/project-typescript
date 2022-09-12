import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';

function Home() {
    const messageRef = useRef<HTMLInputElement>(null);
    const ref = collection(firestore, 'message');

    const handleSave = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        let data = {
            message: messageRef.current?.value,
        };
        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <form onSubmit={handleSave}>
                <label>Zadej text:</label>
                <input type="text" ref={messageRef} />
                <button type="submit">Uložit</button>
            </form>
        </div>
    );
}

export default Home;
