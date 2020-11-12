import React, { Component } from 'react'

export default class Signup extends Component {
 render() {
   return (
     <form className="signup-form">
       <span className="login-signup-header">Sign Up</span>
       <div className="field">
         <input type="name" placeholder="Full Name" required />
       </div>
       <div className="field">
         <input type="email" placeholder="Email" required />
       </div>
       <div className="field">
         <input type="Password" placeholder="Password" required />
       </div>
       <div className="field">
         <input type="contact number" placeholder="Phone" required />
       </div>
       <div className="field">
         <button>Sign up</button>
       </div>
     </form>
   );
         }
}
