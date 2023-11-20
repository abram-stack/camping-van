import { useOutletContext } from "react-router-dom"

export default function HostVansDetailPrice() {
  const { van } = useOutletContext()
  // console.log(van)
  return (
    <>
      <h1>
        ${van.price} <span className="text-grey">/day</span>
      </h1>
    </>
  );
}