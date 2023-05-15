import React, { useState, useEffect } from 'react'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../../utils/FirebaseConfig";
import { v4 } from "uuid";

function AdminOne() {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/");

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="container mt-5">
            <div className="wow fadeIn">
                {/*  <h3 classNameName="platform pb-3">How we help people </h3> */}
                <h2 className=" bgl-primary m-b15"> <span> Upload images to Firebase </span></h2>
            </div>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s text-center">
                    <input
                        className=''
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <div className='mt-3'>
                        <button className='btn btn-primary rounded-xl gradient' onClick={uploadFile}> Upload Image</button>
                    </div>

                </div>
            </div>
            <div className="row align-items-center">
                {imageUrls && imageUrls.map((url) => {
                    return (
                        <div className="col-xl-3 col-lg-3 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                            <img src={url} alt='Loading...' />
                        </div>
                    )
                })}
            </div>

        </div>

    )
}

export default AdminOne