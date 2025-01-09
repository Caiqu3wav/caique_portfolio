import React from 'react'

export default function HomeAbout() {
  return (
    <div className="flex justify-center items-center py-4 px-6 bg-firstColor min-h-700px">
      <div className='flex bg-white items-center justify-between px-4'>
        <h1>Caique</h1>
        <div>
          <div>
            <h1>Olá, eu sou o Caique</h1>
            <p>Desenvolvedor Front-end</p>
            <div className='flex items-center'>
            </div>
            <div>
              <h1>Caique</h1>
              <div className='flex flex-col gap-3'>

                <h2>Caique</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                  elit. At fugit laudantium libero quasi incidunt iste
                   nulla repellendus quae aut fugiat?</p>
                   <button className='self-end'>Acessar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
