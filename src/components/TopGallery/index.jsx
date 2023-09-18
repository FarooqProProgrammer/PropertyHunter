import React from 'react'
import PhotoAlbum from "react-photo-album";
import { TitleFont } from '../../utils';

const photos = [
    { src: "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1695018194%2Ffyuwehfv7kwvbbnr968x.jpg&w=640&q=75", width: 800, height: 600 },
    { src: "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1695026874%2Fwhju5d9z9vwuudrzw8t4.jpg&w=640&q=75", width: 1600, height: 900 },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 1000, height: 900 },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 1000, height: 900 },
    { src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 1000, height: 900 },
    { src: "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1695018194%2Ffyuwehfv7kwvbbnr968x.jpg&w=640&q=75", width: 1000, height: 900 },
    { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 1600, height: 900 },
    { src: "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1695034618%2Fx22167t5psjqvf2nvami.jpg&w=640&q=75", width: 1500, height: 900 },
    { src: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", width: 1500, height: 900 },
    { src: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", width: 1500, height: 900 },
    { src: "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1695036576%2Fssoumkniuzbzlc2dbiba.jpg&w=640&q=75", width: 1500, height: 900 },
];


export default function TopGallery() {
  return (
    <div className='px-10'>
        <div className='py-10'>
            <p className={`${TitleFont} font-bold`}>—Our Top Properties</p>
        </div>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  )
}
