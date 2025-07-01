import { useEffect, useRef } from "react";

export function useOutSideClick<T extends HTMLElement>
(callback: ()=> void){
    const ref = useRef<T>(null);

    useEffect(()=>{
        const handleClickedOutSide=(e:MouseEvent)=>{
            if(ref.current && !ref.current.contains(e.target as Node)){
                callback();
            }
        }
        document.addEventListener('mousedown', handleClickedOutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickedOutSide)
        };
    }, [callback])
    return ref;
}