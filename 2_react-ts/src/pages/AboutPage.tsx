import React from "react"
import { useHistory } from "react-router"

export default function AboutPage() {
  const history = useHistory()
  return (
    <div>
      <h1>Qite important information!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reiciendis
        nemo delectus excepturi veritatis voluptatem architecto fugiat possimus
        est neque eaque rerum optio numquam molestias aperiam aspernatur
        voluptas qui hic odio laboriosam aut harum dolorem beatae animi! Dolorem
        quos autem corporis quisquam sed fugiat facere amet dicta cumque
        pariatur? At voluptatum quia sunt architecto obcaecati, ducimus aliquid
        delectus est iste rerum nisi maiores, dignissimos quisquam blanditiis
        odio molestiae provident, quo soluta excepturi pariatur sint similique
        corrupti! Quaerat, consequatur tempore nam asperiores facilis, natus
        accusamus et veritatis iste, soluta ratione? Officiis impedit quasi unde
        quibusdam, sed tenetur cumque voluptate delectus nesciunt, et
        repudiandae atque corporis quidem, blanditiis minima ab culpa assumenda.
        Quisquam explicabo quae ad facilis quidem molestias beatae illum ipsam
        itaque eius. Reiciendis ratione fugiat quod in saepe odio illo mollitia,
        hic beatae voluptatum alias esse, distinctio molestias. Dolorem
        repudiandae nisi ipsum vel reiciendis ducimus eligendi incidunt
        provident. Veniam, voluptate!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Go Todos!
      </button>
    </div>
  )
}
