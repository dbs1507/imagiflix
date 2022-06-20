import React from "react"



const Score = ({ value = 10 }: { value?: number | String }) => {

    const getBorderColor = () => {
        if (value >= 7) {
            return "border-green-500";
        } else if (value < 4 && value > 7) {
            return "border-yellow-500"
        } else {
            return "border-red-500"
        }
    }

    return (

        <span className={`mx-2 py-2 px-3 inline-block border-2 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>
            {value}
        </span>

    )
}


export default Score;