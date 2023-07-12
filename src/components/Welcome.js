import React from "react"

export default function Welcome()
{
    return(
        <main className="main-container">
            <svg className="yellow-blop" width="270" height="273" viewBox="0 0 270 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4095 213.395C35.1213 182.851 -2.68208 153.782 1.17277 112.307C5.43944 66.401 39.8541 26.6412 82.4192 8.86711C122.797 -7.9937 170.035 1.74418 205.822 26.8506C235.947 47.9859 236.823 88.1244 246.141 123.729C256.17 162.051 282.521 202.811 260.501 235.779C237.539 270.159 188.991 275.432 147.931 270.768C112.318 266.723 87.7505 239.677 63.4095 213.395Z" fill="#FFFAD1"/>
            </svg>
            
            <h1 className="welcome-title">Quizzical</h1>
            <p className="welcome-info">Some description if needed</p>
            <button className="start-button">Start quiz</button>
            
            <svg className="blue-blop" width="297" height="235" viewBox="0 0 297 235" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M143.448 4.90596C184.961 1.77498 231.243 -9.72149 261.306 19.1094C294.581 51.0203 304.282 102.703 291.701 147.081C279.767 189.18 242.745 220.092 200.821 232.476C165.528 242.902 133.567 218.605 99.8993 203.738C63.6625 187.737 15.3588 182.993 3.25932 145.239C-9.35799 105.868 16.7305 64.5881 45.9358 35.3528C71.2672 9.99541 107.727 7.60006 143.448 4.90596Z" fill="#DEEBF8"/>
            </svg>

        </main>
    )
}