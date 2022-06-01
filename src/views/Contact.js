import React from 'react'

const Contact = () => {
  return (
    <div>
      <div class="card rgc">
        <div class="card-header">contacter</div>
        <div class="card-body">
          <form role="form">
            <div class="form-group mb-2">
              <label htmlfor="">Name</label>
              <input
                className="input"
                type="text"
                // onChange={onChange}
                name="name"
                placeholder="Name"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlfor="">Email</label>
              <input
                className="input"
                type="email"
                // onChange={onChange}
                name="email"
                placeholder="Email"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlfor="">Objet</label>
              <input
                className="input"
                type="password"
                // onChange={onChange}
                name="password"
                placeholder="Password"
              />
            </div>

            <div class="form-group mb-2">
              <label htmlFor="">message</label>
              
              <textarea name="message" className="input" class="form-control" rows="3" ></textarea>
              
            </div>

            <button type="submit" class="btn btn-primary mb-2">
              Send
            </button>

            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact