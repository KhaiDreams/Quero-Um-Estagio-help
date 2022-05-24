import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from "axios"

import styles from "../../styles/projects/map/map.module.css"

export default function Map() {
    const [data, setData] = useState([])

    async function getData() {
        await axios.get("http://localhost:8080")
            .then(data => setData(data.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getData()
     }, [])
     
    return (
        <main>
            <MapContainer className={styles.leaftletcontainer} center={[-23.6334841179179, -46.46843854558035]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-23.6334841179179, -46.46843854558035]}>
                    <Popup>{"My house <3"}</Popup>
                </Marker>
                {
                    data?.map(loc => (
                        <Marker key={data.id} position={[loc.latitude, loc.longitude]}>
                            <Popup>{loc.name}</Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </main>
    )
}