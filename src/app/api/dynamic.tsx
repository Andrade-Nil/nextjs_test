import { NextPage } from "next";

const Dynamic : NextPage = () => {
  return (
    <div className="main">
        <h1>Como funciona a renderização Next.js</h1>

        <div className="container h-full flex justify-between">
          <div className="">
            Gerado pelo Servidos:
          </div>
          <div className="">
            Gerado pelo Cliente
          </div>
        </div>
    </div>
  )
}
export default Dynamic