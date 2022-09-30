import React from "react"
import Bio from './images/bio.jpg'

export function About() {
   return (
      <>
      <div className="container mb-5 pb-5">
         <div className="row">
            <div className="col-md-6">
               <img src={Bio} className="d-inline w-100 rounded-2 mb-3" alt="KS Logo"/>
            </div>
            <div className="col-md-6 text-white d-flex align-items-center vstack">
            <div className="text-white text-center mb-2">
                  <h1>Daniel McNeil</h1>
                  <h5>Founder/Owner</h5>
               </div>
               <div className="p-2 mb-5">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis commodo odio aenean sed. Lacus sed turpis tincidunt id aliquet. Facilisi morbi tempus iaculis urna id. Eu sem integer vitae justo eget magna fermentum iaculis. Rutrum quisque non tellus orci ac auctor augue. Sagittis purus sit amet volutpat consequat mauris nunc. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Amet consectetur adipiscing elit ut aliquam. Mus mauris vitae ultricies leo integer malesuada nunc. Libero justo laoreet sit amet cursus sit.</p>

                  <p>Magna ac placerat vestibulum lectus mauris ultrices eros in. Eu ultrices vitae auctor eu augue. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Etiam erat velit scelerisque in. Odio ut enim blandit volutpat maecenas. Tristique risus nec feugiat in fermentum. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Diam ut venenatis tellus in metus vulputate eu. Sem fringilla ut morbi tincidunt. Dui vivamus arcu felis bibendum ut. Risus nullam eget felis eget.</p>

                  <p>Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Mattis aliquam faucibus purus in massa tempor nec. Eu feugiat pretium nibh ipsum. Placerat vestibulum lectus mauris ultrices eros. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Auctor augue mauris augue neque gravida in. In iaculis nunc sed augue lacus viverra vitae congue.</p>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}