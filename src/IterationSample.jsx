import { useState } from "react"
import { ReactSortable } from "react-sortablejs";
import useLocalStorage from "use-local-storage";

export default function IterationSamploe() {
    const[names, setNames] = useLocalStorage("names", [
        
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(1);
    
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    
    return(
        <>  
        <section className="w-full flex justify-center">
            <div className="bg-purple-100 mt-8">
                <input className="outline-none border border-purple-300" value={inputText} onChange={onChange}/>
                <button onClick={onClick}>추가</button>
                <ul>
                <ReactSortable list={names} setList={setNames}>
                {/* 렌더링 되는 부분 */}
                {names.map((name) => (
                        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
                    ))}
                </ReactSortable>
                </ul>
            </div>
        </section>
        </>
    )
}