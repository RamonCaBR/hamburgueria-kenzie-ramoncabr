import { useEffect } from "react"

export const useKeyDown = (key, callback) => {
    useEffect(() => {
        const handleKeyDown = e => {
            e.preventDefault()

            if (e.key === key) {
                callback(e)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])
}