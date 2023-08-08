import { useRef, useEffect } from "react"

export const useClickOut = (callback) => {
    const ref = useRef(null)

    useEffect(() => {

        const handleClickOut = e => {
            e.preventDefault()

            if (!ref.current.contains(e.target)) {
                callback(e)
            }
        }

        window.addEventListener("mousedown", handleClickOut)

        return () => {
            window.removeEventListener("mousedown", handleClickOut)
        }
    }, [])

    return ref
}