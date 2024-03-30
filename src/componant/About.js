import React from 'react'

export default function About(props) {
   
  return (
    
    <div className={`container bg-${props.mode==="dark"?"dark":"light"}`} >
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>About Us</h3>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
  <h2 class="accordion-header">
      <button class={`accordion-button bg-${props.mode==="dark"?"dark":"light"} text-${props.mode==="dark"?"light":"dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class={`accordion-body text-${props.mode==="light"?"dark":"dark"}`}>
         It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"dark":"light"}`}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  though the transition does limit overflow.
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}
