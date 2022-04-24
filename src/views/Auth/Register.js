import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <div>
          
                <div class="card rg">

                <div class="card-header">
                    Register
                </div>
                <div class="card-body">
                    
                    <form action="" method="POST" role="form">
                        
                        <div class="form-group mb-2">
                            <label htmlfor="">Name</label>
                            <input className='input' type="text" class="input" id="" placeholder="Email"/>
                        </div>

                        <div class="form-group mb-2">
                            <label htmlfor="">Email</label>
                            <input className='input' type="text" class="input" id="" placeholder="Email"/>
                        </div>

                        <div class="form-group mb-2">
                            <label htmlfor="">Email</label>
                            <input className='input' type="text" class="input" id="" placeholder="Email"/>
                        </div>

                        <div class="form-group mb-2">
                            <label htmlFor="">Password</label>
                            <input className='input' type="text" class="input" id="" placeholder="password"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary mb-2">Register</button>
                        
                    </form>
                    
                </div>


                </div>
     </div>
    )
  }
}
