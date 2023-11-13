import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>This is dashboard host</h1>
      <Outlet/>
    </>
  )
}