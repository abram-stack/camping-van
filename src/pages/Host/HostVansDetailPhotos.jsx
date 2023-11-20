import { useOutletContext } from "react-router-dom"

export default function HostVansDetailPhotos() {
  const { van } = useOutletContext()
  
  return (
    <>
      <img src={van.imageUrl} className="van-image"/>
    </>
  )
}