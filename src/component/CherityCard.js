import React from 'react'

const CharityCard = ()=>{


    const ale = ()=>{
        alert('we are sorry here is no functionality we workning of this website !!!!!! best regards shakil hossain')
    }
    return(
        <>

        <div id='des-para' className='container m-auto row'>
            <div className='para row m-auto '>
                <p className='col-8 m-auto text-center'>
                Welcome to CHIBA swap portal ! Here you will able to donate to charity choose by you 
(The CHIBA INU community) by swaping your precious $CHIBA Token for good cause
                </p>
            </div>


               <div id='card' className='card'>
                   <div className='card_head row'>
                    <div className='col-1'></div>
                       <div id='card_head' className='col-10'>
                             <h3 className='text-right'>CHARITY SWAP</h3>
                             <div id="cc" className='row'>
                                 <button onClick={ale} className='col-6'><i class="fas fa-cog"></i></button>
                                 <button onClick={ale} className='col-6'><i class="far fa-clock"></i></button>
                             </div>
                           
                       </div>
                       <hr id='hr'/>


                        <div id='chib'  >
                          <div className='cur1'>
                              <div style={{display:'flex'}}>
                                  
                          <img src="https://i.ibb.co/DCWXYN4/logo.jpg" alt="logo"/>
                                   <p style={{marginBottom:'0px', marginTop:'9px', marginLeft:'2px'}}>  CHIBA</p>
                              </div>
                              <div>
                               <span>Balance: 32,200 </span>
                              </div>
                              
                          </div>
                          <div className='priceVanue'>
                                  <span>16,100</span>
                              </div>
                              <div id='co'>
                                  <span>25%</span>
                                  <span style={{color:'#ffdb23'}}>50%</span>
                                  <span>75%</span>
                                  <span>100%</span>
                              </div>
                        </div>
  


                      <div className='arrow'>
                      <i class="fas fa-long-arrow-alt-down"></i>
                      </div>








                      <div id='chib' className='chib'  >
                          <div className='cur1'>
                              <div style={{display:'flex'}}>
                              <img src="https://i.ibb.co/Yh0MKH0/download.png" alt="download" />
                                   <p style={{marginBottom:'0px', marginTop:'9px', marginLeft:'2px'}}>  WWF</p>
                              </div>
                              <div>
                               
                              </div>
                              
                          </div>
                          <div className='priceVanue'>
                                  <span>16,100</span>
                              </div>
                             
                        </div>
  
  



                     <a id='donate' href='#'>Donate</a>



                   </div>
                   
                </div> 
              
        </div>
        </>
    )
}

export default CharityCard;