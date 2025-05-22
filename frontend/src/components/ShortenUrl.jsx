import { useState } from "react";
import {isUrl} from 'check-valid-url'
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import axios from 'axios'
function ShortenUrl() {

    const [url,setUrl] = useState("");
    const[short,setShort] = useState("");

    const handleSubmit = async () => {
    let fixedUrl = url;
    if (!/^https?:\/\//i.test(fixedUrl)) {
        fixedUrl = "https://" + fixedUrl;
    }

    const isValidUrl = isUrl(fixedUrl);
        if (isValidUrl) {
            try {
                const data = await axios.post("https://croppd-backend.onrender.com/api/create", { url: fixedUrl });
                setShort(data.data);
            } catch (error) {
                console.error("Error creating short URL:", error);
                alert("An error occurred while shortening the URL.");
            }
        } else {
            alert("Enter Valid Url!");
            setUrl("");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(short);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
    }


    return (
        <>
            <div 
            className="glass xl:w-100  w-75 flex flex-col justify-center items-center p-10 rounded-xl"
            >
                <h1 className="text-white text-xl pb-3">CroppD</h1>
                <input placeholder="Enter Your Url" 
                className="text-sm bg-white p-2 ps-4 pe-4  m-2 xl:w-75 w-60 rounded-sm shadow-xl/50 shadow-black"
                value={url}
                onChange={(e)=>{setUrl(e.target.value);}}
                type="link"
                >

                </input>
                <button 
                className="text-sm  bg-black xl:w-75 w-60 text-white p-3 m-2 round rounded-sm"
                onClick={() => {handleSubmit()}}
                >
                    Shorten Url
                </button>

                { short && (
                    <>
                    <div
                    className="bg-white  xl:w-75 w-60 m-2 round rounded-sm text-center flex justify-end items-center h-10">
                        <p className="text-[10px] xl:text-xs text-blue-500 me-3">{short}</p>
                        <button onClick= {()=> {handleCopy()}} className="bg-black text-sm h-10 xl:w-20 w-15 text-white rounded-e-sm  ">Copy</button>
                    </div>
                    </>
                )}

        <div className="absolute bottom-5 flex items-center gap-3 text-white text-sm">
            <a
            href="https://github.com/arhmm7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-400"
            >
            <FaGithub className="text-lg" />
            GitHub
            </a>

            <span className="text-gray-500">|</span>

            <a
            href="https://www.linkedin.com/in/arham-khan-426545264/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-400"
            >
            <FaLinkedin className="text-lg" />
            LinkedIn
            </a>
            </div>
        </div>
            <div className="absolute bottom-1 text-xs text-gray-500">
            © {new Date().getFullYear()} CroppD. All rights reserved.
            </div>

        </>
    );
}

export default ShortenUrl;
